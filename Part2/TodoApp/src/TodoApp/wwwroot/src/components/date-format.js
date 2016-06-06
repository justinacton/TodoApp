System.register(["moment"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var moment_1;
    var DateFormatValueConverter;
    return {
        setters:[
            function (moment_1_1) {
                moment_1 = moment_1_1;
            }],
        execute: function() {
            DateFormatValueConverter = (function () {
                function DateFormatValueConverter() {
                }
                DateFormatValueConverter.prototype.toView = function (value) {
                    return moment_1.default(value).format("M/D/YYYY");
                };
                return DateFormatValueConverter;
            }());
            exports_1("DateFormatValueConverter", DateFormatValueConverter);
        }
    }
});
