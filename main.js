const form = document.querySelector ('#ex-form')
const input = document.querySelector ('#passinput')

let formIsValid

form.addEventListener ('input', function(event) {
    console.log('input captured') 
})
    
form.addEventListener ('submit', function(event) {
    event.preventDefault()
    console.log('form submitted')
    validatePassInput ()
})

function validatePassInput() {
    if (input.value.length < 8){
        const error = document.createElement('div')
        error.id = 'message'
        document.querySelector('.email-input').appendChild(error).innerText = 'You need at least 8 characters.'
    }  else {
        formIsValid = true
        const valid = document.createElement('div')
        valid.id = 'message'
        document.querySelector('.email-input').appendChild(valid).innerText = 'Input is valid.'
      }
}

input.addEventListener('focus', function(){
    console.log('Click on input box')
    document.querySelector('#message').remove()
})
