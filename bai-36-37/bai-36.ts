
// var hello = "Xin chào 123";
// console.log(hello);
// Xin chào



// // 3.1. Kiểu Number
// var quantity: number = 10;
// quantity = 20;
// // quantity = "Xin chào"; // Sai
// console.log(quantity);




// // 3.2. Kiểu String
// var fullName: string = "Le Van A";
// // fullName = 20; // Lỗi
// console.log(fullName);



// // 3.3. Kiểu Boolean
// var deleted: boolean = false;
// // deleted = "true"; // Lỗi
// console.log(deleted);




// // 4. Kiểu Object
// const infoUser1: {
//   fullName: string,
//   email: string,
//   age: number
// } = {
//   fullName: "Le Van A",
//   email: "levana@gmail.com",
//   age: 18
// };

// const infoUser2: {
//   fullName: string,
//   email: string,
//   age: number
// } = {
//   fullName: "Le Van B",
//   email: "levanb@gmail.com",
//   age: 20
// };

// console.log(infoUser1);
// console.log(infoUser2);




// // 5. Interface
// interface Social {
//   zalo?: string,
//   facebook?: string,
//   tiktok?: string
// }

// interface User {
//   fullName: string,
//   email: string,
//   age?: number, // Optional
//   socials?: Social
// }

// const user1: User = {
//   fullName: "Le Van A",
//   email: "levana@gmail.com",
//   age: 18,
//   socials: {
//     zalo: "#",
//     facebook: "#",
//     tiktok: "#"
//   }
// };

// const user2: User = {
//   fullName: "Le Van B",
//   email: "levanb@gmail.com",
//   socials: {
//     zalo: "#"
//   }
// };

// console.log(user1);
// console.log(user2);




// // 6. Extend interface
// interface Account {
//   fullName: string,
//   email: string,
//   password: string,
//   phone?: string
// }

// interface AccountAdmin extends Account {
//   roleId: string,
//   hotline: string
// }

// interface AccountUser extends Account {
//   score: number,
//   cartId: string
// }

// const accountAdmin1: AccountAdmin = {
//   fullName: "Le Van A",
//   email: "levana@gmail.com",
//   password: "123456",
//   roleId: "dfdsfsdf435345345",
//   hotline: "19001234"
// }

// const accountUser1: AccountUser = {
//   fullName: "Le Van B",
//   email: "levanb@gmail.com",
//   password: "123456",
//   score: 120,
//   cartId: "3452345fgdfgdfgdfg"
// }

// console.log(accountAdmin1);
// console.log(accountUser1);



// 7. Kiểu Array
  // Ví dụ 1: Giá trị trong mảng là number
    // const array: number[] = [];

    // array.push(1);
    // // array.push("2"); // Lỗi
    // array.push(2);
    // array.push(3);

    // console.log(array);


  // Ví dụ 2: Giá trị trong mảng là string
    // const listUser: string[] = [];

    // listUser.push("Le Van A");
    // listUser.push("Le Van B");
    // listUser.push("Le Van C");
    // // listUser.push(2); // Lỗi

    // console.log(listUser);


  // Ví dụ 3: Giá trị trong mảng là string, number
    // const infoUser: (string | number)[] = [];

    // infoUser.push("Le Van A");
    // infoUser.push(18);
    // infoUser.push("levana@gmail.com");
    // // infoUser.push(true); // Lỗi

    // console.log(infoUser);


  // Ví dụ 4: Giá trị trong mảng là object
    // interface User {
    //   fullName: string,
    //   email: string,
    //   age: number
    // }

    // const listUser: User[] = [];

    // const user1: User = {
    //   fullName: "Le Van A",
    //   email: "levana@gmail.com",
    //   age: 18
    // };

    // const user2: User = {
    //   fullName: "Le Van B",
    //   email: "levanb@gmail.com",
    //   age: 20
    // };

    // listUser.push(user1);
    // listUser.push(user2);

    // console.log(listUser);



  // Ví dụ 5: Push object có interface khác interface AccountAdmin
    // interface Account {
    //   fullName: string,
    //   email: string,
    //   password: string,
    //   phone?: string
    // }

    // interface AccountAdmin extends Account {
    //   roleId: string,
    //   hotline: string
    // }

    // interface AccountUser extends Account {
    //   score: number,
    //   cartId: string
    // }

    // const listAccountAdmin: AccountAdmin[] = [];

    // const accountAdmin1: AccountAdmin = {
    //   fullName: "Le Van A",
    //   email: "levana@gmail.com",
    //   password: "123456",
    //   roleId: "dfdsfsdf435345345",
    //   hotline: "19001234"
    // }

    // const accountUser1: AccountUser = {
    //   fullName: "Le Van B",
    //   email: "levanb@gmail.com",
    //   password: "123456",
    //   score: 120,
    //   cartId: "3452345fgdfgdfgdfg"
    // }

    // listAccountAdmin.push(accountAdmin1);
    // listAccountAdmin.push(accountUser1); // Lỗi

    // console.log(listAccountAdmin);


