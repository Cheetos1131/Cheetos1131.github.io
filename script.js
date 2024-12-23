const githubUsername = "Cheetos1131";

document.addEventListener("DOMContentLoaded", async () => {
  const githubProjectsContainer = document.getElementById("github-projects");

  try {
    const response = await fetch(`https://api.github.com/users/${githubUsername}/repos`);
    const repositories = await response.json();

    repositories
      .filter(repo => repo.name !== `${githubUsername}.github.io`) // Exclude the GitHub Pages repo
      .forEach(repo => {
        const projectCard = document.createElement("div");
        projectCard.classList.add("project-card");

        projectCard.innerHTML = `
          <h3><a href="${repo.html_url}" target="_blank">${repo.name}</a></h3>
          <p>${repo.description || "No description available."}</p>
        `;

        githubProjectsContainer.appendChild(projectCard);
      });
  } catch (error) {
    githubProjectsContainer.innerHTML = "<p>Error fetching GitHub repositories.</p>";
  }
});