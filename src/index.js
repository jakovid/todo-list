
(function() {
    var todoModule = {
        init: function() {
            this.cacheDom();
        },
        cacheDom: function(){
            this.el = document.getElementById('todoModule');
        }

    };

    todoModule.init();
})()