// 8. Kiểu Tuple
  // Ví dụ 1
    // let infoUser: [string, number, string];
    // infoUser = ["Le Van A", 18, "levana@gmail.com"];
    // console.log(infoUser);

  // Ví dụ 2
    // let clock: [number, number, number];
    // clock = [10, 5, 20];
    // const [hour, minute, second] = clock;
    // console.log(`Bây giờ là ${hour} giờ, ${minute} phút, ${second} giây.`);


  // Ví dụ 3
    // let colorRBG: [number, number, number];
    // colorRBG = [123, 0, 0];
    // const [red, blue, green] = colorRBG;

    // console.log(`rgb(${red} ${blue} ${green})`);



// 9. Readonly
  // interface User {
  //   readonly userName: string,
  //   fullName: string,
  //   email: string,
  //   age: number
  // }

  // const user1: User = {
  //   userName: "levana",
  //   fullName: "Le Van A",
  //   email: "levana@gmail.com",
  //   age: 18
  // };
  
  // // user1.userName = "levanb"; // Lỗi
  // user1.email = "levanb@gmail.com";

  // console.log(user1);



// 10. Functions
  // Declaration Function
    // function sum1(a: number, b: number): number {
    //   return a + b;
    // };
    // const result1 = sum1(10, 20);
    // const result2 = sum1(result1, 30);
    // console.log("Kết quả 1: ", result1);
    // console.log("Kết quả 2: ", result2);


  // Expression Function
    // const sum2 = function (a: number, b: number): number {
    //   return a + b;
    // };
    // const result2 = sum2(20, 20);
    // console.log("Kết quả 2: ", result2);

  
  // Arrow Function
    // const sum3 = (a: number, b: number): number => {
    //   return a + b;
    // };
    // const result3 = sum3(30, 20);
    // console.log("Kết quả 3: ", result3);




// 11. Default Parameters
  // const sum1 = (a: number = 0, b: number = 0): number => {
  //   return a + b;
  // };
  // const result3 = sum1(30, 20);
  // console.log("Kết quả 3: ", result3);




// 12. Rest Parameters
  // const sum = (...test: number[]): number => {
  //   const total = test.reduce((sum, item) => sum + item, 0);
  //   return total;
  // };
  // const result = sum(10, 20, 30, 40, 50, 60);
  // console.log("Kết quả: ", result);




// 13. Kiểu Enum
  // // Ví dụ 1
  //   // statusCurrent: 0 --> Initial
  //   // statusCurrent: 1 --> Active
  //   // statusCurrent: 2 --> Inactive

  //   enum Status {
  //     INITIAL, // 0
  //     ACTIVE, // 1,
  //     INACTIVE // 2
  //   }

  //   const statusCurrent: number = 1;

  //   switch (statusCurrent) {
  //     case Status.INITIAL:
  //       console.log("Đang khởi tạo");
  //       break;
  //     case Status.ACTIVE:
  //       console.log("Đang hoạt động");
  //       break;
  //     case Status.INACTIVE:
  //       console.log("Dừng hoạt động");
  //       break;
  //     default:
  //       break;
  //   }



  // // Ví dụ 2
  //   // statusCurrent: "initial" --> Initial
  //   // statusCurrent: "active" --> Active
  //   // statusCurrent: "inactive" --> Inactive

  //   enum Status {
  //     INITIAL = "initial",
  //     ACTIVE = "active",
  //     INACTIVE = "inactive"
  //   }

  //   const statusCurrent: string = "initial";

  //   switch (statusCurrent) {
  //     case Status.INITIAL:
  //       console.log("Đang khởi tạo");
  //       break;
  //     case Status.ACTIVE:
  //       console.log("Đang hoạt động");
  //       break;
  //     case Status.INACTIVE:
  //       console.log("Dừng hoạt động");
  //       break;
  //     default:
  //       break;
  //   }




// 14. Kiểu Any
  // let a: any = 1;

  // a = "1";

  // a = false;

  // a = true;

  // console.log(a);




// 15. Kiểu Unknown
  // // Tương tự kiểu any
  //   let a: unknown = 1;

  //   a = "1";

  //   a = false;

  //   a = true;

  //   console.log(a);



  // Nhưng an toàn hơn kiểu any
    // const getLength = (value: unknown): number => {
    //   if(typeof value == "string") {
    //     return value.length;
    //   } else {
    //     return -1;
    //   }
    // }
    
    // let a: string = "Xin chào!";
    // const lengthA = getLength(a);
    // console.log(lengthA); // Trả ra 9
    
    // let b: number = 42;
    // const lengthB = getLength(b);
    // console.log(lengthB);
    
    // let c: boolean = true;
    // const lengthC = getLength(c);
    // console.log(lengthC);
