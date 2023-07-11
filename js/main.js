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

const valid = () => {
    console.log("test");

    const nameInput = document.querySelector('.nameInput');
    const emailInput = document.querySelector('.emailInput');
    const msgElement = document.querySelector('.msg');
    let msg = "";
    let validRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    msgElement.style.display = "none";
    msgElement.innerHTML = "";

    if (nameInput.value.length < 4) {
        msg += "<div>Le nom est trop petit</div>";
        nameInput.focus();
    }

    if ( !emailInput.value.match(validRegexp) ) {
        msg += "<div>Email mal formaté</div>";
        emailInput.focus();
    }

    if (msg == "") {
        return true;
    }

    msgElement.innerHTML = msg;
    msgElement.style.display = "block";

    return false;
}