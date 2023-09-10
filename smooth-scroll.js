
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("nav ul li a");

    for (const link of links) {
        link.addEventListener("click", smoothScroll);
    }

    function smoothScroll(e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        const offset = targetElement.getBoundingClientRect().top;
        const scrollOptions = {
            top: offset,
            behavior: "smooth"
        };
        window.scrollTo(scrollOptions);
    }
});