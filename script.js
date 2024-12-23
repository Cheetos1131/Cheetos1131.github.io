const githubUsername = "Cheetos1131";

document.addEventListener("DOMContentLoaded", async () => {
  const githubProjectsContainer = document.getElementById("github-projects");

  try {
    // Log API call for debugging
    console.log(`Fetching repositories for user: ${githubUsername}`);
    const response = await fetch(`https://api.github.com/users/${githubUsername}/repos`);

    // Check for HTTP errors
    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status} - ${response.statusText}`);
    }

    const repositories = await response.json();
    console.log("Fetched repositories:", repositories);

    // Filter out specific repositories and render
    repositories
      .filter(repo => repo.name !== `${githubUsername}.github.io`) // Exclude GitHub Pages repo
      .forEach(repo => {
        const projectCard = document.createElement("div");
        projectCard.classList.add("project-card");

        projectCard.innerHTML = `
          <h3><a href="${repo.html_url}" target="_blank">${repo.name}</a></h3>
          <p>${repo.description || "No description available."}</p>
        `;

        githubProjectsContainer.appendChild(projectCard);
      });

    if (repositories.length === 0) {
      githubProjectsContainer.innerHTML = "<p>No repositories found.</p>";
    }
  } catch (error) {
    console.error("Error fetching GitHub repositories:", error);
    githubProjectsContainer.innerHTML = `<p>Error: ${error.message}</p>`;
  }
});