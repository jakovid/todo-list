import { footer } from "./footer";
import { todo } from "./todo";
import { header } from "./header";
(function() {
    var todoModule = {
        init: function() {
            header.buildHeader();
            todo.buildTodo();
            footer.buildFooter();
            this.cacheDom();
            this.bindEvents();
        },
        cacheDom: function() {
            this.el = document.getElementById('todoModule');
            console.log(this.el);
            this.todoNavNew = this.el.querySelector('#todoNavNew');
            this.todoNavAdd = this.el.querySelector('#todoNavAdd');
        },
        bindEvents: function() {
            this.todoNavAdd.onclick = this.addProject;
        },
        addProject: function() {
            //create elements
            let newProject = document.createElement('div');
            //add class
            newProject.className = "newProject";
            //add innertext
            newProject.innerText = "test Project";
            //append
            todoModule.todoNavNew.appendChild(newProject);
        }
    };

    todoModule.init();
})()