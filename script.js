const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const progress = document.getElementById("progress");
const circles = document.querySelectorAll(".circle");

let currentStep = 1;

// NEXT BUTTON
nextBtn.addEventListener("click", () => {
    currentStep++;

    if (currentStep > circles.length) {
        currentStep = circles.length;
    }

    update();
});

// PREVIOUS BUTTON
prevBtn.addEventListener("click", () => {
    currentStep--;

    if (currentStep < 1) {
        currentStep = 1;
    }

    update();
});

function update() {
    // Activate circles
    circles.forEach((circle, index) => {
        if (index < currentStep) {
            circle.classList.add("active");
        } else {
            circle.classList.remove("active");
        }
    });

    // Update progress line
    const activeCircles = document.querySelectorAll(".active").length;
    progress.style.width = ((activeCircles - 1) / (circles.length - 1)) * 100 + "%";

    // Disable / Enable buttons
    prevBtn.disabled = currentStep === 1;
    nextBtn.disabled = currentStep === circles.length;
}
