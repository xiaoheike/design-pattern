function ToolBar() {
    var map = {};
    this.registView = function (id,view) {
        map[id] = view;
    };
    this.removeView = function (id) {
        delete map[id];
    };
    this.getView = function (id) {
        if(!map[id]){
            console.error("view " + id +" has not been regist");
        }
        var myArray = new Array();
        var a = {};
        a.__proto__ = myArray;
        return Object.create(map[id]);
    };
    var func = function () { }
    func.prototype = new Array();
}

var Object = function()
{

}