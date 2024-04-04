document.querySelectorAll(".accordion-button").forEach((button) => {
    button.addEventListener("dblclick", () => {
      button.classList.toggle("accordion-button-active");
    });
  });

document.addEventListener("DOMContentLoaded", function() {
    // Function to reset the focus circle animation
    function resetFocusCircle() {
        // Clear existing rings
        while (focusCircle.firstChild && focusCircle.firstChild.classList.contains("ring")) {
            focusCircle.removeChild(focusCircle.firstChild);
        }
        createRings(); // Create new rings
    }

    // Function to create rings inside the focus circle
    function createRings() {
        // Number of rings to create
        const numRings = 50; // Adjust as needed

        // Create and append rings to the focus circle
        for (let i = 0; i < numRings; i++) {
            const ring = document.createElement("div");
            ring.classList.add("ring");
            focusCircle.appendChild(ring);
        }
    }

    // Get the focus circle element
    const focusCircle = document.querySelector(".focus-circle");

    // Create initial rings inside the focus circle
    createRings();

    // Reset the focus circle animation after a delay (to start the animation after page load)
    setTimeout(function() {
        resetFocusCircle();
    }, 1000);
});
