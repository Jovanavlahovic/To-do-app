window.onload = function() {

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
            let span = document.createElement('SPAN');
            span.setAttribute('class', 'check');
            listItem.appendChild(span);
            listItem.append(itemText);
            list.appendChild(listItem);
        }
    })

}

