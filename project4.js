console.log("Welcome to project 4")

const name = document.getElementById('name')
const email = document.getElementById('email')
const phone = document.getElementById('phone')
let validEmail = false;
let validPhone = false;
let validUser = false;
$('#failure').hide();
$('#success').hide();

//console.log(name,email,phone)
name.addEventListener('blur', () => {
    console.log("name is blurred")
    //validate name here

    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/
    let str = name.value;
    console.log(regex, str)
    if (regex.test(str)) {
        console.log("it matched")
        name.classList.remove('is-invalid')
        validUser=true;

    }
    else {
        console.log("No matched")
        name.classList.add('is-invalid')
        validUser=false;
    }
})

email.addEventListener('blur', () => {
    console.log("email is blurred")
    //validate name here
    let regex = /^([a-z0-9\.\-_]+)@([a-z0-9\.\-_]+)\.([a-zA-Z]){2,7}$/
    let str = email.value;
    console.log(regex, str)
    if (regex.test(str)) {
        console.log("your email is valid")
        email.classList.remove('is-invalid')
        validEmail=true;

    }
    else {
        console.log("your email is not valid")
        email.classList.add('is-invalid')
        validEmail=false;
    }
})

phone.addEventListener('blur', () => {
    console.log("phone is blurred")
    //validate name here
    let regex = /^([0-9]){10}$/
    let str = phone.value;
    console.log(regex, str)
    if (regex.test(str)) {
        console.log("your phone no is valid")
        phone.classList.remove('is-invalid')
        validPhone=true;

    }
    else {
        console.log("your phone no is not valid")
        phone.classList.add('is-invalid')
        validPhone=false;

    }
})

let submit = document.getElementById('submit')
submit.addEventListener('click', (e) => {
    e.preventDefault()
    console.log("You clicked")
    console.log(validEmail,validUser,validPhone)

    if (validEmail && validUser && validPhone) {
        let failure=document.getElementById('failure')
        console.log("Phone,email and user are valid.Submitting the form")
        let success = document.getElementById('success')
        success.classList.add('show');
        //failure.classList.remove('show');
        //$('#failure').alert('close')
        $('#failure').hide()
        $('#success').show()
    }
    else {
        console.log('one out is incorrect Phone,email and user .hence not submitting the form please correct the error and try again!')
        let failure=document.getElementById('failure')
        failure.classList.add('show');
        //success.classList.remove('show');
        //$('#success').alert('hide')
        $('#success').hide()
        $('#failure').show()

    }





})
