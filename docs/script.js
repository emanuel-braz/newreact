const links = document.querySelectorAll('a');
links.forEach(link => {
    if (!link.getAttribute("href").startsWith("#")) {
        link.href = "https://github.com/emanuel-braz/newreact";
        link.target = "_blank";
    }
});
