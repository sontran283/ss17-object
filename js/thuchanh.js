// bai 1: Xây dựng lớp Date
// bai 1: Xây dựng lớp Date
// Bước 1: Xây dựng lớp MyDate với phương thức khởi tạo có 3 tham số truyền vào
// let MyDate = function (day, month, year) {
//     this.day = day;
//     this.month = month;
//     this.year = year;
//     // Bước 2: Xây dựng phương thức trả về ngày, tháng, năm
//     // get là lấy ra.
//     this.getDay = () => {
//         return this.day
//     }
//     this.getMonth = () => {
//         return this.month
//     }
//     this.getYear = () => {
//         return this.year
//     }
//     // Bước 3: Xây dựng phương thức thiết đặt lại giá trị các thuộc tính day, month, year
//     // setday de sua lai ngay thang nam.
//     this.setDay = (day) => {
//         this.day = day;
//     }
//     this.setMonth = (month) => {
//         this.month = month;
//     }
//     this.setYear = (year) => {
//         this.year = year;
//     }
//     //  Cài đặt thêm phương thức setDate() để thiết đặt lại ngày, tháng, nam.
//     this.setDate = (day, month, year) => {
//         this.day = day;
//         this.month = month;
//         this.year = year;
//     }
//     this.toString = () => {
//         return this.day + "/" + this.month + "/" + this.year;
//     }
// };
// let date = new MyDate(2, 2, 2007);
// console.log(date);
// console.log(date.toString());

// date.setDate(12, 12, 2000);
// console.log(date.toString());



// bai 2:
// Xây dựng lớp Hình Tròn    Circle
// class Circle {
//     constructor(radius, color) {
//         this.radius = radius;
//         this.area = Math.PI * (this.radius * this.radius) //dien tich
//     }
// }
// let Circle1 = new Circle(3, "red");
// console.log(Circle1);



// bai 4:
// MÔ PHỎNG QUÁ TRÌNH MÈO BẮT CHUỘT
// class Mouse {
//     constructor(weight, speed) {
//         this.weight = weight;
//         this.speed = speed;
//         this.alive = true;
//     }
// }
// class Cat {
//     constructor(name, weight, speed) {
//         this.name = name;
//         this.weight = weight;
//         this.speed = speed;
//     }

//     meow() {
//         console.log(`${this.name} meo meo`);
//     }
//     catchMouse(mouse) {
//         if (this.speed > mouse.speed) {
//             console.log(`${this.name} bắt chuột!`);
//             mouse.alive = false;
//         } else {
//             console.log(`${this.name} Không bắt được chuột...`);
//         }
//     }
//     eatMouse(mouse) {
//         if (mouse.alive) {
//             console.log(`${this.name} không thể ăn được chuột...`);
//         } else {
//             console.log(`${this.name} đã ăn được chuoorjt~`);
//             this.weight += mouse.weight;
//         }
//     }
// }
// // Tạo đối tượng mèo
// const cat = new Cat("Tom", 5, 20);
// // Tạo đối tượng chuột
// const mouse = new Mouse(1, 19);
// // Mèo kêu
// cat.meow();
// // Mèo bắt chuột
// cat.catchMouse(mouse);
// // In thông tin khối lượng của mèo sau khi ăn chuột
// console.log(`${cat.name}'s weight: ${cat.weight}`);



// bai 5:
// QUẢN LÝ THÔNG TIN NHÂN VIÊN
// let staff = { //Tạo một đối tượng staff có các thuộc tính id, name, age,salary
//     id: 1,
//     name: "Ronaldo",
//     age: 30,
//     salary: 1000,
// }
// let company = []; //Tạo mảng company rồi sử dụng phương thức push() để thêm staff vào trong mảng
// company.push(staff);
// console.log(company);

// let inputUpdate = Number(prompt("Nhập vào id nhân viên muốn cập nhật"));
// let updateSalary = Number(prompt("Nhập mức lương muốn thay đổi"));

// let findIndex = company.findIndex((e) => inputUpdate == e.id);
// company[findIndex].salary = updateSalary;
// console.log(company);

// let inputDelete = Number(prompt("Nhập vào id nhân viên muốn xóa"));
// findIndex = company.findIndex((e) => inputDelete == e.id);
// company.splice(findIndex, 1);
// console.log(company);

// let state = true;
// while (state) {
//     let input = prompt(
//         "Nhập vàoC/R/U/D/E để tiếp tục chương trình"
//     ).toLocaleLowerCase();

//     if (input == "c") {
//         // Thêm mới nhân viên vào trong mảng trên
//         let newName = prompt("Nhập tên nhân viên muốn thêm");
//         let newAge = Number(prompt("Nhập tuổi nhân viên muốn thêm"));
//         let newSalary = Number(prompt("Nhập mức lương của nhân viên muốn thêm"));

//         let newStaff = {
//             id: Math.floor(Math.random() * 1000),
//             name: newName,
//             age: newAge,
//             salary: newSalary,
//         };
//         company.push(newStaff);
//         console.log(company);
//     } else if (input == "u") {
//         let inputUpdate = Number(prompt("Nhập vào id nhân viên muốn cập nhật"));
//         let updateSalary = Number(prompt("Nhập mức lương muốn thay đổi"));

//         let findIndex = company.findIndex((e) => inputUpdate == e.id);
//         company[findIndex].salary = updateSalary;
//         console.log(company);
//     } else if (input == "d") {
//         let inputDelete = Number(prompt("Nhập vào id nhân viên muốn xóa"));
//         let findIndex = company.findIndex((e) => inputDelete == e.id);
//         company.splice(findIndex, 1);
//         console.log(company);
//     } else if (input = "e") {
//         alert("Cảm ơn bạnđã sử dụng chương trình");
//         state = false;
//     }
// }



// bai 6:
// TẠO TODOLIST TRONG OBJECT
// const todoList = [
//     { id: 1, todo: "Have breakfast", completed: false },
//     { id: 2, todo: "Have breakfast", completed: true },
//     { id: 3, todo: "Have breakfast", completed: false },
// ];
// function addTodo(todo) {
//     let newId = 0;
//     for (let i = 0; i < todoList.length; i++) {
//         newId - todoList.length + 1;
//     }
//     let newTodo = {
//         id: newId,
//         todo: todo,
//         completed: false,
//     };
//     todoList.push(newTodo);
// }
// addTodo("Đi tắm");
// console.log(todoList);

// function updateComplete(id) {
//     let findIndex = todoList.findIndex((e) => {
//         return id === e.id;
//     });
//     todoList[findIndex].completed = true;
// }
// updateComplete(4);
// console.log(todoList);

// function removeTodo(id) {
//     let check = -1;
//     for (let i = 0; i < todoList.length; i++) {
//         if (id == todoList[i].id) {
//             check = i;
//         }
//     }
//     todoList.splice(check, 1);
// }
// removeTodo(2);
// console.log(todoList);



// bai 7:
// LUYỆN TẬP VÀ THAO TÁC ĐỐI TƯỢNG OBJECT
// let players = {
//     name: "Messi",
//     age: 30,
//     nation: "Argentine",
//     club: "PSG",
// };
// players.email = "messi@gmail.com";
// console.log(players);

// players.club = "Barcelone";
// for (const key in players) {
//     console.log(`${key}: ${players[key]}`);
// };

// delete players.age;
// console.log(players);