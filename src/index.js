
(function() {
    var todoModule = {
        init: function() {
            this.cacheDom();
            this.addProjectBtn();
            this.bindEvents();
        },
        cacheDom: function(){
            this.el = document.getElementById('todoModule');
            this.newProjects = this.el.querySelector('.newProjects');
            this.addProjectsBox = this.el.querySelector('.addProjectBox');
            this.todoList = this.el.querySelector('#todoList');
            this.listNames = this.el.querySelectorAll('.listName');
        },
        bindEvents: function() {
            this.listNames.forEach(div => {
                div.addEventListener('click',this.createTodoMain);
            });
        },
        addProjectBtn: function(){
            todoModule.addProjectsBox.innerHTML = '';
            //create element
            let addBtn = document.createElement('div');
            //add id
            addBtn.id = 'addBtn';
            //add innerText
            addBtn.innerText = 'Add New Project';
            //add event listener
            addBtn.addEventListener('click',todoModule.openProjectInput);
            //append element
            todoModule.addProjectsBox.appendChild(addBtn);
        },
        openProjectInput: function() {
            //bye bye add new project
            todoModule.addProjectsBox.innerHTML = '';
            //create elements
            let projectInput = document.createElement('input');
            let btnBox = document.createElement('div');
            let confirmAdd = document.createElement('button');
            let cancelAdd = document.createElement('button');
            //add class
            projectInput.className = 'projectInput';
            confirmAdd.className = 'newProjectBtn';
            cancelAdd.className = 'newProjectBtn';
            //add innerText
            confirmAdd.innerText = 'Add';
            cancelAdd.innerText = 'Cancel';
            //add eventListners
            cancelAdd.addEventListener('click',todoModule.addProjectBtn);
            confirmAdd.addEventListener('click',todoModule.addInputProject);
            //append
            btnBox.append(confirmAdd,cancelAdd);
            todoModule.addProjectsBox.append(projectInput,btnBox);
        },
        addInputProject: function() {
            //create elements
            let newProject = document.createElement('div');
            let newProjectName = document.createElement('div');
            let newProjectCount = document.createElement('div');
            //add class
            newProject.className = 'project';
            newProjectName.className = 'listName';
            newProjectCount.className = 'listCount';
            // inner html
            newProjectName.innerText = document.querySelector('.projectInput').value;
            newProjectCount.innerText = '0';
            //append items
            newProject.append(newProjectName,newProjectCount);
            todoModule.addProjectsBox.innerHTML = '';
            todoModule.newProjects.append(newProject);
            todoModule.addProjectBtn();
        },
        createTodoMain: function() {
            todoModule.todoList.innerHTML = '';
            //create element
            let todoMainTitle = document.createElement('div');
            //add class
            todoMainTitle.className = 'mainTitle';
            //add innerText
            todoMainTitle.innerText = this.innerText;
            //append
            todoModule.todoList.append(todoMainTitle);
            console.log(todoMainTitle);

        }

    };

    todoModule.init();
})()