window.onload = function () {
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
            //creates a span needed for a check button
            var span = document.createElement('SPAN');
            span.setAttribute("class", "check");
            //Creates an li element and appends it to the list
            listItem.appendChild(span);
            listItem.append(itemText);
            list.appendChild(listItem);
            //changes the displayed count of list items
            updateNumbOfItems();
        }
    });
};
function deleteItem(deleteSpanItem) {
    var itemToDelete = deleteSpanItem.parentElement;
    var list = itemToDelete.parentElement;
    list.removeChild(itemToDelete);
    updateNumbOfItems();
}
//changes the displayed count of list items
function updateNumbOfItems() {
    var numbOfItems = document.querySelector(".total-items");
    var listLength = document.querySelector(".list").children.length;
    numbOfItems.innerText = listLength + " items left";
}
function markAsCompleted(checkCircle) {
    var itemCompleted = checkCircle.parentElement;
    itemCompleted.setAttribute('class', 'completed');
    var numbOfItems = document.querySelector(".total-items");
    var listLength = document.querySelector(".list").children.length - 1;
    numbOfItems.innerText = listLength + " items left";
}
//# sourceMappingURL=index.js.map