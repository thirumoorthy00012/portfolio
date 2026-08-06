// Typing effect for headline
const headlineText = "Fullstack Web Developer | Java Developer | Backend Developer";
let i = 0;
function typeWriter() {
  if (i < headlineText.length) {
    document.getElementById("headline").innerHTML += headlineText.charAt(i);
    i++;
    setTimeout(typeWriter, 80);
  }
}
typeWriter();

// Project filter
function filterProjects(type) {
  const projects = document.querySelectorAll(".project");
  projects.forEach(project => {
    if (type === "all" || project.dataset.type === type) {
      project.style.display = "block";
    } else {
      project.style.display = "none";
    }
  });
}
