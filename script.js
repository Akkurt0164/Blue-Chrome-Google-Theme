document.getElementById("searchBox").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        window.location.href = "https://www.google.com/search?q=" + this.value;
    }
});

function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    document.getElementById("digitalClock").textContent = `${hours}:${minutes}`;
}

setInterval(updateClock, 1000);
updateClock();

document.getElementById("addTaskButton").addEventListener("click", function() {
    const taskInput = document.getElementById("taskInput").value;
    if (taskInput.trim() !== "") {
        let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks.push(taskInput);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        document.getElementById("taskInput").value = ""; // Clear input field
        const taskList = document.getElementById("taskList");
        const taskItem = document.createElement("li");
        taskItem.textContent = taskInput;
        taskList.appendChild(taskItem);

        // Add a remove button to each task
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.style.marginLeft = "10px";
        taskItem.appendChild(removeButton);

        removeButton.addEventListener("click", function() {
            // Remove task from the DOM
            taskList.removeChild(taskItem);

            // Remove task from localStorage
            let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
            tasks = tasks.filter(task => task !== taskInput);
            localStorage.setItem("tasks", JSON.stringify(tasks));
        });
        } else {
        alert("Please enter a valid task.");
    }
});

document.getElementById("youtubeButton").addEventListener("click", function() {
    window.location.href = "https://www.youtube.com";
});

document.getElementById("gmailButton").addEventListener("click", function() {
    window.location.href = "https://mail.google.com";
});

document.getElementById("telegramButton").addEventListener("click", function() {
    window.location.href = "https://web.telegram.org";
});

document.getElementById("whatsappButton").addEventListener("click", function() {
    window.location.href="https://web.whatsapp.com";
})

document.getElementById("twitterButton").addEventListener("click", function() {
    window.location.href="https://x.com";
})

document.getElementById("discordButton").addEventListener("click", function() {
    window.location.href="https://discord.com";
})

document.getElementById("githubButton").addEventListener("click", function() {
    window.location.href="https://github.com";
})

document.getElementById("githubButtonDev").addEventListener("click", function() {
    window.location.href="https://github.com/Deaptayan";
})