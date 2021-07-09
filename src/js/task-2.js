// console.log('task-2');
const users = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: true },
  { name: 'Lux', active: false },
];

const toggleUserState = (allUsers, userName) => {
    return new Promise((resolve) => {
    const updatedUsers = allUsers.map((user)=>
    user.name === userName ? { ...user, active: !user.active } : user
  );

  resolve(updatedUsers);
    });

};

const loggerNew = (updatedUsers) => console.table(updatedUsers);
/*
 * Должно работать так
 */
toggleUserState(users, 'Mango').then(loggerNew);
toggleUserState(users, 'Lux').then(loggerNew);


// ----old----

// const toggleUserState = (allUsers, userName, callback) => {
//   const updatedUsers = allUsers.map(user =>
//     user.name === userName ? { ...user, active: !user.active } : user,
//   );

//   callback(updatedUsers);
// };

// const logger = updatedUsers => console.table(updatedUsers);
/*
 * Сейчас работает так
 */
// toggleUserState(users, 'Mango', logger);
// toggleUserState(users, 'Lux', logger);