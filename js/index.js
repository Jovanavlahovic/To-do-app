window.onload = function () {
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
            var span = document.createElement('SPAN');
            span.setAttribute('class', 'check');
            listItem.appendChild(span);
            listItem.append(itemText);
            list.appendChild(listItem);
        }
    });
};
//# sourceMappingURL=index.js.map