import { todoList } from "./todoList";

var projectList = {
    buildProjectList: function() {
        this.cacheDom();
        this.createDefaultProject('Today');
        this.createDefaultProject('This Week');
        this.addProjectBtn();
    },
    cacheDom: function() {
        this.projectListBox = document.getElementById('projectList');
        this.defaultProjects = this.projectListBox.querySelector('#defaultProjects');
        this.userProjects = this.projectListBox.querySelector('#userProjects');
        this.inputProjects = this.projectListBox.querySelector('#inputProjects');
        this.todoList = document.getElementById('todoList');
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
        projectName.id = name;
        projectName.value = name;
        projectCount.innerText = "0";
        //bind events
        projectName.onclick = projectList.populateTodo;
        //append items
        project.append(projectName,projectCount);
        this.defaultProjects.append(project);
        this.cacheDom();
        //get element
        console.log(document.getElementById(name).value);
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
        projectName.id = name;
        projectCount.innerText = "0";
        //bind events
        projectName.onclick = projectList.populateTodo;
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
        projectList.todoList.innerHTML = '';
        //create elements
        let todoTitle = document.createElement('h1');
        let todoBody = document.createElement('div');
        //innerText
        todoTitle.innerText = this.innerText;
        //ad IDs
        todoBody.id = "todoBody";
        //append
        projectList.todoList.append(todoTitle,todoBody);
        
        //figure out how to create array

        //add new todo button
        projectList.addTodoBtn();
    },
    addTodoBtn: function () {
        //create element
        let todoBtn = document.createElement('div');
        //add id
        todoBtn.id = 'todoBtn';
        //add innerText
        todoBtn.innerText = 'Add New Todo Item';
        //bind events
        todoBtn.addEventListener('click', this.addNewTodo);
        //append
        projectList.todoList.append(todoBtn);

    },
    addNewTodo: function() {
        let testDiv = document.createElement('div');
        testDiv.innerText = 'test';
        document.getElementById('todoBody').append(testDiv);
    }

}

var todoLists = {

}

export { projectList };