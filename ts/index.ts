
window.onload = function() {
    //Displays the number of list elements at the bottom of the app
    updateNumbOfItems();

    // Theme is changed when clicked on sun/moon img in header
    let toggleThemeBtn = document.getElementById("toggle-theme-btn");
    let container = document.getElementById('container');

    toggleThemeBtn.addEventListener('click', () => {
        let theme = toggleThemeBtn.getAttribute('alt');
        
        if(theme == 'theme-dark'){
            toggleThemeBtn.setAttribute('alt', 'theme-light');
            toggleThemeBtn.setAttribute("src", "./images/icon-sun.svg");
            container.setAttribute('class', 'dark');
        }
        if(theme == 'theme-light'){
            toggleThemeBtn.setAttribute("alt", "theme-dark");
            toggleThemeBtn.setAttribute("src", "./images/icon-moon.svg");
            container.setAttribute("class", "light");
        }
    })


    //Adds new list item when 'Enter' is pressed
    let addItemInput = document.getElementById('add') as HTMLInputElement;
    let list = document.querySelector('.list');

    addItemInput.addEventListener('keypress', (e) => {
        if(e.key == 'Enter'){
            let itemText: string = addItemInput.value;
            let listItem = document.createElement('LI');

            //creates a span needed for a check button
            let span = document.createElement('SPAN');
            span.setAttribute("class", "check");
            
            //Creates an li element and appends it to the list
            listItem.appendChild(span);
            listItem.append(itemText);
            list.appendChild(listItem);

            //changes the displayed count of list items
            updateNumbOfItems();
        }
    })


}

function deleteItem(deleteSpanItem: HTMLSpanElement): void{
  let itemToDelete = deleteSpanItem.parentElement;
  let list = itemToDelete.parentElement;
  list.removeChild(itemToDelete);

  updateNumbOfItems();
}


//changes the displayed count of list items
function updateNumbOfItems():void{
    let numbOfItems: HTMLParagraphElement = document.querySelector(
      ".total-items");
    let listLength: number = document.querySelector(".list").children.length;
    numbOfItems.innerText = `${listLength} items left`;
}

function markAsCompleted(checkCircle: HTMLSpanElement): void{
     let itemCompleted = checkCircle.parentElement;
     itemCompleted.setAttribute('class', 'completed');

      let numbOfItems: HTMLParagraphElement = document.querySelector(".total-items");
      let listLength: number = document.querySelector(".list").children.length -1;
      numbOfItems.innerText = `${listLength} items left`;
}

