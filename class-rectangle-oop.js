function Rectangle(width, height){
    this.width = width;
    this.height = height;
    this.setWidth = function (width){
        this.width = width;
    }
    this.setHeight = function (height){
        this.height = height;
    }
    this.getArea = function (){
        return this.width * this.height;
    }
    this.getPerimeter = function (){
        return this.width * 2 + this.height *2;
    }
    this.changeSize = function (){
        let width = +prompt("width");
        let height = +prompt("height")
        this.setWidth(width);
        this.setHeight(height);
    }
    this.draw = function (){
        let canvas = document.getElementById("myCanvas");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        let ctx = canvas.getContext("2d");
        ctx.translate(window.innerHeight / 2, window.innerWidth / 2);
        // ctx.beginPath();
        ctx.rect(0 - height/2, 0 - width / 2, this.width, this.height);
        ctx.fill();
        alert(` S = ${this.getArea()} C = ${this.getPerimeter()}`);
    }
}
(function() {
    let rect = new Rectangle(300, 200);
    rect.draw();
    rect.changeSize();
    rect.draw();
})();

