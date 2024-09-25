function parseCount(a) {
    if (isNaN(a) == true) {
        throw new Error('Невалидное значение');
    }
    return Number.parseFloat(a);
}

function validateCount(b) {
    try {
        return Number.parseFloat(parseCount(b).toFixed(2));
    }
    catch (Error) {
        if (isNaN(b) == true) {
            return Error;
        }
    }
}

console.log(parseCount('123'));
console.log(parseCount('012'));
/* console.log(parseCount("ыфва")); */
console.log(validateCount("56.65"));
console.log(validateCount("ыфва"));



class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;

        if (c > a + b || a > c + b || b > c + a) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
    }

    get perimeter() {
        const p = this.a + this.b + this.c;
        return p;

    };

    get area() {
        const s = parseFloat((Math.sqrt((this.perimeter / 2) * ((this.perimeter / 2) - this.a) * ((this.perimeter / 2) - this.b) * ((this.perimeter / 2) - this.c)).toFixed(3)));
        return s;
    }
}

function getTriangle(a, b, c) {
    try {

        return new Triangle(a, b, c);

    }
    catch (Error) {
        if (Error instanceof TypeError) {
            return {
                perimeter: function () { return "Ошибка! Треугольник не существует" },
                area: function () { return "Ошибка! Треугольник не существует" }
            }
        }
    }
}



console.log(new Triangle(1, 3, 3));

let triangle = new Triangle(2, 5, 5);
console.log(triangle);
console.log(triangle.perimeter);
console.log(triangle.area);

triangle = new Triangle(6, 10, 15);
console.log(triangle);
console.log(triangle.perimeter);
console.log(triangle.area);

triangle.perimeter = "неправильное значение";
triangle.area = "неправильное значение";
console.log(triangle.perimeter);
console.log(triangle.area);

/* triangle = new Triangle(1, 3, 100); */
/* console.log(new Triangle(1, 3, 100));
console.log(new Triangle(100, 3, 10));
console.log(new Triangle(1, 300, 10)); */

console.log(getTriangle(1, 3, 100));
triangle.perimeter = "неправильное значение";
triangle.area = "неправильное значение";
console.log(triangle.area);
console.log(triangle.perimeter);
console.log(getTriangle(2, 5, 5));
