(function(){
    var todoList = {
        init: function(){
            this.cacheDom();
            this.bindEvents();
        },
        cacheDom: function(){
            this.el = document.getElementById('todoContainer');
            console.log(this.el);
            this.navContainer = this.el.getElementById('navContainer');
            this.addProject = this.el.getElementById('addProject');
            console.log(this.addProject);
        },
        bindEvents: function(){
            this.addProject.onclick = this.createProject();
        },
        createProject: function(){
            //create element
            let newProject = document.createElement('div');
            //add class
            newProject.className = "projectItem";
            //add innertext to elements
            newProject.innerText = "Test Project";
            //append project
            todoList.navContainer.appendChild(newProject);
        }
    }

    todoList.init();
})()