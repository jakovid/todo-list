import { footer } from "./footer";
import { header } from "./header";
(function() {
    var todoModule = {
        init: function() {
            header.buildHeader();
            footer.buildFooter();
            this.cacheDom();
            this.bindEvents();
        },
        cacheDom: function() {
            this.el = document.getElementById('todoModule');
            console.log(this.el);
            this.navContainer = this.el.querySelector('#navContainer');
            this.addBtn = this.el.querySelector('#addProject');
        },
        bindEvents: function() {
            this.addBtn.onclick = this.addProject;
        },
        addProject: function() {
            //create elements
            let newProject = document.createElement('div');
            //add class
            newProject.className = "newProject";
            //add innertext
            newProject.innerText = "test Project";
            //append
            todoModule.navContainer.appendChild(newProject);
        }
    };

    todoModule.init();
})()