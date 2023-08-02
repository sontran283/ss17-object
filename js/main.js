// cú pháp tạo đối tượng
// cú pháp tạo đối tượng
// cú pháp tạo đối tượng


//             cach 1:
//             cach 1:
//             cach 1:
let sonTran = {             // doi tuong
    name: "trần hồng sơn",  // thuoc tinh
    age: "18",
    class: "HN-JV230630",
    move: () => {
        console.log("di chuyen cham");
    }
};
console.log(sonTran);
console.log(sonTran.name);
console.log(sonTran.move());
sonTran.maSV = "SV283";    // co the them vao
console.log(sonTran);


//             cach 2:
//             cach 2:
//             cach 2:
// dinh nghia giong nhu ham de dinh nghia 1 lop
function students(name, age, className, maSV) {
    // console.log(this); // this dai dien cho doi tuong sinh ra tu lop/ham nay.
    this.fullname = name; // gan gia tri tham so name cho thuoc tinh fullname.
    this.age = age;
    this.className = className;
    this.maSV = maSV;
    this.move = () => {
        console.log("di chuyen cham");
    };
}
let hung = new students("hung", 24, "JV06", "SV004");
let sonTran1 = new students("trần hồng sơn", 18, "HN-JV230630", "SV283");
console.log(sonTran1);


//             cach 3:
//             cach 3:
//             cach 3:
//  su dung class trong ES6
class Students {
    fullname = "le a";
    age = 18;
    className = "JV06";
    maSV = "SV001";
    // tao constructor de gan gia tri ban dau luc khoi tao
    // constructor nhan gia tri khoi tao, thay doi gia tri cua thuoc tinh
    constructor(fullname, age, className, maSV) {
        this.fullname = fullname;
        this.age = age;
        this.className = className;
        this.maSV = maSV;
    }
    // dinh nghia phuong thuc
    move = () => {
        console.log("di chuyen cham");
    }
}
// khoi tao 1 doi tuong
let student1 = new Students("nguyen B", 22, "jv100", "ss004");
console.log(student1);



// truy xuat đối tượng
// truy xuat đối tượng
let obj = { "màu mũ": "xanh lá cây" }
console.log(obj["màu mũ"]);
console.log(obj);
// duyet doi tuong
for (const key in sonTran1) {
    console.log(key);
    console.log(sonTran1[key]); // in ra cac gia tri
}


//                   tao 1 lop hinh hoc
//                   tao 1 lop hinh hoc
//                   tao 1 lop hinh hoc
class Shape {
    constructor(color, area, perimeter) {
        this.color = color;
        this.area = 0;
        this.perimeter = 0;
    }
}
// tao lop hinh tam giac
class Triangle extends Shape {
    constructor(a, b, c, color) {
        super(color); // goi den constructor cua lop cha (Shape)
        this.a = a;
        this.b = b;
        this.c = c;
        //tinh chu vi va dien tich.
        this.Perimeter = this.a + this.b + this.c;
        this.area = Math.sqrt(p * (p - a) * (p - b) * (p - c));
        // this.getPerimeter=()=>{
        // return this.a + this.b + this.c;
        //     console.log(this.perimeter);
        // }
        // this.getArea=()=>{
        //     // công thức heron 
        //     // tính nửa chu vi
        //     console.log(this.area)
        // } 
    }
}



//  tao lop hinh tron   Circle
class Circle extends Shape {
    constructor(radius, color) {
        super(color); // gọi đến constructor của lớp Shape
        this.radius = radius;
        this.perimeter = Math.PI * 2 * this.radius;
        this.area = Math.PI * this.radius * this.radius
    }
}
let Circle1 = new Circle(3, "blue")
console.log(Circle1);



//  tao lop hinh chu nhat   Rectangle
class Rectangle extends Shape {
    constructor(a, b, color) {
        super(color); // gọi đến constructor của lớp Shape
        this.a = a;
        this.b = b;
        // tính diện tích  va chu vi
        this.perimeter = 2 * (this.a + this.b);
        this.area = this.a * this.b
        // this.getArea=()=>{
        // return this.a*this.b
        // }  
    }
}
let Rectangle1 = new Rectangle(2, 3, "yellow")
console.log(Rectangle1);


//  tao hinh vuong  Square
class Square extends Rectangle {
    constructor(a, color) {
        super(a, a, color); // gọi đến constructor của lớp Shape       
    }
}

let Triangle1 = new Triangle(1, 2, 3, "red");
Triangle1.getArea()
Triangle1.getPerimeter()

let Square1 = new Square(5, "blue")
console.log(Square1);