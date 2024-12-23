// script.js

const GITHUB_USERNAME = "Cheetos1131";

// Fetch GitHub repositories and populate the list
async function fetchGitHubProjects() {
    const githubProjectsList = document.getElementById("github-projects");

    try {
        const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos`);
        const repos = await response.json();

        repos.forEach(repo => {
            const listItem = document.createElement("li");
            const link = document.createElement("a");
            link.href = repo.html_url;
            link.target = "_blank";
            link.textContent = repo.name;

            listItem.appendChild(link);
            githubProjectsList.appendChild(listItem);
        });
    } catch (error) {
        githubProjectsList.innerHTML = `<li>Error fetching GitHub projects: ${error.message}</li>`;
    }
}

// Run the function to fetch GitHub projects
fetchGitHubProjects();