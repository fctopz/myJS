//alert("sample text");
class Rectangle{

    constructor(_width,_height,_color){
        this.width = _width;
        this.height = _height;
        this.color = _color;

        console.log("This is a rectangle! \n width:"+ this.width +" height:"+this.height+" color:"+this.color);
    }
}

function getCaffeine(type){
    let caffeine;

    const map = {
        'Coffee':'95 mg',
        'Redbull':'147 mg',
        'Tea':'11 mg',
        'Soda':'21 mg'
    };
    caffeine = map[type] ?? 'Not found';
    return caffeine;
}

let r1 = new Rectangle(3,5,"blue");
let r2 = new Rectangle(4,9,"red");
console.log(getCaffeine('Teax'));


/*
practice array methods
https://www.youtube.com/watch?v=R8rmfD9Y5-c

source: https://www.youtube.com/shorts/cbA2HY1xV0w
*/