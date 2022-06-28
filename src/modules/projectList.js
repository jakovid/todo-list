var projectList = {
    buildProjectList: function() {
        this.cacheDom();
        this.createDefaultProject('Today');
        this.createDefaultProject('Week');
        this.addProjectBtn();
    },
    cacheDom: function() {
        this.projectListBox = document.getElementById('projectList');
        this.defaultProjects = this.projectListBox.querySelector('#defaultProjects');
        this.userProjects = this.projectListBox.querySelector('#userProjects');
        this.inputProjects = this.projectListBox.querySelector('#inputProjects');
    },
    createDefaultProject: function(name) {
        //create elements
        let project = document.createElement('div');
        let projectName = document.createElement('div');
        let projectCount = document.createElement('div');
        //add classnames
        project.classList = "project";
        projectName.classList = "projectTitle";
        projectCount.classList = "projectCount";
        //add innerText
        projectName.innerText = name;
        projectCount.innerText = "2";
        //bind events
        projectName.onclick = projectList.populateTodo;
        //append items
        project.append(projectName,projectCount);
        this.defaultProjects.append(project);
        this.cacheDom();
    },
    createUserProject: function(name) {
        //create elements
        let project = document.createElement('div');
        let projectName = document.createElement('div');
        let projectCount = document.createElement('div');
        //add classnames
        project.classList = "project";
        projectName.classList = "projectTitle";
        projectCount.classList = "projectCount";
        //add innerText
        projectName.innerText = name;
        projectCount.innerText = "2";
        //append items
        project.append(projectName,projectCount);
        this.userProjects.append(project);
        this.cacheDom();
    },
    addProjectBtn: function() {
        projectList.inputProjects.innerHTML = '';
        //create element
        let addProjectBtn = document.createElement('div');
        //add id
        addProjectBtn.id = "addProjectBtn";
        //add innerText
        addProjectBtn.innerText = "Add New Project";
        //bind event
        addProjectBtn.addEventListener('click', projectList.inputNewProject);
        //append btn
        projectList.inputProjects.append(addProjectBtn);
    },
    inputNewProject: function() {
        //clear inputProjects
        projectList.inputProjects.innerHTML = '';
        //create elements
        let newProjectBox = document.createElement('div');
        let newProjectInput = document.createElement('input');
        let confirmBtn = document.createElement('button');
        let cancelBtn = document.createElement('button');
        //add classnames
        newProjectBox.id = "newProjectBox";
        newProjectInput.id = "newProjectInput";
        confirmBtn.id= "projectBtn";
        cancelBtn.id = "projectBtn";
        //add innerText
        confirmBtn.innerText = "confirm";
        cancelBtn.innerText = "cancel";
        //bind events to elements
        cancelBtn.addEventListener('click',projectList.addProjectBtn);
        confirmBtn.addEventListener('click',projectList.addNewProject);
        //append elements
        newProjectBox.append(newProjectInput,confirmBtn,cancelBtn);
        projectList.inputProjects.append(newProjectBox);
    },
    addNewProject: function() {
        // this.cacheDom();
        projectList.createUserProject(document.getElementById('newProjectInput').value);
        projectList.addProjectBtn();
    },
    populateTodo: function() {
        let todoList = document.getElementById('todoList');
        todoList.innerText = this.innerText;
    }

}

export { projectList };