function submitForm(e) {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    // const subject = document.getElementById('sub');
    const message = document.getElementById('message');

    const submitBtn = document.getElementById('submitButton');

    document.querySelectorAll('.errorMsg').forEach(function(element) {
        element.style.display = 'none';
        return false;
    })

    if (name.value.trim().length < 3) {
        document.getElementById('nameError').style.display = "block";
        return false;
    }

    if (!email.value.includes('@') || email.value == '') {
        document.getElementById('emailError').style.display = "block";
        return false;
    }

    if (message.value.trim() == '' || message.value.trim() < 3) {
        document.getElementById('msgError').style.display = "block";
        return false;
    }

    else {
        true;
    }

    
}