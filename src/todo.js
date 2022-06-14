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
        let todoNavAddBox = document.createElement('div');
        let todoNavAdd = document.createElement('div');
        //add ids
        todoContainer.id = 'todoContainer';
        todoNav.id = 'todoNav';
        todoMain.id = 'todoMain';
        todoNavToday.id = 'todoNavToday';
        todoNavProjects.id = 'todoNavProjects';
        todoNavNew.id = 'todoNavNew';
        todoNavAddBox.id = 'todoNavAddBox';
        todoNavAdd.id = 'todoNavAdd';
        //add innertext
        todoNavToday.innerText = "Today";
        todoNavProjects.innerText = "Projects";
        todoNavAdd.innerText = "Add Projects";
        //append elements
        todoNavAddBox.appendChild(todoNavAdd);
        todoNav.append(todoNavToday,todoNavProjects,todoNavNew,todoNavAddBox);
        todoContainer.append(todoNav,todoMain);
        this.todoModule.appendChild(todoContainer);
        console.log(todoContainer);
    },
    projectInput: function() {
        //delete add button
        let newContainer = document.getElementById('todoNavAddBox');
        newContainer.innerHTML = '';
        //create input
        let inputNew = document.createElement('input');
        let inputBtnAdd = document.createElement('button');
        let inputBtnCancel = document.createElement('button');
        let inputNewBox = document.createElement('div');

        //add id
        inputBtnCancel.id = "cancelBtn";

        //create innertext
        inputBtnAdd.innerText = "Add";
        inputBtnCancel.innerText = "Cancel";

        //appened input elements
        inputNewBox.append(inputNew,inputBtnAdd,inputBtnCancel);
        newContainer.appendChild(inputNewBox);
        console.log('input test!');        
    },
    cancelAdd: function(){
        //clear out input section
        this.projectInput.newContainer.innerHTML = '';
        //create element
        let todoNavAdd = document.createElement('div');
        //add ids
        todoNavAdd.id = 'todoNavAdd';
        //add innertext
        todoNavAdd.innerText = "Add Projects";
        //append element
        this.projectInput.newContainer.appendChild(todoNavAdd);


    }
}

export { todo };