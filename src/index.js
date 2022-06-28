import { header } from "./modules/header";
import { projectList } from "./modules/projectList";
import { footer } from "./modules/footer";

(function() {
    var todoModule = {
        init: function() {
            header.buildHeader();
            projectList.buildProjectList();
            footer.buildFooter();
        },
        cacheDom: function(){
        },
        bindEvents: function() {
        },
    };

    todoModule.init();
})()