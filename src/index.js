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
            this.todoNavAdd = this.el.querySelector('#todoNavAdd');
            this.cancelBtn = this.el.querySelector('#cancelBtn');
        },
        bindEvents: function() {
            this.todoNavAdd.onclick = this.projectInput;
        },
        projectInput: function() {
            todo.projectInput();
            todoModule.cacheDom();
            todoModule.bindEvents();
        }
        
    };

    todoModule.init();
})()