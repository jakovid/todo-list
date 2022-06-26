var header = {
    todoModule: document.getElementById('todoModule'),
    buildHeader: function() {
        //create elements
        let headerBox = document.createElement('div');
        let headerLogo = document.createElement('img');
        let headerName = document.createElement('div');
        //add id
        headerBox.id = 'headerBox';
        headerLogo.id = 'headerLogo';
        headerName.id = "headerName";
        //add innertext
        headerName.innerText = "Todo List"
        //add src
        headerLogo.src = ""
        //append elements
        headerBox.append(headerLogo,headerName);
        this.todoModule.appendChild(headerBox);
    }
}

export { header };