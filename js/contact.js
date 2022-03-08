console.log('it works!')
const submit = document.querySelector(".submit");

$(document).ready(function() {
    $('.submit').click(function (event) {
        console.log('clicked button')

        var name = $('.name').val()
        var email = $('.email').val()
        var subject = $('.subject').val()
        var message = $('.message').val()
        var validation = document.querySelector(".submit");
        validation.empty()

        if(name.length >= 5) {
            validation.append('<div>Your name is valid!</div>')

        } else {
            event.preventDefault()
            validation.append('<div>Your name is not valid!</div>')
        }

        if(email.length >= 5 && email.includes('@') && email.includes('.')) {
            submit.append('<div>Your e-mail is valid!</div>')
        } else {
         event.preventDefault()
        validation.append('<div>Your e-mail is not valid!</div>')
        }

        if(subject.length >= 15) {
        validation.append('<div>Subject is valid</div>')
        } else {
            event.preventDefault()
        validation.append('<div>Subject is not valid</div>')
        }

        if (message.length >= 25) {
        validation.append('<div>Message is valid</div>')
        } else {
            event.preventDefault()
        validation.append('<div>Message is not valid</div>')
        }




    })
 })

 