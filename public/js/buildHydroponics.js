document.addEventListener("DOMContentLoaded", () => {
    const steps = document.querySelectorAll(".step");
    let current = 0;

    function showStep(index) {
        steps.forEach((step, i) => {
            step.classList.toggle("active", i === index);
        });
    }

    showStep(current);

    document.querySelectorAll(".button-next").forEach(btn => {
        btn.addEventListener("click", () => {
            if (current < steps.length - 1) {
                current++;
                showStep(current);
            }
        });
    });

    document.querySelectorAll(".button-prev").forEach(btn => {
        btn.addEventListener("click", () => {
            if (current > 0) {
                current--;
                showStep(current);
            }
        });
    });
});