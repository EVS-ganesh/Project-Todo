const searchBox = document.querySelector("#searchbox");
const taskArray = JSON.parse(localStorage.getItem("tasks")) || [];

const taskNamer = document.querySelector("#tasknamer");
taskNamer.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        if (taskNamer.value === "" || taskNamer.value[0] === " ") {
            console.log(`task not entered`);
        } else {
            const allTasks = document.querySelector(".alltasks");
            let task = document.createElement("div");
            task.innerHTML = `<div id="taskstyle">
            <div id="done"></div>
            <div id="undone"></div>
            <p id="paragraph">${taskNamer.value}</p>
            <div id="favorite"></div>
            <div id="unfavorite"></div>
            <div id="editElement"></div>
            <div id="deleteElement"></div>
            <div>`;
            allTasks.appendChild(task);

            const done = task.querySelectorAll("#done");
            const paragraph = task.querySelector("#paragraph");
            const completedTasks = document.querySelectorAll(".completedtasks");
            done.forEach(strikeoff => {
                strikeoff.addEventListener("click", () => {
                    paragraph.style.textDecoration = "none";
                    strikeoff.nextElementSibling.style.display = "block";
                    strikeoff.style.display = "none";
                    completedTasks.appendChild(strikeoff.parentNode);
                });
            });

            const undone = task.querySelectorAll("#undone");
            undone.forEach(unstrikeoff => {
                unstrikeoff.addEventListener("click", () => {
                    paragraph.style.textDecoration = "line-through";
                    unstrikeoff.style.display = "none";
                    unstrikeoff.previousElementSibling.style.display = "block";
                    allTasks.appendChild(unstrikeoff.parentNode);
                });
            });

            const fList = document.querySelector("#flisted");
            const favorites = task.querySelectorAll("#favorite");
            favorites.forEach(favorite => {
                favorite.addEventListener("click", () => {
                    favorite.style.display = "none";
                    favorite.nextElementSibling.style.display = "block";
                    fList.appendChild(favorite.parentNode);
                });
            });

            const unfavorites = task.querySelectorAll("#unfavorite");
            unfavorites.forEach(unfavorite => {
                unfavorite.addEventListener("click", () => {
                    unfavorite.style.display = "none";
                    unfavorite.previousElementSibling.style.display = "block";
                    allTasks.appendChild(unfavorite.parentNode);
                });
            });

            const editElements = task.querySelectorAll("#editElement");
            editElements.forEach(editElement => {
                editElement.addEventListener("click", () => {
                    paragraph.contentEditable = "true";
                    paragraph.style.outline = "none";
                    paragraph.addEventListener("keypress", (event) => {
                        if (event.key === "Enter") {
                            paragraph.contentEditable = "false";
                        }
                    });
                });
            });

            const deleteElements = task.querySelectorAll("#deleteElement");
            deleteElements.forEach(deleteElement => {
                deleteElement.addEventListener("click", function () {
                    deleteElement.parentNode.remove();
                });
            });

            taskArray.push(taskNamer.value);
            localStorage.setItem("tasks", JSON.stringify(taskArray));
            localStorage.getItem("tasks", JSON.parse(taskArray));
        }
    }
});