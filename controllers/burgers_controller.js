const connection = require('../config/connection');

// GET ALL CATS
const getBurgers = () => {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM burgers', (err, burgerdata) => {
      if (err) {
        console.log(err);
        // THIS WILL GO TO PROMISE'S .catch()
        return reject(err);
      }

      // THIS WILL GO TO PROMISE'S .then()
      resolve(burgerdata);
    });
  });
};

// create a cat
/* accepts object parameter => {cat_name: "Mr. Mustaphales" } */
const createBurger = burgerObj => {
  return new Promise((resolve, reject) => {
    connection.query('INSERT INTO burgers SET ?', burgerObj, (err, burgerdata) => {
      if (err) {
        console.log(err);
        // THIS WILL GO TO PROMISE'S .catch()
        return reject(err);
      }
      // THIS WILL GO TO PROMISE'S .then()
      resolve(burgerdata);
    });
  });
};

// UPDATE A CAT'S ADOPTION STATUS
// catObj => { adopted: true } OR {adopted: false}
const updateBurger = (burgerObj, burgerId) => {
  return new Promise((resolve, reject) => {
    connection.query('UPDATE burgers SET ? WHERE id = ?', [burgerObj, burgerId], (err, burgerdata) => {
      if (err) {
        console.log(err);
        return reject(err);
      } else if (burgerdata.affectedRows === 0) {
        return resolve({ message: "Couldn't find a burger with that id!", code: 404 });
      }

      resolve({ message: 'burger updated successfully!', code: 200 });
    });
  });
};

// DELETE A CAT
// const deleteCat = catId => {
//   return new Promise((resolve, reject) => {
//     connection.query('DELETE FROM cats WHERE id = ?', [catId], (err, catdata) => {
//       if (err) {
//         console.log(err);
//         return reject(err);
//       } else if (catdata.affectedRows === 0) {
//         return resolve({ message: "Couldn't find a cat with that id!", code: 404 });
//       }

//       resolve({ message: 'Cat deleted successfully!', code: 200 });
//     });
//   });
// };

module.exports = { getBurgers, createBurger, updateBurger};