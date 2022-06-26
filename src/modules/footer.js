var footer = {
    todoModule: document.getElementById('todoModule'),
    buildFooter: function() {
        // create elements
        let footerContainer = document.createElement('div');
        let footerText = document.createElement('div');
        //add class names to elements
        footerContainer.className = "footerContainer";
        footerText.className = "footerText";
        //add innertext to elements
        footerText.innerText = "This website was built by Jacob";
        //append elements
        footerContainer.appendChild(footerText);
        this.todoModule.appendChild(footerContainer);
    }
};

export { footer };