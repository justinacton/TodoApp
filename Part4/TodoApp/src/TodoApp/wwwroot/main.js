System.register(["bootstrap"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function configure(aurelia) {
        aurelia.use.standardConfiguration().developmentLogging();
        aurelia.start().then(function (a) { return a.setRoot("src/app"); });
    }
    exports_1("configure", configure);
    return {
        setters:[
            function (_1) {}],
        execute: function() {
        }
    }
});
