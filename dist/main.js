(()=>{"use strict";document.getElementById("headerBox");var e={buildProjectList:function(){this.cacheDom(),this.createDefaultProjects(),this.addProjectBtn()},projectArrays:[["Today","Build Apple"],["This Week","Jump in a cannon","Kiss a frog"]],cacheDom:function(){this.projectListBox=document.getElementById("projectList"),this.defaultProjects=this.projectListBox.querySelector("#defaultProjects"),this.userProjects=this.projectListBox.querySelector("#userProjects"),this.inputProjects=this.projectListBox.querySelector("#inputProjects"),this.todoList=document.getElementById("todoList")},createDefaultProjects:function(){e.defaultProjects.innerHTML="";for(let t=0;t<2;t++){let o=document.createElement("div"),n=document.createElement("div"),d=document.createElement("div");o.classList="project",n.classList="projectTitle",d.classList="projectCount",n.innerText=e.projectArrays[t][0],n.id=e.projectArrays[t][0],n.value=t,d.innerText=e.projectArrays[t].length-1,n.onclick=e.populateMain,o.append(n,d),e.defaultProjects.append(o)}this.cacheDom()},createUserProject:function(t){let o=document.createElement("div"),n=document.createElement("div"),d=document.createElement("div");o.classList="project",n.classList="projectTitle",d.classList="projectCount",n.innerText=t,n.id=t,d.innerText="0",n.onclick=e.populateMain,o.append(n,d),this.userProjects.append(o),this.cacheDom()},addProjectBtn:function(){e.inputProjects.innerHTML="";let t=document.createElement("div");t.id="addProjectBtn",t.innerText="Add New Project",t.addEventListener("click",e.inputNewProject),e.inputProjects.append(t)},inputNewProject:function(){e.inputProjects.innerHTML="";let t=document.createElement("div"),o=document.createElement("input"),n=document.createElement("button"),d=document.createElement("button");t.id="newProjectBox",o.id="newProjectInput",n.id="projectBtn",d.id="projectBtn",n.innerText="confirm",d.innerText="cancel",d.addEventListener("click",e.addProjectBtn),n.addEventListener("click",e.addNewProject),t.append(o,n,d),e.inputProjects.append(t)},addNewProject:function(){e.createUserProject(document.getElementById("newProjectInput").value),e.addProjectBtn(),console.log(e.defaultProjectArrays.length)},populateMain:function(){e.todoList.innerHTML="";let t=document.createElement("h1"),o=document.createElement("div"),n=document.createElement("div");t.innerText=e.projectArrays[this.value][0],t.value=this.value,t.id="todoTitle",o.id="todoBody",n.id="todoInputBox",e.todoList.append(t,o,n),e.populateTodoList(this.value),e.addTodoBtn()},populateTodoList:function(t){document.getElementById("todoBody").innerHTML="";for(let o=1;o<this.projectArrays[t].length;o++){let n=document.createElement("div");n.innerText=e.projectArrays[t][o],document.getElementById("todoBody").append(n)}},addTodoBtn:function(){document.getElementById("todoInputBox").innerHTML="";let t=document.createElement("div");t.id="todoBtn",t.innerText="Add New Todo Item",t.value=document.getElementById("todoTitle").value,t.addEventListener("click",e.inputNewTodo),document.getElementById("todoInputBox").append(t)},inputNewTodo:function(){let t=document.createElement("input"),o=document.createElement("button"),n=document.createElement("button");t.id="todoInput",o.innerText="Add Todo",n.innerText="Cancel",n.addEventListener("click",e.addTodoBtn),o.addEventListener("click",e.addNewTodo),document.getElementById("todoInputBox").innerHTML="",document.getElementById("todoInputBox").append(t,o,n)},createNewTodo:function(e){let t=document.createElement("div"),o=document.createElement("div"),n=document.createElement("input");o.innerText=e,t.className="todoBox",n.type="radio",t.append(o,n),document.getElementById("todoBody").append(t)},addNewTodo:function(){e.projectArrays[document.getElementById("todoTitle").value].push(document.getElementById("todoInput").value),console.log(e.projectArrays[document.getElementById("todoTitle").value]),e.populateTodoList(document.getElementById("todoTitle").value),e.addTodoBtn(),e.createDefaultProjects()}},t={footerBox:document.getElementById("footerBox"),buildFooter:function(){let e=document.createElement("div");e.className="footerText",e.innerText="This website was built by Jacob",this.footerBox.appendChild(e)}};(function(){let e=document.createElement("img"),t=document.createElement("div");e.id="headerLogo",t.id="headerName",t.innerText="Todo List",e.src="",headerBox.append(e,t)})(),e.buildProjectList(),t.buildFooter()})();