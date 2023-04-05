let Add=document.querySelector('#add');
let Alltasks=document.querySelector('.alltasks');
let Taskbar=document.querySelector('.taskbar');
let Tasknamer=document.querySelector('#tasknamer');
let Flist=document.querySelector('#flisted');
let Searchbox=document.querySelector('#searchbox');
Searchbox.addEventListener(aaa + "ss" + sss,function(){
    if(Searchbox.value[0]==tasks.innerText[0]){
    }
})
var aa = "ddd";
Tasknamer.addEventListener("keypress",(event) => {
    console.log(this);

    
    if(event.key==="Enter"){
        if(Tasknamer.value=="" || Tasknamer.value[0]==" "){
            console.log(`task ${event.value} not entered`);
        }

        else{
        
        let tasks=document.createElement("div");
        let para=document.createElement("p");
        let favorite=document.createElement("div");
        let notfavorite=document.createElement("div");
        let editor=document.createElement("div");
        let deletor=document.createElement("div");

        para.innerText=`${Tasknamer.value}`;
        Alltasks.appendChild(tasks);
        tasks.setAttribute("id","taskstyle");
        favorite.setAttribute("id","favo");
        favorite.setAttribute("id","favo");
        notfavorite.setAttribute("id","nofavo");
        editor.setAttribute("id","edit");
        deletor.setAttribute("id","dele");

        tasks.appendChild(para);
        tasks.appendChild(favorite);
        tasks.appendChild(notfavorite);
        tasks.appendChild(editor);
        tasks.appendChild(deletor);

        favorite.addEventListener("click",function(){
          favorite.style.display="none";
          notfavorite.style.display="block";
          Flist.appendChild(tasks);
        });

        notfavorite.addEventListener("click",function(){
            notfavorite.style.display="none";
            favorite.style.display="block";
            Alltasks.appendChild(tasks);
          });

        editor.addEventListener("click",function(){
           para.contentEditable="true";
           para.style.outline="none";
           para.addEventListener("keypress",function(event){
           if(event.key==="Enter"){
                para.contentEditable="false";
            }
           })
        });
       deletor.addEventListener("click",function(){
        tasks.remove();
       });
     }
    }
});
