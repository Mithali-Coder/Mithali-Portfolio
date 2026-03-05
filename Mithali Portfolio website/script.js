// Typing Effect
const text = "Aspiring Software Developer | Frontend Enthusiast";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 50);
    }
}

window.onload = typeEffect;


// Scroll to Projects
function scrollToProjects() {
    document.getElementById("projects").scrollIntoView({
        behavior: "smooth"
    });
}

// for all view buttons
const viewButtons = document.querySelectorAll(".view-btn");

viewButtons.forEach(button => {
    button.addEventListener("click", function () {
        const githubLink = this.getAttribute("data-link");
        window.open(githubLink, "_blank");
    });
});
