
// 1 - Sets up the "contact information" actions.
let contact = document.getElementById('contact'),
    contactBox = document.getElementById('contactBox'),
    fullContact = document.getElementById('fullContact');
contact.addEventListener('mouseover', () => {
    contactBox.style.visibility = "visible";
})

fullContact.addEventListener('mouseleave', () => {
    contactBox.style.visibility = "hidden";
})
// 1

// 2 - Button hovers.
let choices = document.getElementsByClassName('choices'),
    loginButton = document.getElementById('login');
for(let i = 0; i < choices.length; i++) {
    choices[i].addEventListener('mouseover', () => { // Hover onto
        if (!loginPresent) {
            choices[i].style.color = "#36454f";
            choices[i].style.backgroundColor = "lightyellow";
            choices[i].style.cursor = "pointer";
        }
    })

    choices[i].addEventListener('mouseleave', () => { // Hover off
        if (!loginPresent) {
            choices[i].style.color = "lightyellow";
            choices[i].style.backgroundColor = "#36454f";
            choices[i].style.cursor = "pointer";
        }
    })
}
// 2

// 3 - Sets up log in box.
let loginPresent = false;
choices[0].addEventListener('click', () => {
    if (!loginPresent) {
        loginPresent = true;
        let usernameDiv = document.createElement('div'),
            usernameBox = document.createElement('input'),
            passwordDiv = document.createElement('div'),
            passwordBox = document.createElement('input'),
            passwordImage = document.createElement('img'),
            submitDiv = document.createElement('div');

        choices[0].style.cursor = "default";

        // Username
        usernameDiv.id = "usernameDiv";
        usernameBox.value = "Username";
        usernameDiv.style.position = "absolute";
        usernameBox.style.marginLeft = "75px";
        usernameBox.style.visibility = "hidden";
        usernameDiv.style.top = "60px";
        usernameBox.style.borderRadius = "5px";
        usernameBox.style.width = "0px";
        usernameBox.style.backgroundColor = "#36454f";
        usernameBox.style.color = "lightyellow";
        usernameBox.style.border = "2px solid #36454f";
        usernameBox.style.paddingTop = "6px";
        usernameBox.style.paddingLeft = "7px";
        usernameBox.style.paddingBottom = "6px";
        usernameBox.style.paddingRight = "7px";
        usernameBox.addEventListener('focusin', () => {
            if (usernameBox.value == "Username")
                usernameBox.value = "";
        })
        usernameBox.addEventListener('focusout', () => {
            if (usernameBox.value == "") {
                usernameBox.value = "Username";
            }
        })

        // Password
        passwordDiv.id = "passwordDiv";
        passwordBox.value = "Password";
        passwordDiv.style.position = "absolute";
        passwordBox.style.marginLeft = "75px";
        passwordBox.style.visibility = "hidden";
        passwordBox.type = "password";
        passwordDiv.style.top = "105px";
        passwordBox.style.marginBottom = "15px";
        passwordBox.style.borderRadius = "5px";
        passwordBox.style.width = "0px";
        passwordBox.style.backgroundColor = "#36454f";
        passwordBox.style.color = "lightyellow";
        passwordBox.style.border = "2px solid #36454f";
        passwordBox.style.paddingTop = "6px";
        passwordBox.style.paddingLeft = "7px";
        passwordBox.style.paddingBottom = "6px";
        passwordBox.style.paddingRight = "7px";
        passwordBox.addEventListener('focusin', () => {
            passwordBox.value = "";
        })
        passwordBox.addEventListener('focusout', () => {
            if (passwordBox.value == "") {
                passwordBox.value = "Password";
            }
        })

        // Password eye
        passwordImage.id = "passwordImage";
        passwordImage.src = "images/eyeClosed.png";
        passwordImage.style.float = "right";
        passwordImage.style.top = "3px";
        passwordImage.style.height = "26px";
        passwordImage.style.right = "7px";
        passwordImage.style.position = "absolute";
        passwordImage.style.visibility = "hidden";
        passwordImage.style.cursor = "pointer";
        passwordImage.addEventListener('click', () => {
            if (passwordBox.type == "password") {
                passwordImage.src = "images/eyeOpen.png";
                passwordBox.type = "none";
            } else {
                passwordImage.src = "images/eyeClosed.png";
                passwordBox.type = "password";
            }
        })

        // Submit button
        submitDiv.id = "submitDiv";
        submitDiv.innerHTML = "Submit";
        submitDiv.style.position = "absolute";
        submitDiv.style.top = "145px";
        submitDiv.style.left = "470px";
        submitDiv.style.backgroundColor = "#36454f";
        submitDiv.style.color = "lightyellow";
        submitDiv.style.paddingTop = "6px";
        submitDiv.style.paddingLeft = "10px";
        submitDiv.style.paddingBottom = "6px";
        submitDiv.style.paddingRight = "10px";
        submitDiv.style.borderRadius = "10px";
        submitDiv.style.visibility = "hidden";
        submitDiv.style.cursor = "pointer";
        submitDiv.style.fontSize = "17px";

        choices[0].appendChild(usernameDiv).appendChild(usernameBox);
        choices[0].appendChild(passwordDiv).appendChild(passwordBox);
        choices[0].appendChild(passwordDiv).appendChild(passwordImage);
        choices[0].appendChild(submitDiv);

        let sizeWide = 450,
            sizeHigh = 50,
            size = 0;
        setInterval(function() {
            if (sizeHigh >= 170) {
                clearInterval(null);
                usernameBox.style.visibility = "visible";
                passwordBox.style.visibility = "visible";
                setInterval(function() {
                    if (size >= 470) {
                        submitDiv.style.visibility = "visible";
                        passwordImage.style.visibility = "visible";
                        clearInterval(null);
                    } else {
                        size += 1;
                        usernameBox.style.width = size + "px";
                        passwordBox.style.width = size + "px";
                    }
                }, 15);
            } else {
                sizeHigh += 2;
                choices[0].style.height = sizeHigh + "px";
                sizeWide += 3;
                choices[0].style.width = sizeWide + "px";
            }
        }, 1);

        document.addEventListener('click', (e) => {
            if (loginPresent && e.target.id != '' && e.target.id != 'usernameDiv' && e.target.id != 'passwordDiv' && e.target.id != 'submitDiv' && e.target.id != 'passwordImage') {
                loginPresent = false;
                document.getElementById('passwordImage').remove();
                document.getElementById('usernameDiv').remove();
                document.getElementById('passwordDiv').remove();
                document.getElementById('submitDiv').remove();
                choices[0].style.color = "lightyellow";
                choices[0].style.backgroundColor = "#36454f";
                choices[0].style.width = "450px";
                choices[0].style.height = "25px";
                choices[0].style.cursor = "pointer";
            }
        })
    }
});
// 3