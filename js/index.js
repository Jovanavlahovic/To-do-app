//Displays the number of list elements at the bottom of the app
updateNumbOfItems();
// Theme is changed when clicked on sun/moon img in header
var toggleThemeBtn = document.getElementById("toggle-theme-btn");
var container = document.getElementById('container');
toggleThemeBtn.addEventListener('click', function () {
    var theme = toggleThemeBtn.getAttribute('alt');
    if (theme == 'theme-dark') {
        toggleThemeBtn.setAttribute('alt', 'theme-light');
        toggleThemeBtn.setAttribute("src", "./images/icon-sun.svg");
        container.setAttribute('class', 'dark');
    }
    if (theme == 'theme-light') {
        toggleThemeBtn.setAttribute("alt", "theme-dark");
        toggleThemeBtn.setAttribute("src", "./images/icon-moon.svg");
        container.setAttribute("class", "light");
    }
});
//Adds new list item when 'Enter' is pressed
var addItemInput = document.getElementById('add');
var list = document.querySelector('.list');
addItemInput.addEventListener('keypress', function (e) {
    if (e.key == 'Enter') {
        var itemText = addItemInput.value;
        var listItem = document.createElement('LI');
        //creates a span needed for check button
        var checkSpan = document.createElement('SPAN');
        checkSpan.setAttribute("class", "check");
        var checkImg = document.createElement("img");
        checkImg.setAttribute("src", "./images/icon-check.svg");
        checkImg.setAttribute("alt", "check");
        checkSpan.appendChild(checkImg);
        //creates a span needed for delete button
        var deleteSpan = document.createElement('span');
        deleteSpan.setAttribute('class', "cross");
        var crossImg = document.createElement("img");
        crossImg.setAttribute("src", "./images/icon-cross.svg");
        crossImg.setAttribute("alt", "cross");
        deleteSpan.appendChild(crossImg);
        //Creates an li element and appends it to the list
        listItem.append(checkSpan);
        listItem.append(itemText);
        listItem.appendChild(deleteSpan);
        list.appendChild(listItem);
        //changes the displayed count of list items
        updateNumbOfItems();
        //clears text from input field
        addItemInput.value = '';
        setDraggable();
    }
});
//Marks selected list element as completed
list.addEventListener('click', function (e) {
    e.stopPropagation();
    if (e.target instanceof Element) {
        if (e.target.classList.contains("check"))
            markAsCompleted(e.target);
        else if (e.target.getAttribute("alt") === "check") {
            markAsCompleted(e.target.parentElement);
        }
    }
    return false;
});
//deletes selected list element
list.addEventListener('click', function (e) {
    e.stopPropagation();
    if (e.target instanceof Element) {
        if (e.target.getAttribute('alt') === 'cross') {
            deleteItem(e.target.parentElement);
        }
    }
    return false;
});
var allListItems = document.querySelectorAll('ul.list li');
var listItems = Array.prototype.slice.call(allListItems);
//Shows only 'completed' items in a list
document.querySelector('#show-completed').addEventListener('click', function (e) {
    for (var _i = 0, listItems_1 = listItems; _i < listItems_1.length; _i++) {
        var li = listItems_1[_i];
        if (li.classList == 'completed') {
            li.classList.add('show');
        }
        else {
            li.classList.add('hide');
        }
    }
});
//Shows all items in a list
document.getElementById('all').addEventListener('click', function (e) {
    for (var _i = 0, listItems_2 = listItems; _i < listItems_2.length; _i++) {
        var li = listItems_2[_i];
        li.classList.remove('hide');
    }
});
//Removes all 'completed' items in a list
document.querySelector('.clear').addEventListener('click', function (e) {
    var completedListItems = document.querySelectorAll("li.completed");
    var arrayOfItems = Array.prototype.slice.call(completedListItems);
    for (var _i = 0, arrayOfItems_1 = arrayOfItems; _i < arrayOfItems_1.length; _i++) {
        var li = arrayOfItems_1[_i];
        list.removeChild(li);
    }
});
function deleteItem(deleteSpanItem) {
    var itemToDelete = deleteSpanItem.parentElement;
    var list = itemToDelete.parentElement;
    list.removeChild(itemToDelete);
    updateNumbOfItems();
}
//changes the displayed count of list items
function updateNumbOfItems() {
    var numbOfItems = document.querySelector(".total-items");
    var listLength = document.querySelector(".list").children.length - document.querySelectorAll('.completed').length;
    numbOfItems.innerText = listLength + " items left";
}
function markAsCompleted(checkCircle) {
    var itemCompleted = checkCircle.parentElement;
    if (!itemCompleted.classList.contains('completed')) {
        itemCompleted.setAttribute("class", "completed");
    }
    else if (itemCompleted.classList.contains('completed')) {
        itemCompleted.classList.remove('completed');
    }
    updateNumbOfItems();
}
//functions that enable drag & drop functionalities to all list items
var dragSrcEl = null;
function handleDragStart(e) {
    this.style.opacity = "0.4";
    dragSrcEl = this;
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/html", this.innerHTML);
}
function handleDragOver(e) {
    if (e.preventDefault) {
        e.preventDefault();
    }
    e.dataTransfer.dropEffect = "move";
    return false;
}
function handleDragEnter(e) {
    this.classList.add("over");
}
function handleDragLeave(e) {
    this.classList.remove("over");
}
function handleDrop(e) {
    if (e.stopPropagation) {
        e.stopPropagation();
    }
    if (dragSrcEl != this) {
        dragSrcEl.innerHTML = this.innerHTML;
        this.innerHTML = e.dataTransfer.getData("text/html");
    }
    return false;
}
function handleDragEnd(e) {
    this.style.opacity = "1";
    allListItems.forEach(function (item) {
        item.classList.remove("over");
    });
}
function setDraggable() {
    var allListItems = document.querySelectorAll("ul.list li");
    allListItems.forEach(function (item) {
        item.setAttribute("draggable", "true");
        item.addEventListener("dragstart", handleDragStart, false);
        item.addEventListener("dragenter", handleDragEnter, false);
        item.addEventListener("dragover", handleDragOver, false);
        item.addEventListener("dragleave", handleDragLeave, false);
        item.addEventListener("drop", handleDrop, false);
        item.addEventListener("dragend", handleDragEnd, false);
    });
}
document.addEventListener("DOMContentLoaded", setDraggable);
//# sourceMappingURL=index.js.map