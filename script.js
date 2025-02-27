document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");
    
    sections.forEach(section => {
        section.addEventListener("mouseenter", function() {
            this.classList.add("shadow-lg", "p-3", "mb-5", "bg-white", "rounded");
        });
        
        section.addEventListener("mouseleave", function() {
            this.classList.remove("shadow-lg", "p-3", "mb-5", "bg-white", "rounded");
        });
    });
});
