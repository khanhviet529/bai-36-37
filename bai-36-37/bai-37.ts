// 1. Kiểu Void
// const hello = (fullName: string): void => {
//   console.log(`Xin chào ${fullName}`);
// }

// hello("Le Van A");




// 2. Generics
  // // Ví dụ 1: return về kiểu number
  // const reverseArray1 = (array: number[]): number[] => {
  //   const newArray = array.reverse();
  //   return newArray;
  // };

  // const test1 = reverseArray1([1, 2, 3]);
  // console.log(test1);

  // // Ví dụ 2: return về kiểu string
  // const reverseArray2 = (array: string[]): string[] => {
  //   const newArray = array.reverse();
  //   return newArray;
  // };

  // const test2 = reverseArray2(["a", "b", "c"]);
  // console.log(test2);

  // // Ví dụ 3: return về kiểu boolean
  // const reverseArray3 = (array: boolean[]): boolean[] => {
  //   const newArray = array.reverse();
  //   return newArray;
  // };

  // const test3 = reverseArray3([true, true, false]);
  // console.log(test3);


  // Ví dụ 4:
  // const reverseArray4 = <T>(array: T[]): T[] => { // T: type
  //   const newArray = array.reverse();
  //   return newArray;
  // };

  // const test4 = reverseArray4([true, true, false]);
  // console.log(test4);

  // const test5 = reverseArray4([1, 2, 3]);
  // console.log(test5);

  // const test6 = reverseArray4(["a", "b", "c"]);
  // console.log(test6);




// 3. Union type
// interface Product {
//   id: string,
//   title: string,
//   price: number,
//   rating: number | string,
//   status: "active" | "inactive" | "initial"
// }

// interface Article {
//   id: string,
//   title: string,
//   rating: number | string,
//   status: "active" | "inactive" | "initial"
// }

// const product1: Product = {
//   id: "1",
//   title: "Sản phẩm 1",
//   price: 120000,
//   rating: 4,
//   status: "active"
// };

// console.log(product1);



// 4. Type alias
// type RatingType = number | string;
// type StatusType = "active" | "inactive" | "initial";

// interface Product {
//   id: string,
//   title: string,
//   price: number,
//   rating: RatingType,
//   status: StatusType
// }

// interface Article {
//   id: string,
//   title: string,
//   rating: RatingType,
//   status: StatusType
// }

// const product1: Product = {
//   id: "1",
//   title: "Sản phẩm 1",
//   price: 120000,
//   rating: 4,
//   status: "active"
// };

// console.log(product1);




// 5. Intersection type (Hợp 2 Interface thành 1)
// interface User {
//   id: string,
//   fullName: string,
//   age?: string
// }

// interface Contact {
//   address?: string,
//   phone: string,
//   email?: string
// }

// interface Social {
//   facebook?: string,
//   zalo?: string,
//   tiktok?: string
// }

// type UserContact = User & Contact;
// type UserSocial = User & Social;
// type UserDetail = User & Contact & Social;

// const user1: UserContact = {
//   id: "1",
//   fullName: "Le Van A",
//   phone: "0123456789",
// };



// 6. Declaration merging (Hợp 2 Interface trùng tên thành 1)
// interface User {
//   id: string,
//   fullName: string,
//   age?: string
// }

// interface User {
//   phone: string,
//   email?: string
// }

// const user1: User = {
//   id: "1",
//   fullName: "Le Van A",
//   phone: "0123456789"
// };




// 7.1. Partial<Type>
// Thay đổi tất cả các thuộc tính trong một đối tượng thành tùy chọn (optional).
// interface User {
//   id: string,
//   fullName: string,
//   phone: string,
//   age?: number
// }

// const user1: User = {
//   id: "1",
//   fullName: "Le Van A",
//   phone: "0123456789"
// };


// const user2: Partial<User> = {
//   id: "1",
//   fullName: "Le Van A",
//   age: 18
// };




// 7.2. Required<Type>
// interface User {
//   id: string,
//   fullName: string,
//   phone: string,
//   age?: number
// }

// const user1: User = {
//   id: "1",
//   fullName: "Le Van A",
//   phone: "0123456789"
// };


// const user2: Required<User> = {
//   id: "1",
//   fullName: "Le Van A",
//   phone: "0987654321",
//   age: 18
// };





// 7.3. Omit<Type, Keys>
// interface Product {
//   id: string,
//   title: string,
//   image?: string,
//   description?: string,
//   price?: number,
//   discount?: number,
// }

// const product1: Product = {
//   id: "1",
//   title: "Sản phẩm 1",
//   image: "#",
//   description: "Mô tả...",
//   price: 120000,
//   discount: 25,
// };
// console.log(product1);


// const product2: Omit<Product, "price" | "discount"> = {
//   id: "1",
//   title: "Sản phẩm 1",
//   image: "#",
//   description: "Mô tả...",
// };
// console.log(product2);




// 7.4. Pick<Type, Keys>
// interface Product {
//   id: string,
//   title: string,
//   image?: string,
//   description?: string,
//   price?: number,
//   discount?: number,
// }

// const product1: Product = {
//   id: "1",
//   title: "Sản phẩm 1",
//   image: "#",
//   description: "Mô tả...",
//   price: 120000,
//   discount: 25,
// };
// console.log(product1);


// const product2: Pick<Product, "price" | "discount"> = {
//   price: 120000,
//   discount: 25,
// };
// console.log(product2);





// 7.5. Readonly<Type>
// interface Product {
//   id: string,
//   title: string,
//   image?: string,
//   description?: string,
//   price?: number,
//   discount?: number,
// }

// const product1: Product = {
//   id: "1",
//   title: "Sản phẩm 1",
//   image: "#",
//   description: "Mô tả...",
//   price: 120000,
//   discount: 25,
// };

// product1.title = "Sản phẩm 1 - 1";

// console.log(product1);


// const product2: Readonly<Product> = {
//   id: "2",
//   title: "Sản phẩm 2",
//   image: "#",
//   description: "Mô tả...",
//   price: 120000,
//   discount: 25,
// };

// // product2.title = "Sản phẩm 2 - 2"; // Lỗi

// console.log(product2);