/**
 * E-Portfolio JavaScript
 *
 * This script handles dynamic behaviors for the e-portfolio site.
 */

// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
    
    console.log("E-Portfolio script loaded successfully.");

    /**
     * Active Navigation Link Highlighter
     *
     * This function checks the current URL and adds an 'active' class
     * to the corresponding navigation link. This is more maintainable
     * than manually adding the class to each HTML file.
     */
    function highlightActiveNav() {
        // Get the current page's filename (e.g., "index.html", "education.html")
        const currentPage = window.location.pathname.split('/').pop();
        
        // Find all navigation links
        const navLinks = document.querySelectorAll('nav a');

        navLinks.forEach(link => {
            // Get the filename from the link's href attribute
            const linkPage = link.getAttribute('href').split('/').pop();

            // Check if the link's page matches the current page
            // Also handles the case for the root URL ("/") matching "index.html"
            if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
                link.classList.add('active');
            }
        });
    }

    // Run the navigation highlighter
    highlightActiveNav();

    // You can add more JavaScript functionality here in the future!
    // For example, form validation for the contact page.
});