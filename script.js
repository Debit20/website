const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobile-menu");
hamburger.addEventListener("click", () => {
  const isHidden = mobileMenu.style.display === "none";
  mobileMenu.style.display = isHidden ? "block" : "none";
});

const form = document.getElementById('form');
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const numError = document.getElementById('num-error');
const dateError = document.getElementById('date-error');
const genderError = document.getElementById('gender-error');
const cityError = document.getElementById('city-error');
const stateError = document.getElementById('state-error');
const addressError = document.getElementById('address-error');
const uploadError = document.getElementById('upload-error');
const checkError = document.getElementById("check-error");
const validError = document.getElementById("valid-error")
//this is for name validation 
function validateName() {
  var name = document.getElementById('name').value;
  if (name.length == 0) {
    $("#fullname").effect("shake");
    nameError.innerHTML = "Name is required!! ";
    return false;
  }
  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerHTML = "Please write your full name";
    return false;
  }
  nameError.innerHTML = "";
  return true;
}
//this is for email validation 
function validateEmail() {
  var email = document.getElementById('email').value;
  if (email.length == 0) {
    emailError.innerHTML = " Email address required!!";
    return false;
  }
  if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
    emailError.innerHTML = "Please enter a valid Email address!!";
    return false;
  }
  emailError.innerHTML = '';
  return true;

}
//this is for gender validation 
function validateGender() {
  let gender = document.getElementById("gender").value;
  if (gender === "") {
    genderError.innerHTML = "Please select your gender!!";
    return false;
  }
  else {
    genderError.innerHTML = "";
    return true;
  }
}
document.getElementById("gender").addEventListener("change", validateGender);
//this is for number validation 
function validateNum() {
  var num = document.getElementById('num').value;
  if (num.length === 0) {
    numError.innerHTML = "Please Enter your Phone number!!";
    return false;
  }
  if (!num.match(/^\+?[1-9]\d{1,14}$/)) {
    numError.innerHTML = "Enter a Valid PhoneNumber!!";
    return false;
  }
  numError.innerHTML = '';
  return true;
}
//this is for dob and age validation 
function validateDate() {
  let date = document.getElementById('date').value;

  if (date === '') {
    dateError.innerHTML = 'Date is required!!';
    return false;
  }
  else {
    let birth = new Date(date);
    let today = new Date();
    let age = today.getFullYear() - birth.getFullYear();
    let monthDiff = today.getMonth() - birth.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
     if (age < 18) {
      dateError.innerHTML = "You must be at least 18 years old!";
      return false;

    } else {
      dateError.innerHTML = "";
      return true;
    }
  }
}
document.getElementById("date").addEventListener("change", validateDate);
//this is for city validation 
function validateCity() {
  let city = document.getElementById("city").value;
  if (city === "") {
    cityError.innerHTML = "Please select your city!";
    return false;
  }
  else {
    cityError.innerHTML = "";
    return true;
  }
}
document.getElementById("city").addEventListener("change", validateCity);
//this is for state validation 
function validateState() {
  let state = document.getElementById("state").value;
  if (state == "") {
    stateError.innerHTML = "Please select your state!";
    return false;
  }
  stateError.innerHTML = "";
  return true;

}
document.getElementById("state").addEventListener("change", validateState);
//this is for address validation 
function validateAddress() {
  let address = document.getElementById("address").value;
  if (address.length == 0) {
    addressError.innerHTML = "Enter your address!";
    return false;
  }
  if (address.length > 120) {
    addressError.innerHTML = "Not more than 120 characters!";
    return false;
  }
  addressError.innerHTML = "";
  return true;
}
document.getElementById("address").addEventListener("input", validateAddress);
//this is for upload validation 
function validUpload() {
  let upload = document.getElementById('upload');
  if (upload.value === '' || upload.value === null) {
    uploadError.innerHTML = 'Please uplaod a file ! ';
    return false;
  }
  uploadError.innerHTML = '';
  return true;
}
document.getElementById("upload").addEventListener("change", validUpload);
//this is for yes or no validation 
function validateRadio() {
  let yesRadio = document.getElementById("yes");
  let noRadio = document.getElementById("no");
  if (!yesRadio.checked && !noRadio.checked) {
    checkError.textContent = "Are you looking for a counselling ?";
    return false;
  } else {
    checkError.textContent = "";
    return true;
  }
}
document.getElementById("yes", "no").addEventListener("change", validateRadio);
//this is for t&c agree validation 
function validCheckbox() {
  let checkbox = document.getElementById("checkbox");
  if (!checkbox.checked) {
    validError.innerHTML = 'Please agree T&C before submisison';
    return false;
  }
  validError.innerHTML = '';
  return true;
}
document.getElementById("checkbox").addEventListener("change", validCheckbox);

// overall form validation section onclick submit 
function validateForm(event) {
  event.preventDefault();
  let isValid = true;
  if (!validateName()) isValid = false;
  if (!validateEmail()) isValid = false;
  if (!validateNum()) isValid = false;
  if (!validateState()) isValid = false;
  if (!validateAddress()) isValid = false;
  if (!validateCity()) isValid = false;
  if (!validUpload()) isValid = false;
  if (!validateGender()) isValid = false;
  if (!validateRadio()) isValid = false;
  if (!validCheckbox()) isValid = false;
  if (!validateDate()) isValid = false;


  if (!isValid) {
    Swal.fire("Error", "Please fill the required filled before submitting!!!", "error");

    return false;
  }
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    background: "#fce5e5",
    showCancelButton: true,
    confirmButtonColor: "#02b546",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, Submit!"
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        background: "#deffeb",
        title: "Submitted!",
        text: "Your form has been submitted.",
        icon: "success"
      }).then(() => {
        document.getElementById("form").submit();
      });
    }
  });
  return false;
}








