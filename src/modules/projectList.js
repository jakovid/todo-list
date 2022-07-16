import { todoList } from "./todoList";

var projectList = {
    buildProjectList: function() {
        this.cacheDom();
        this.createDefaultProjects();
        this.addProjectBtn();
    },
    projectArrays: [
        ['Today', 'Build Apple'],
        ['This Week', 'Jump in a cannon', 'Kiss a frog']
    ],
    cacheDom: function() {
        this.projectListBox = document.getElementById('projectList');
        this.defaultProjects = this.projectListBox.querySelector('#defaultProjects');
        this.userProjects = this.projectListBox.querySelector('#userProjects');
        this.inputProjects = this.projectListBox.querySelector('#inputProjects');
        this.todoList = document.getElementById('todoList');
    },
    createDefaultProjects: function() {
        projectList.defaultProjects.innerHTML = '';
        //loop through and create elements for the array items
        for (let i = 0; i < 2; i++) {
            //create elements
            let project = document.createElement('div');
            let projectName = document.createElement('div');
            let projectCount = document.createElement('div');
            //add classnames
            project.classList = "project";
            projectName.classList = "projectTitle";
            projectCount.classList = "projectCount";
            //add innerText
            projectName.innerText = projectList.projectArrays[i][0];
            projectName.id = projectList.projectArrays[i][0];
            projectName.value = i;
            projectCount.innerText = projectList.projectArrays[i].length-1;
            //bind events
            projectName.onclick = projectList.populateMain;
            //append items
            project.append(projectName,projectCount);
            projectList.defaultProjects.append(project);
        };
        this.cacheDom();
    },
    createUserProjects: function() {
        projectList.userProjects.innerHTML = '';
        //dear future Jacob you need to figure out why this does not append the user projects
        //loop through and create elements for the array items
        for (let i = 2; i < projectList.projectArrays.length - 1; i++) {
            //create elements
            let project = document.createElement('div');
            let projectName = document.createElement('div');
            let projectCount = document.createElement('div');
            //add classnames
            project.classList = "project";
            projectName.classList = "projectTitle";
            projectCount.classList = "projectCount";
            //add innerText
            projectName.innerText = projectList.projectArrays[i][0];
            projectName.id = projectList.projectArrays[i][0];
            projectName.value = i;
            projectCount.innerText = projectList.projectArrays[i].length-1;
            //bind events
            projectName.onclick = projectList.populateMain;
            //append items
            project.append(projectName,projectCount);
            projectList.userProjects.append(project);
        };
        projectList.cacheDom();
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
        projectList.projectArrays.push([document.getElementById('newProjectInput').value]);
        projectList.createUserProjects();
        projectList.addProjectBtn();
        console.log(projectList.projectArrays);
    },
    populateMain: function() {
        projectList.todoList.innerHTML = '';
        //create elements
        let todoTitle = document.createElement('h1');
        let todoBody = document.createElement('div');
        let todoInputBox = document.createElement('div');
        //innerText
        todoTitle.innerText = projectList.projectArrays[this.value][0];
        todoTitle.value = this.value;
        //ad IDs
        todoTitle.id = "todoTitle";
        todoBody.id = "todoBody";
        todoInputBox.id = "todoInputBox";
        //append
        projectList.todoList.append(todoTitle,todoBody, todoInputBox);
        //populate todo list
        projectList.populateTodoList(this.value);
        //add new todo button
        projectList.addTodoBtn();
    },
    populateTodoList: function(projectNumber) {
        document.getElementById('todoBody').innerHTML = '';
        for (let i = 1; i < this.projectArrays[projectNumber].length; i++) {
            let todoItem = document.createElement('div');
            todoItem.innerText = projectList.projectArrays[projectNumber][i];
            document.getElementById('todoBody').append(todoItem);
        }
    },
    addTodoBtn: function () {
        document.getElementById('todoInputBox').innerHTML = '';
        //create element
        let todoBtn = document.createElement('div');
        //add id
        todoBtn.id = 'todoBtn';
        //add innerText
        todoBtn.innerText = 'Add New Todo Item';
        //add value
        todoBtn.value = document.getElementById('todoTitle').value;
        //bind events
        todoBtn.addEventListener('click', projectList.inputNewTodo);
        //append
        document.getElementById('todoInputBox').append(todoBtn);
    },
    inputNewTodo: function() {
        //create elements
        let todoInput = document.createElement('input');
        let todoConfirm = document.createElement('button');
        let todoCancel = document.createElement('button');
        //id for elements
        todoInput.id = 'todoInput';
        //add innerText
        todoConfirm.innerText = 'Add Todo';
        todoCancel.innerText = 'Cancel';
        //bind events
        todoCancel.addEventListener('click', projectList.addTodoBtn);
        todoConfirm.addEventListener('click', projectList.addNewTodo);
        //clear todoInputBox
        document.getElementById('todoInputBox').innerHTML = '';
        //append
        document.getElementById('todoInputBox').append(todoInput,todoConfirm,todoCancel);
    },
    createNewTodo: function(todoName) {
        //create elements
        let newTodoBox = document.createElement('div');
        let newTodoName = document.createElement('div');
        let newTodoComplete = document.createElement('input');
        // add innerText
        newTodoName.innerText = todoName;
        //add class
        newTodoBox.className = 'todoBox';
        //add type
        newTodoComplete.type = 'radio';
        //append
        newTodoBox.append(newTodoName,newTodoComplete);
        document.getElementById('todoBody').append(newTodoBox);
    },
    addNewTodo: function() {
        projectList.projectArrays[document.getElementById('todoTitle').value].push(document.getElementById('todoInput').value);
        console.log(projectList.projectArrays[document.getElementById('todoTitle').value]);
        projectList.populateTodoList(document.getElementById('todoTitle').value);
        projectList.addTodoBtn();
        projectList.createDefaultProjects();
    }

}

var todoLists = {

}

export { projectList };