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
        <p id = "paragraph" > ${ taskNamer.value } </p>
        <div id = "favorite" ></div>
        <div id = "unfavorite" ></div>
        <div id = "editElement" ></div>
        <div id = "deleteElement" ></div>
        <div>`;
        allTasks.appendChild(task);
        
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
          const paragraph = document.querySelector("#paragraph");
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
