const rawUsers = [
{ id: 1, name: "Rahul", password: "fb_password", role: "admin" },
{ id: 2, name: "Sanya", password: "123_password", role: "user" },
{ id: 3, name: "Amit", password: "secret_password", role: "user" }
];
const users=rawUsers.map(({password,...rest})=>rest);
console.log(users);
const final_result = users.filter(user => user.role === "admin");
console.log(final_result);