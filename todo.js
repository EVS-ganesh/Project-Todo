const allTasks = document.querySelector(".alltasks");
const taskNamer = document.querySelector("#tasknamer");
let taskArray = JSON.parse(localStorage.getItem("tasks")) || [];

taskNamer.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    
    if (taskNamer.value === "" || taskNamer.value[0] === " ") {
      console.log(`task not entered`);
    } else {

      const taskVal = {
        taskName : taskNamer.value,
        completed : false,
        favorite : false
      }
     
      let task = document.createElement("div");
      task.innerHTML = `<div id="taskstyle">
        <div id = "done" ></div>
        <div id = "undone" ></div>
        <p id = "paragraph" > ${taskNamer.value} </p>
        <div id = "favorite" ></div>
        <div id = "unfavorite" ></div>
        <div id = "editElement" ></div>
        <div id = "deleteElement" ></div>
        <div>`;
      allTasks.appendChild(task);

      
      const completedTasks = document.querySelector(".completedtasks"); 
      const done = task.querySelectorAll("#done");
      const paragraph = task.querySelector("#paragraph");
      done.forEach(strikeoff => {
        strikeoff.addEventListener("click", () => {
          paragraph.style.textDecoration = "none";
          strikeoff.nextElementSibling.style.display = "block";
          strikeoff.style.display = "none";
          allTasks.appendChild(strikeoff.parentNode);
          taskVal.completed = false; 
          localStorage.setItem("tasks", JSON.stringify(taskArray)); 
        });
      });

      const undone = task.querySelectorAll("#undone");
      undone.forEach(unstrikeoff => {
        unstrikeoff.addEventListener("click", () => {
          paragraph.style.textDecoration = "line-through";
          unstrikeoff.style.display = "none";
          unstrikeoff.previousElementSibling.style.display = "block";
          completedTasks.appendChild(unstrikeoff.parentNode);
          taskVal.completed = true; 
          localStorage.setItem("tasks", JSON.stringify(taskArray)); 
        });
      });

      const fList = document.querySelector("#flisted");
      const favorites = task.querySelectorAll("#favorite");
      favorites.forEach(favorite => {
        favorite.addEventListener("click", () => {
          favorite.style.display = "none";
          favorite.nextElementSibling.style.display = "block";
          fList.appendChild(favorite.parentNode);
          taskVal.favorite = true; 
          localStorage.setItem("tasks", JSON.stringify(taskArray)); 
        });
      });

      const unfavorites = task.querySelectorAll("#unfavorite");
      unfavorites.forEach(unfavorite => {
        unfavorite.addEventListener("click", () => {
          unfavorite.style.display = "none";
          unfavorite.previousElementSibling.style.display = "block";
          allTasks.appendChild(unfavorite.parentNode);
          taskVal.favorite = false; 
          localStorage.setItem("tasks", JSON.stringify(taskArray)); 
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

    const displayTasks = document.querySelector("#seetasks");
    const searchBox = document.querySelector("#searchbox");   
    searchBox.addEventListener("input", () => {
    const searchTerm = searchBox.value.toLowerCase();
    const tasks = document.querySelectorAll("#taskstyle");
    tasks.forEach(task => {
     const taskName = task.querySelector("#paragraph").textContent.toLowerCase();
     if (taskName.includes(searchTerm)) {
      displayTasks.appendChild(task);
      task.style.display = "block";
      allTasks.style.display = "none";
      fList.style.display = "none";
      completedTasks.style.display = "none";
      displayTasks.style.display = "block";

      favorites.forEach(favorite => {
        favorite.style.marginTop = "-40px";
      });
      unfavorites.forEach(unfavorite => {
        unfavorite.style.marginTop = "-40px";
      });
      editElements.forEach(editElement => {
        editElement.style.marginTop = "-40px";
      });
      deleteElements.forEach(deleteElement => {
        deleteElement.style.marginTop = "-40px";
      });
    }
     else {
      task.style.display = "none";
    }
  });
});
      taskArray.push(taskVal);
      localStorage.setItem("tasks", JSON.stringify(taskArray));
    }
  }
});

taskArray.forEach(taskVal => {
  createTaskElement(taskVal);
});

taskNamer.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {

    if (taskNamer.value === "" || taskNamer.value[0] === " ") {
      console.log(`task not entered`);
    } else {       const taskVal = {
      taskName : taskNamer.value,
      completed : false,
      favorite : false
    }

    taskArray.push(taskVal);
    localStorage.setItem("tasks", JSON.stringify(taskArray));

    createTaskElement(taskVal); 

    taskNamer.value = "";
  }
}
});

function createTaskElement(taskVal) {
const task = document.createElement("div");
task.innerHTML = `<div id="taskstyle">
  <div id = "done" ></div>
  <div id = "undone" ></div>
  <p id = "paragraph" > ${taskVal.taskName} </p>
  <div id = "favorite" ></div>
  <div id = "unfavorite" ></div>
  <div id = "editElement" ></div>
  <div id = "deleteElement" ></div>
  <div>`;
allTasks.appendChild(task);

const completedTasks = document.querySelector(".completedtasks");
const done = task.querySelectorAll("#done");
const paragraph = task.querySelector("#paragraph");


done.forEach(strikeoff => {
  strikeoff.addEventListener("click", () => {
    paragraph.style.textDecoration = "none";
    strikeoff.nextElementSibling.style.display = "block";
    strikeoff.style.display = "none";
    allTasks.appendChild(strikeoff.parentNode);
    taskVal.completed = false;
    localStorage.setItem("tasks", JSON.stringify(taskArray));
  });
});


const undone = task.querySelectorAll("#undone");
undone.forEach(unstrikeoff => {
  unstrikeoff.addEventListener("click", () => {
    paragraph.style.textDecoration = "line-through";
    unstrikeoff.style.display = "none";
    unstrikeoff.previousElementSibling.style.display = "block";
    completedTasks.appendChild(unstrikeoff.parentNode);
    taskVal.completed = true;
    localStorage.setItem("tasks", JSON.stringify(taskArray));
  });
});


const fList = document.querySelector("#flisted");
const favorites = task.querySelectorAll("#favorite");
favorites.forEach(favorite => {
  favorite.addEventListener("click", () => {
    favorite.style.display = "none";
    favorite.nextElementSibling.style.display = "block";
    fList.appendChild(favorite.parentNode);
    taskVal.favorite = true;
    localStorage.setItem("tasks", JSON.stringify(taskArray));
  });
});

const unfavorites = task.querySelectorAll("#unfavorite");
unfavorites.forEach(unfavorite => {
  unfavorite.addEventListener("click", () => {
    unfavorite.style.display = "none";
    unfavorite.previousElementSibling.style.display = "block";
    allTasks.appendChild(unfavorite.parentNode);
    taskVal.favorite = false;
    localStorage.setItem("tasks", JSON.stringify(taskArray));
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
  deleteElement.addEventListener("click", function() {
      const taskIndex = Array.from(allTasks.children).indexOf(deleteElement.parentNode);
      taskArray.splice(taskIndex, 1);
      localStorage.setItem("tasks", JSON.stringify(taskArray));
      deleteElement.parentNode.remove();
    
  });
});
}