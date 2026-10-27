document.getElementById('vacationForm').addEventListener('submit', function(event) {
    let isValid = true;
    
    clearErrors();

    let destination = document.getElementById("Destination").value;
    let date = document.getElementById("date").value;
    let guest = document.getElementById("guest").value;

    if (destination === "none" || destination === "") {
        document.getElementById("err-Destination").style.display = "block";
        isValid = false;
    }

    if (date === "") {
        document.getElementById("err-date").style.display = "block";
        isValid = false;
    }

    // isnt empty nor 0 using or ||
    if (guest === "" || parseInt(guest) <= 0) {
        document.getElementById("err-guest").style.display = "block";
        isValid = false;
    }

    if (!isValid) {
        event.preventDefault();
    }
});

function clearErrors() {
    let errors = document.getElementsByClassName("err");
    for (let i = 0; i < errors.length; i++) {
        errors[i].style.display = "none";
    }
}