
function openProject(evt, projectId) {

    let projects = document.getElementsByClassName("project-tab");

    for (var i = 0; i < projects.length; i++) {
        projects[i].style.display = "none";
    }

    let projectLinks = document.getElementsByClassName("project-link");

    for (var i = 0; i < projectLinks.length; i++) {
        projectLinks[i].classList.remove("active-page");
    }

    document.getElementById(projectId).style.display = "block";
    evt.currentTarget.classList.add("active-page");
}