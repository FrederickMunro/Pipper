let contact = document.getElementById('contact'),
    fullBox = document.getElementById('fullBox');
contact.addEventListener('mouseover', () => {
    fullBox.style.visibility = "visible";
})

contact.addEventListener('mouseleave', () => {
    fullBox.style.visibility = "hidden";
})