const scrollUP = document.getElementById("rollUp");

function displayButton() {
    if (window.pageYOffset > 500) {
        scrollUP.classList.add("scroll");
    } else {
        scrollUP.classList.remove("scroll");
    }
}
window.addEventListener("scroll", displayButton);