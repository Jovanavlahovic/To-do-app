
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

            //creates a span needed for check button
            let checkSpan = document.createElement('SPAN');
            checkSpan.setAttribute("class", "check");
            let checkImg = document.createElement("img");
            checkImg.setAttribute("src", "./images/icon-check.svg");
            checkImg.setAttribute("alt", "check");
            checkSpan.appendChild(checkImg);

            //creates a span needed for delete button
            let deleteSpan = document.createElement('span');
            deleteSpan.setAttribute('class', "cross");
            let crossImg = document.createElement("img");
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
        }
    })

    list.addEventListener('click', function(e){
      if(e.target instanceof Element){
          
          //Marks selected list element as completed
          if(e.target.classList.contains('check')){
              markAsCompleted(e.target as HTMLSpanElement);
          }
          
          //Deletes selected list element
          if(e.target.getAttribute('alt') == 'cross'){
              let li = e.target.parentElement;
              deleteItem(li);
          }
      }
    })
    
    let allListItems = document.querySelectorAll('ul.list li');
    let listItems = Array.prototype.slice.call(allListItems);

    //Shows only 'completed' items in a list
    document.querySelector('#show-completed').addEventListener('click', e => {
        for(let li of listItems){
            if(li.classList == 'completed'){
                li.classList.add('show');
            } else{
                li.classList.add('hide');
            }
        }
    })

    //Shows all items in a list
    document.getElementById('all').addEventListener('click', e => {
        for(let li of listItems){
            li.classList.remove('hide');
        }
    })

    //Removes all 'completed' items in a list
    document.querySelector('.clear').addEventListener('click', (e) => {
        let completedListItems = document.querySelectorAll("li.completed");
        let arrayOfItems = Array.prototype.slice.call(completedListItems);

        for(let li of arrayOfItems){
            list.removeChild(li);
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

      //Updated the number of uncompleted items on the list  
      let numbOfItems: HTMLParagraphElement = document.querySelector(".total-items");
      let listLength: number = document.querySelector(".list").children.length - document.querySelectorAll('.completed').length;
      numbOfItems.innerText = `${listLength} items left`;
}

