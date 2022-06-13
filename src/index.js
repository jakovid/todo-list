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
        },
        bindEvents: function() {
            this.todoNavAdd.onclick = todo.addProject;
        },
        
    };

    todoModule.init();
})()