(()=>{"use strict";document.getElementById("headerBox");var e={buildProjectList:function(){this.cacheDom(),this.createDefaultProject("Today"),this.createDefaultProject("This Week"),this.addProjectBtn()},cacheDom:function(){this.projectListBox=document.getElementById("projectList"),this.defaultProjects=this.projectListBox.querySelector("#defaultProjects"),this.userProjects=this.projectListBox.querySelector("#userProjects"),this.inputProjects=this.projectListBox.querySelector("#inputProjects"),this.todoList=document.getElementById("todoList")},createDefaultProject:function(t){let n=document.createElement("div"),o=document.createElement("div"),d=document.createElement("div");n.classList="project",o.classList="projectTitle",d.classList="projectCount",o.innerText=t,o.id=t,o.value=t,d.innerText="3",o.onclick=e.populateTodo,n.append(o,d),this.defaultProjects.append(n),this.cacheDom(),console.log(document.getElementById(t).value)},createUserProject:function(t){let n=document.createElement("div"),o=document.createElement("div"),d=document.createElement("div");n.classList="project",o.classList="projectTitle",d.classList="projectCount",o.innerText=t,o.id=t,d.innerText="0",o.onclick=e.populateTodo,n.append(o,d),this.userProjects.append(n),this.cacheDom()},addProjectBtn:function(){e.inputProjects.innerHTML="";let t=document.createElement("div");t.id="addProjectBtn",t.innerText="Add New Project",t.addEventListener("click",e.inputNewProject),e.inputProjects.append(t)},inputNewProject:function(){e.inputProjects.innerHTML="";let t=document.createElement("div"),n=document.createElement("input"),o=document.createElement("button"),d=document.createElement("button");t.id="newProjectBox",n.id="newProjectInput",o.id="projectBtn",d.id="projectBtn",o.innerText="confirm",d.innerText="cancel",d.addEventListener("click",e.addProjectBtn),o.addEventListener("click",e.addNewProject),t.append(n,o,d),e.inputProjects.append(t)},addNewProject:function(){e.createUserProject(document.getElementById("newProjectInput").value),e.addProjectBtn()},populateTodo:function(){e.todoList.innerHTML="";let t=document.createElement("h1"),n=document.createElement("div"),o=document.createElement("div");t.innerText=this.innerText,n.id="todoBody",o.id="todoInputBox",e.todoList.append(t,n,o),e.addTodoBtn()},addTodoBtn:function(){document.getElementById("todoInputBox").innerHTML="";let t=document.createElement("div");t.id="todoBtn",t.innerText="Add New Todo Item",t.addEventListener("click",e.inputNewTodo),document.getElementById("todoInputBox").append(t)},inputNewTodo:function(){document.getElementById("todoInputBox").innerHTML="";let t=document.createElement("input"),n=document.createElement("button"),o=document.createElement("button");t.id="todoInput",n.innerText="Add Todo",o.innerText="Cancel",o.addEventListener("click",e.addTodoBtn),n.addEventListener("click",e.addNewTodo),document.getElementById("todoInputBox").append(t,n,o)},createNewTodo:function(e){let t=document.createElement("div"),n=document.createElement("div"),o=document.createElement("input");n.innerText=e,t.className="todoBox",o.type="radio",t.append(n,o),document.getElementById("todoBody").append(t)},addNewTodo:function(){e.createNewTodo(document.getElementById("todoInput").value),e.addTodoBtn()}},t={footerBox:document.getElementById("footerBox"),buildFooter:function(){let e=document.createElement("div");e.className="footerText",e.innerText="This website was built by Jacob",this.footerBox.appendChild(e)}};(function(){let e=document.createElement("img"),t=document.createElement("div");e.id="headerLogo",t.id="headerName",t.innerText="Todo List",e.src="",headerBox.append(e,t)})(),e.buildProjectList(),t.buildFooter()})();