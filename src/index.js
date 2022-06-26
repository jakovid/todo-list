import { header } from "./modules/header";
import { footer } from "./modules/footer";


(function() {
    var todoModule = {
        init: function() {
            header.buildHeader();
        },
        cacheDom: function(){
        },
        bindEvents: function() {
        },
    };

    todoModule.init();
})()