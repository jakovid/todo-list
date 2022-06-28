var header = {
    headerBox: document.getElementById('headerBox'),
    buildHeader: function() {
        //create elements
        let headerLogo = document.createElement('img');
        let headerName = document.createElement('div');
        //add id
        headerLogo.id = 'headerLogo';
        headerName.id = "headerName";
        //add innertext
        headerName.innerText = "Todo List"
        //add src
        headerLogo.src = ""
        //append elements
        headerBox.append(headerLogo,headerName);
    }
}

export { header };