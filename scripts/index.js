let contact = document.getElementById('contact'),
    contactBox = document.getElementById('contactBox'),
    fullContact = document.getElementById('fullContact');
contact.addEventListener('mouseover', () => {
    contactBox.style.visibility = "visible";
})

fullContact.addEventListener('mouseleave', () => {
    contactBox.style.visibility = "hidden";
})