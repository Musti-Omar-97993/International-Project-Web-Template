document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".button");
    const progressBar = document.createElement("div");
    progressBar.id = "progress-bar";
    document.body.prepend(progressBar);

    // Define step order
    const steps = ["build_hydroponics.html", "build_hydroponics_step2.html", "build_hydroponics_step3.html", "build_hydroponics_step4.html", "build_hydroponics_step5.html", "build_hydroponics_step6.html", "build_hydroponics_step7.html"];
    let currentStep = steps.findIndex(step => window.location.pathname.includes(step));

    // Function to create the individual step borders for the progress bar
    function createStepBorders() {
        steps.forEach((step, index) => {
            const stepElement = document.createElement("div");
            stepElement.classList.add("progress-step");
            progressBar.appendChild(stepElement);
        });
    }

    // Function to update the progress visually
    function updateProgress() {
        if (currentStep !== -1) {
            const progressSteps = document.querySelectorAll(".progress-step");
            
            progressSteps.forEach((step, index) => {
                if (index <= currentStep) {
                    step.classList.add("completed");
                } else {
                    step.classList.remove("completed");
                }
            });
        }
    }

    // Function for smooth page transition
    function animateNavigation(nextPage) {
        document.body.classList.add("fade-out");
        setTimeout(() => {
            window.location.href = nextPage;
        }, 300); 
    }

    // Attach event listeners to buttons
    buttons.forEach(button => {
        button.addEventListener("click", function(event) {
            event.preventDefault();
            let nextPage = this.getAttribute("href");
            if (steps.includes(nextPage)) {
                currentStep = steps.indexOf(nextPage);
                updateProgress();
            }
            animateNavigation(nextPage);
        });
    });

    // Initialize progress bar and step borders
    createStepBorders();
    updateProgress();
});