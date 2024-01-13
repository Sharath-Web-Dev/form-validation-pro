    document.getElementById("myForm").addEventListener("submit", function(event){//defining event
    event.preventDefault();
    let name = document.getElementById("name").value;
    email = document.getElementById("email").value;
    phone = document.getElementById("phone").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
   
    let nameError = '';
    let emailError = '';
    let phoneError = '';
    let passwordError = '';
    let confirmPasswordError = '';
   //giving conditions
    if (!/^[a-zA-Z\s]+$/.test(name)) {
           nameError = 'Name should only contain alphabets and spaces !';
       }
   
       if (name.length < 5) {
           nameError = 'Name should be less than 5 letters !';
       }
   
       if (!email.includes('@')) {
           emailError = 'Email should have "@" in it !';
       }
   
       if (phone === '123456789' || phone.length !== 10 ||phone === '1234567890') {
           phoneError = 'Recheck your phone number !';
       }
   
       let passwordStrengthError = '';
       if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(password)) {
           passwordStrengthError = 'Password should be a combination of small and capital letters, a number, and at least 6 characters long';
       }
   
       if (password.toLowerCase() === name.toLowerCase()) {
           passwordStrengthError = "Password can't be your name !";
       }
   
       if (password !== confirmPassword) {
           confirmPasswordError = 'Passwords do not match !';
       }
   //verifying no errors
       document.getElementById('nameError').innerText = nameError;
       document.getElementById('emailError').innerText = emailError;
       document.getElementById('phoneError').innerText = phoneError;
       document.getElementById('passwordError').innerText = passwordStrengthError;
       document.getElementById('confirmPasswordError').innerText = confirmPasswordError;
   
       if (nameError === '' && emailError === '' && phoneError === '' && passwordStrengthError === '' && confirmPasswordError === '') {
           window.location.href = "newpage.html";
       }//if no errors redirect to another page
   });