var todo = {
    todoModule: document.getElementById('todoModule'),
    buildTodo: function() {
        //create elements
        let todoContainer = document.createElement('div');
        let todoNav = document.createElement('div');
        let todoMain = document.createElement('div');
        let todoNavToday = document.createElement('div');
        let todoNavProjects = document.createElement('div');
        let todoNavNew = document.createElement('div');
        let todoNavAdd = document.createElement('div');
        //add ids
        todoContainer.id = 'todoContainer';
        todoNav.id = 'todoNav';
        todoMain.id = 'todoMain';
        todoNavToday.id = 'todoNavToday';
        todoNavProjects.id = 'todoNavProjects';
        todoNavNew.id = 'todoNavNew';
        todoNavAdd.id = 'todoNavAdd';
        //add innertext
        todoNavToday.innerText = "Today";
        todoNavProjects.innerText = "Projects";
        todoNavAdd.innerText = "Add Projects";
        //append elements
        todoNav.append(todoNavToday,todoNavProjects,todoNavNew, todoNavAdd);
        todoContainer.append(todoNav,todoMain);
        this.todoModule.appendChild(todoContainer);
        console.log(todoContainer);
    },
    addProject: function() {
        //find nav
        let projectList = document.getElementById('todoNavNew');
        //create element
        let newProject = document.createElement('div');
        //add class
        console.log('add project test');
        //add inner text
        newProject.innerText = "test";
        //append
        projectList.appendChild(newProject);
        console.log('yolo');
        
    }
}

export { todo };