
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
        }
    })
}
// 2

// 3 - Sets up log in box.
function increaseWidth(x, size) {
    
}

let loginPresent = false;
choices[0].addEventListener('click', () => {
    if (!loginPresent) {
        let usernameDiv = document.createElement('div'),
            usernameBox = document.createElement('input'),
            passwordBox = document.createElement('input');

        let sizeWide = 450,
            sizeHigh = 50;
        setInterval(function() {
            if (sizeWide >= 600) {
                clearInterval(null);
            } else {
                sizeWide += 5;
                sizeHigh += 3;
                choices[0].style.width = sizeWide + "px";
                choices[0].style.height = sizeHigh + "px";
            }
        }, 2);

        setTimeout(function() {
            // Div
            choices[0].style.backgroundColor = "lightyellow";
            choices[0].style.color = "#36454f"

            // Username
            usernameDiv.id = "usernameDiv";
            usernameBox.value = "Username";
            usernameBox.style.marginTop = "30px";
            usernameBox.style.width = "450px";

            // Password
            passwordBox.value = "Password";
            passwordBox.style.marginTop = "15px";
            passwordBox.style.width = "450px";
            passwordBox.style.marginBottom = "15px";
            passwordBox.style.borderRadius = "5px";
            passwordBox.style.border = "2px solid #36454f";
            passwordBox.style.paddingTop = "6px";
            passwordBox.style.paddingLeft = "7px";
            passwordBox.style.paddingBottom = "6px";
            passwordBox.style.paddingRight = "7px";
            passwordBox.addEventListener('click', () => {
                passwordBox.value = "";
            })
            choices[0].addEventListener('click', () => {
                if (passwordBox.value = "") {
                    passwordBox.value = "Password";
                }
            })

            choices[0].appendChild(usernameDiv).appendChild(usernameBox);
            choices[0].appendChild(usernameDiv).appendChild(passwordBox);
            loginPresent = true;

            document.addEventListener('click', (e) => {
                if (loginPresent && e.target.id != '' && e.target.id != 'usernameDiv') {
                    document.getElementById('usernameDiv').remove();
                    choices[0].style.color = "lightyellow";
                    choices[0].style.backgroundColor = "#36454f";
                    loginPresent = false;
                }
            })
        }, 550);
    }
});
// 3