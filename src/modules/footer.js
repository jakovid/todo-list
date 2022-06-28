var footer = {
    footerBox: document.getElementById('footerBox'),
    buildFooter: function() {
        // create elements
        let footerText = document.createElement('div');
        //add class names to elements
        footerText.className = "footerText";
        //add innertext to elements
        footerText.innerText = "This website was built by Jacob";
        //append elements
        this.footerBox.appendChild(footerText);
    }
};

export { footer };