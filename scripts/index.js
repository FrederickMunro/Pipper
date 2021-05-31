
document.getElementById('contact').addEventListener('click', () => {
    let contactBox = document.getElementById('contactBox');
    if (contactBox.style.visibility == "hidden") {
        contactBox.style.visibility = "visible";
    } else {
        contactBox.style.visibility = 'hidden';
    }
})