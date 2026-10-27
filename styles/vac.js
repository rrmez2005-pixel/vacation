
  let Destination = document.getElementById("Destination").value;
  // "none" is the value of the default instruction option in the HTML
  if (Destination == "none") {
      document.getElementById("err-Destination").style.display = "block";
      isValid = false;
  }



function clearErrors() {
  let errors = document.getElementsByClassName("err");
  for (let i = 0; i < errors.length; i++) {
    errors[i].style.display = "none";
  }
}