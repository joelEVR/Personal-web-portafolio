// Wait until the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', (event) => {
    // Initialize the current project index to 0 to show the first project
    let currentProjectIndex = 0;
    // Select all elements with the class 'project'
    const projects = document.querySelectorAll('.project');
    // Get the total number of project elements
    const totalProjects = projects.length;

    // Define a function that shows the project at the given index
    function showProject(index) {
        // Loop through all project elements
        projects.forEach((project, idx) => {
            // Set the display style to 'block' if the index matches the current project, otherwise hide it
            project.style.display = idx === index ? 'block' : 'none';
        });
    }

    // Add a click event listener to the element with id 'prev'
    document.getElementById('prev').addEventListener('click', () => {
        // When clicked, decrement the current project index (with wrapping) and show the project
        currentProjectIndex = (currentProjectIndex - 1 + totalProjects) % totalProjects;
        showProject(currentProjectIndex);
    });

    // Add a click event listener to the element with id 'next'
    document.getElementById('next').addEventListener('click', () => {
        // When clicked, increment the current project index (with wrapping) and show the project
        currentProjectIndex = (currentProjectIndex + 1) % totalProjects;
        showProject(currentProjectIndex);
    });

    // Call the function to initialize and show the first project when the script loads
    showProject(currentProjectIndex);
});
