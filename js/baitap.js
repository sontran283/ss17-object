// bai tap 8:
// Xây dựng lớp mô tả hình chữ nhật   Rectangle
// class Rectangle {
//     constructor(a, b) {
//         this.a = a;
//         this.b = b;
//         this.perimeter = 2 * (this.a + this.b);
//         this.area = this.a * this.b
//     }
// }
// let Rectangle1 = new Rectangle(2, 3)
// console.log(Rectangle1);



// bai tap 9:
// Xây dựng lớp mô tả Temperature
// F = C * 1.8 + 32
// K = C + 273.15
// class Temperature {
//     constructor(C) {
//         this.C = C;
//         this.A = () => { return this.C * 1.8 + 32 };
//         this.B = () => { return this.C + 273.15 };
//     }
// }
// let Temperature1 = new Temperature(20);
// console.log("độ c là " + Temperature1.A());
// console.log("độ f là " + Temperature1.B());



// bai tap 10: Xây dựng lớp mô tả điện thoại.
// bai tap 10: Xây dựng lớp mô tả điện thoại.
// Viết một lớp các đối tượng điện thoại lấy tên là Mobile, mỗi một chiếc mobile phone khi được tạo ra sẽ mang những đặc điểm sau:
// Có một thông số về trạng thái pin tính bằng đơn vị số nguyên (tối đa 100 đv).
// Có một vùng nhớ dùng để lưu tin nhắn đang soạn thảo.
// Có một vùng nhớ dùng để lưu tin nhắn trong hộp thư đến.
// Có một vùng nhớ dùng để lưu tin nhắn đã gửi.
// Có chức năng kiểm tra trạng thái điện thoại bật hay tắt.
// Có chức năng bật và tắt điện thoại.
// Có chức năng xạc pin điện thoại.
// Có chức năng soạn tin nhắn.
// Có chức năng nhận tin nhắn từ một chiếc mobile khác.
// Có chức năng gửi tin nhắn tới một chiếc mobile khác.
// Có chức năng xem tin trong hộp thư đến.
// Có chức năng xem tin đã gửi.
// Sau mỗi lần sử dụng một chức năng, năng lượng pin sẽ giảm đi một đơn vị.
// Các chức năng không thể hoạt động nếu điện thoại chưa bật.
// Khởi tạo các đối tượng điện thoại và thực hiện kịch bản sau:
// Có một chiếc điện thoại nokia và một chiếc iphone
// Chiếc điện thoại nokia soạn tin nhắn với nội dung bất kỳ và gửi cho chiếc iphone Chiếc iphone kiểm tra inbox và hiển thị tin đó.

class Mobile {
    // Có một thông số về trạng thái pin tính bằng đơn vị số nguyên (tối đa 100 đv).
    pin;
    // Có một vùng nhớ dùng để lưu tin nhắn đang soạn thảo.
    tinnhandangsoan = "";
    // Có một vùng nhớ dùng để lưu tin nhắn trong hộp thư đến.
    tinnhantronghopthuden = [];
    // Có một vùng nhớ dùng để lưu tin nhắn đã gửi.
    tinnhandagui = [];
    trangthai = true;

    constructor(pin) {
        if (this.pin <= 100 && this.pin > 0) {  // (tối đa 100 đv).
            pin;
            this.pin = pin;
        } else {
            this.pin = 80;
        }
        // Có chức năng kiểm tra trạng thái điện thoại bật hay tắt.
        this.kiemTraBatTat = () => {
            if (!this.trangthai) {
                return;
            }
            this.pin--;
            return this.trangthai;
        }

        // Có chức năng bật và tắt điện thoại.
        this.batTatDienThoai = (value) => {
            if (!this.trangthai) {
                return;
            }
            this.trangthai = value;
            this.pin--;
        }

        // Có chức năng xạc pin điện thoại.
        this.xacpindienthoai = () => {
            if (this.pin == 100) {
                return this.pin;
            }
            this.pin++;
        }

        // Có chức năng soạn tin nhắn.
        this.soantinnhan = (value) => {
            if (!this.trangthai) {
                return;
            }
            this.tinnhandangsoan = value;
            this.pin--;
        }

        // Có chức năng nhận tin nhắn từ một chiếc mobile khác.
        this.nhantinnhan = (value) => {
            if (!this.trangthai) {
                return;
            }
            this.tinnhantronghopthuden.push(value);
            this.pin--;
        }

        // Có chức năng gửi tin nhắn tới một chiếc mobile khác.
        this.guitinnhan = (value, phone) => {
            if (!this.trangthai) {
                return;
            }
            this.tinnhandagui.push(value);
            phone.tinnhantronghopthuden.push(value);
            this.pin--;
        }

        // Có chức năng xem tin trong hộp thư đến.
        this.xemtin = () => {
            if (!this.trangthai) {
                return;
            }
            this.pin--;
            return this.tinnhantronghopthuden;

        }

        // Có chức năng xem tin đã gửi.
        this.xemtindagui = () => {
            if (!this.trangthai) {
                return;
            }
            this.pin--;
            return this.tinnhantronghopthuden;
        }
    }
}
// Sau mỗi lần sử dụng một chức năng, năng lượng pin sẽ giảm đi một đơn vị. : pin--
// Các chức năng không thể hoạt động nếu điện thoại chưa bật. : check trang thai = true =>>>> if...return
// Khởi tạo các đối tượng điện thoại và thực hiện kịch bản sau:
// Có một chiếc điện thoại nokia và một chiếc iphone
let nokia = new Mobile(45)
let iphone = new Mobile(45)

// Chiếc điện thoại nokia soạn tin nhắn với nội dung bất kỳ   
nokia.soantinnhan("nhanh con ve");

// và gửi cho chiếc iphone
nokia.guitinnhan(nokia.tinnhandangsoan, iphone);

// Chiếc iphone kiểm tra inbox
let ketqua = iphone.xemtindagui(); //ketqua =  []

// và hiển thị tin đó.
console.log(ketqua);
