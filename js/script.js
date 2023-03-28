function toggleMenu() {
    let links = document.querySelector(".top-bar .links");
    let isVisible = links.classList.contains("visible");
    if (isVisible) {
        links.classList.remove("visible");
    } else {
        links.classList.add("visible");
    }
}