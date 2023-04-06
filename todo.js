const fList=document.querySelector('#flisted');
const searchBox=document.querySelector('#searchbox');

const taskNamer=document.querySelector('#tasknamer');
taskNamer.addEventListener( "keypress" , (event) => {
    console.log(this);

    if(event.key === "Enter" ){
        if(taskNamer.value === "" || taskNamer.value[0] === " " ){
            console.log(`task ${event.value} not entered`);
        }

        else{
        
        const allTasks=document.querySelector('.alltasks');
        let task = allTasks.innerHTML += `<div id="taskstyle">
        <p id = "paragraph" > ${ taskNamer.value } </p>
        <div id = "favorite" ></div>
        <div id = "unfavorite" ></div>
        <div id = "editElement" ></div>
        <div id = "deleteElement" ></div>
        <div>`;
        allTasks.appendChild(task);

        const favorite = document.querySelector("#favorite");
        const unfavorite = document.querySelector("#unfavorite");
        favorite.addEventListener( "click" , () => {
          favorite.style.display = "none" ;
          unfavorite.style.display = "block" ;
          fList.appendChild(task);
        });

        unfavorite.addEventListener( "click" , () => {
            unfavorite.style.display = "none" ;
            favorite.style.display = "block" ;
            allTasks.appendChild(task);
          });

        const editElement = document.getElementById("editElement");
        editElement.addEventListener( "click" , () => {
           para.contentEditable = "true" ;
           para.style.outline = "none" ;
           para.addEventListener( "keypress" , (event) => {
           if(event.key === "Enter" ){
                para.contentEditable = "false" ;
            }
           })

        });

       const deleteElement = document.getElementById("deleteElement");
       deleteElement.addEventListener( "click" , function(){
        task.remove();
       });
     }
    }
});
