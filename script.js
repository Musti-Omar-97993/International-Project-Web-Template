// index.html functions:

function updateDashboard(data) {
    document.getElementById("sensorData").innerText = "Sensor Data: " + data;
}

setInterval(() => {
    let simulatedData = Math.floor(Math.random() * 100);
    updateDashboard(simulatedData);
}, 2000);

// copyright year function:

document.addEventListener("DOMContentLoaded", function() {
    const yearSpan = document.getElementById('year');
    yearSpan.textContent = new Date().getFullYear();
});

// community.html functions:

document.addEventListener("DOMContentLoaded", function () {
    const postForm = document.getElementById("postForm");
    const postContent = document.getElementById("postContent");
    const imageUpload = document.getElementById("imageUpload");
    const postsContainer = document.getElementById("postsContainer");

    postForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const text = postContent.value.trim();
        const file = imageUpload.files[0];

        if (text === "" && !file) {
            alert("Please enter some content or upload an image.");
            return;
        }

        const postDiv = document.createElement("div");
        postDiv.classList.add("post");
        
        if (text !== "") {
            const textPara = document.createElement("p");
            textPara.textContent = text;
            postDiv.appendChild(textPara);
        }

        if (file) {
            const img = document.createElement("img");
            img.src = URL.createObjectURL(file);
            img.onload = function () { URL.revokeObjectURL(img.src); };
            postDiv.appendChild(img);
        }

        postsContainer.prepend(postDiv);
        postContent.value = "";
        imageUpload.value = "";
    });
});