// let arr = [
//   {
//     Name: "Sony Xperia XZ Premium",
//     Brand: "Sony",
//     Price: 4428,
//     Color: "White",
//     Category: "Phone",
//   },
//   {
//     Name: "Oppo F3 Plus",
//     Brand: "OPPO",
//     Price: 5487,
//     Color: "Black",
//     Category: "Phone",
//   },
//   {
//     Name: "Iphone 13 Pro Max",
//     Brand: "Apple",
//     Price: 21490,
//     Color: "Gray",
//     Category: "Phone",
//   },
//   {
//     Name: "Samsung Galaxy S8",
//     Brand: "Samsung",
//     Price: 8490,
//     Color: "Blue",
//     Category: "Phone",
//   },
//   {
//     Name: "Apple 60W Charger",
//     Brand: "Apple",
//     Price: 1000,
//     Color: "white",
//     Category: "Charger",
//   },
// ];
// console.table(arr);

// //1.1
// for (i = 0; i <= arr.length - 1; i++) {
//   console.log(`#${i} Name : ${arr[i].Name}`);
//   console.log(`Price : ${arr[i].Price}`);
//   console.log("------------------------");
// }
// //1.2
// let c = Number(prompt("1.2. Enter product position:"));
// console.log("1.2------------------------");
// console.log(`Name: ${arr[c].Name}`);
// console.log(`Brand: ${arr[c].Brand}`);
// console.log(`Price: ${arr[c].Price}`);
// console.log(`Color: ${arr[c].Color}`);
// console.log(`Category: ${arr[c].Category}`);
// //1.3
// let category = String(prompt("1.3 Enter your category you want to find"));
// for (let i = 0; i <= arr.length - 1; i = i + 1) {
//   if (arr[i].Category == category) {
//     console.log("1.3----------------------------");
//     console.log(`Name: ${arr[i].Name}`);
//     console.log(`Price: ${arr[i].Price}`);
//   }
// }

//1.4  Thêm nhà cung cấp
// arr[0].Providers = "Phukienso";
// arr[1].Providers = "Tgdd";
// arr[2].Providers = "Tgdd";
// arr[3].Providers = "Tgdd";
// arr[4].Providers = "fpt";
// console.table(arr);
// for (let i = 0; i <= arr.length - 1; i++) {
//   console.log("1.4--------------------------");
//   console.log(`# ${i} Name: ${arr[i].Name}`);
//   console.log(`Price: ${arr[i].Price}`);
//   console.log(`Providers: ${arr[i].Providers}`);
// }

//1.5 Tìm kiếm sản phẩm dựa trên nhà cung cấp mong muốn và in ra sản phẩm dựa trên nhà cung cấp đó
// let find = String(prompt("1.5 Enter your provider you want to find"));
// for (let i = 0; i <= arr.length - 1; i = i + 1) {
//   if (arr[i].Providers == find) {
//     console.log("1.5----------------------------");
//     console.log(`Name: ${arr[i].Name}`);
//     console.log(`Brand: ${arr[i].Brand}`);
//     console.log(`Price: ${arr[i].Price}`);
//     console.log(`Color: ${arr[i].Color}`);
//     console.log(`Category: ${arr[i].Category}`);
//     console.log(`Providers: ${arr[i].Providers}`);
//   }
// }

//Bài 2
let task = [
  ["html", { Status: "false" }],
  ["css", { Status: "false" }],
  ["javascript", { Status: "false" }],
  ["node package manager", { Status: "false" }],
  ["git", { Status: "false" }],
];

console.log("This is your task");
function list() {
  for (let i = 0; i <= task.length - 1; i = i + 1) {
    console.log(
      `${i + 1}. ${task[i][0]}\n ${Object.keys(task[i][1])[0]}: ${
        task[i][1][Object.keys(task[i][1])[0]]
      } `
    );
  }
  console.log("--------------");
}
list();
// console.log(Object.keys(task[i][1][Object.keys(task[i][1])[0]]));

let state = true;
while (state) {
  let menu = prompt("Enter Create/Complete/Update/Delete/Exit C/CF/U/D/E");
  if (menu == "C") {
    let create = prompt("Enter Name's Task");
    let taskcon = [{ Status: "fasle" }];
    taskcon.unshift(create);
    task.push(taskcon);
    list();
  } else if (menu == "U") {
    let update = Number(prompt("Enter index you want to update"));
    let updatetask = prompt("Enter your new task");
    task[update - 1][0] = updatetask;
    list();
  } else if (menu == "CF") {
    let complete = Number(prompt("Enter index task complete"));
    task[complete - 1][1][Object.keys(task[complete - 1][1])[0]] = "complete";
    list();
  } else if (menu == "D") {
    let del = Number(prompt("Enter index task to delete"));
    task.splice(del - 1, 1);
    list();
  } else if (menu == "E") {
    state = false;
  }
}
