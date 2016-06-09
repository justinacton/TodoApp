System.register(["aurelia-framework"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var aurelia_framework_1;
    var DatePicker;
    function createEvent(name) {
        var event = document.createEvent("Event");
        event.initEvent(name, true, true);
        return event;
    }
    function fireEvent(element, name) {
        var event = createEvent(name);
        element.dispatchEvent(event);
    }
    return {
        setters:[
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            }],
        execute: function() {
            DatePicker = (function () {
                function DatePicker(element) {
                    this.element = element;
                }
                DatePicker.prototype.attached = function () {
                    jQuery.noConflict();
                    $(this.element).datepicker().on("change", function (e) { return fireEvent(e.target, "input"); });
                };
                DatePicker.prototype.detached = function () {
                    $(this.element).datepicker("destroy").off("change");
                };
                DatePicker = __decorate([
                    aurelia_framework_1.customAttribute("datepicker"),
                    aurelia_framework_1.inject(Element), 
                    __metadata('design:paramtypes', [Object])
                ], DatePicker);
                return DatePicker;
            }());
            exports_1("DatePicker", DatePicker);
        }
    }
});
