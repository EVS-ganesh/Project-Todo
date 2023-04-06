const searchBox = document.querySelector("#searchbox");
const taskArray = [];

const taskNamer = document.querySelector("#tasknamer");
taskNamer.addEventListener("keypress" , (event) => {

    if(event.key === "Enter" ){
        if(taskNamer.value === "" || taskNamer.value[0] === " " ){
            console.log(`task not entered`);
        }

        else{
        const allTasks=document.querySelector(".alltasks");
        let task = document.createElement("div");
        task.innerHTML = `<div id="taskstyle">
        <div id = "done" ></div>
        <div id = "undone" ></div>
        <p id = "paragraph" > ${ taskNamer.value } </p>
        <div id = "favorite" ></div>
        <div id = "unfavorite" ></div>
        <div id = "editElement" ></div>
        <div id = "deleteElement" ></div>
        <div>`;
        allTasks.appendChild(task);

        // const taskObj = {
        //   taskName: taskNamer.value,
        //   isFavorite: false,
        //   isEditable: false
        // };

        // taskArray.push(taskObj);
        // localStorage.setItem("tasks", JSON.stringify(taskArray));
        
        const done = document.querySelectorAll("#done");
        const paragraph = event.target.parentNode.querySelector("#paragraph");
        const completedTasks = document.querySelectorAll(".completedtasks");
        done.forEach(strikeoff => {
          strikeoff.addEventListener("click" , () => {
            paragraph.style.textDecoration = "none" ;
            strikeoff.style.display = "none" ;
            strikeoff.nextElementSibling.style.display = "block" ;
            completedTasks.appendChild(strikeoff.parentNode);
           });
        });

        const undone = document.querySelectorAll("#undone");
        undone.forEach(unstrikeoff => {
          unstrikeoff.addEventListener("click" , () => {
            paragraph.style.textDecoration = "line-through" ;
            unstrikeoff.style.display = "none" ;
            unstrikeoff.previousElementSibling.style.display = "block" ;
            allTasks.appendChild(unstrikeoff.parentNode);
           });
        });
        
        const fList = document.querySelector("#flisted");
        const favorites = document.querySelectorAll("#favorite");
        favorites.forEach(favorite => {
          favorite.addEventListener("click" , () => {
            favorite.style.display = "none" ;
            favorite.nextElementSibling.style.display = "block" ;
            fList.appendChild(favorite.parentNode);
          });
        });

        const unfavorites = document.querySelectorAll("#unfavorite");
        unfavorites.forEach(unfavorite =>{
          unfavorite.addEventListener("click" , () => {
            unfavorite.style.display = "none" ;
            unfavorite.previousElementSibling.style.display = "block" ;
            allTasks.appendChild(unfavorite.parentNode);
          });
        })

          const editElements = document.querySelectorAll("#editElement");
          editElements.forEach(editElement =>{
          editElement.addEventListener("click" , () => {
             paragraph.contentEditable = "true" ;
             paragraph.style.outline = "none" ;
             paragraph.addEventListener("keypress" , (event) => {
             if(event.key === "Enter" ){
                  paragraph.contentEditable = "false" ;
               }
            })
        });
     })
        
       const deleteElements = document.querySelectorAll("#deleteElement");
       deleteElements.forEach(deleteElement =>{
         deleteElement.addEventListener("click" , function(){
           deleteElement.parentNode.remove();
         });
      });
    }
  }
});
