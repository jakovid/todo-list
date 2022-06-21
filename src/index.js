
(function() {
    var todoModule = {
        init: function() {
            this.cacheDom();
            this.addProjectBtn();
        },
        cacheDom: function(){
            this.el = document.getElementById('todoModule');
            this.newProjects = this.el.querySelector('.newProjects');
            this.addProjectsBox = this.el.querySelector('.addProjectBox')
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
            addBtn.addEventListener('click',todoModule.addNewProject);
            //append element
            todoModule.addProjectsBox.appendChild(addBtn);
        },
        addNewProject: function() {
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
            //append
            btnBox.append(confirmAdd,cancelAdd);
            todoModule.addProjectsBox.append(projectInput,btnBox);
        }

    };

    todoModule.init();
})()