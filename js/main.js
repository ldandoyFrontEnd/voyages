let menuDowns = document.querySelectorAll('.dropdown-toggle');

menuDowns.forEach(dropdown => {
    dropdown.addEventListener('click', (event) => {
        event.preventDefault();

        if (
            event.target.parentElement.querySelector('.dropdown-menu').style.display == "none" ||
            event.target.parentElement.querySelector('.dropdown-menu').style.display == ""
        ) {
            event.target.parentElement.querySelector('.dropdown-menu').style.display = "block";
        } else {
            event.target.parentElement.querySelector('.dropdown-menu').style.display = "none"
        }
    })
})