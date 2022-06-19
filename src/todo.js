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
        // let todoNavAdd = document.createElement('div');
        //add ids
        todoContainer.id = 'todoContainer';
        todoNav.id = 'todoNav';
        todoMain.id = 'todoMain';
        todoNavToday.id = 'todoNavToday';
        todoNavProjects.id = 'todoNavProjects';
        todoNavNew.id = 'todoNavNew';
        todoNavAddBox.id = 'todoNavAddBox';
        // todoNavAdd.id = 'todoNavAdd';
        //add innertext
        todoNavToday.innerText = "Today";
        todoNavProjects.innerText = "Projects";
        // todoNavAdd.innerText = "Add Projects";
        //append elements
        // todoNavAddBox.appendChild(todoNavAdd);
        todoNav.append(todoNavToday,todoNavProjects,todoNavNew,todoNavAddBox);
        todoContainer.append(todoNav,todoMain);
        this.todoModule.appendChild(todoContainer);
        todo.buildAddBtn();
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
        //cache new btns
        todo.bindBtns();
        // this.bindBtns;
    },
    bindBtns: function() {
        //cache new btns
        console.log('precache');
        let cancelBtn = document.getElementById('cancelBtn');
        console.log(cancelBtn);
        cancelBtn.addEventListener("click",this.cancelAdd);
        console.log('added eventlistener');
    },
    cancelAdd: function(){
        //delete add button
        let newContainer = document.getElementById('todoNavAddBox');
        newContainer.innerHTML = '';
        todo.buildAddBtn();
    },
    buildAddBtn: function() {
        let newContainer = document.getElementById('todoNavAddBox');
        let todoNavAdd = document.createElement('div');
        //add ids
        todoNavAdd.id = 'todoNavAdd';
        //add innertext
        todoNavAdd.innerText = "Add Projects";
        //append element
        newContainer.appendChild(todoNavAdd);
        //add event listener
        let navAddBind = document.getElementById('todoNavAdd');
        console.log(navAddBind);
        navAddBind.addEventListener('click',todo.projectInput);
        console.log('event added back babY!');
    }
}

export { todo };