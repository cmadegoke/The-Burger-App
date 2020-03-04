const connection = require('../config/connection');

// GET ALL CATS
const getCats = () => {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM cats', (err, catdata) => {
      if (err) {
        console.log(err);
        // THIS WILL GO TO PROMISE'S .catch()
        return reject(err);
      }

      // THIS WILL GO TO PROMISE'S .then()
      resolve(catdata);
    });
  });
};

// create a cat
/* accepts object parameter => {cat_name: "Mr. Mustaphales" } */
const createCat = catObj => {
  return new Promise((resolve, reject) => {
    connection.query('INSERT INTO cats SET ?', catObj, (err, catdata) => {
      if (err) {
        console.log(err);
        // THIS WILL GO TO PROMISE'S .catch()
        return reject(err);
      }
      // THIS WILL GO TO PROMISE'S .then()
      resolve(catdata);
    });
  });
};

// UPDATE A CAT'S ADOPTION STATUS
// catObj => { adopted: true } OR {adopted: false}
const updateCat = (catObj, catId) => {
  return new Promise((resolve, reject) => {
    connection.query('UPDATE cats SET ? WHERE id = ?', [catObj, catId], (err, catdata) => {
      if (err) {
        console.log(err);
        return reject(err);
      } else if (catdata.affectedRows === 0) {
        return resolve({ message: "Couldn't find a cat with that id!", code: 404 });
      }

      resolve({ message: 'Cat updated successfully!', code: 200 });
    });
  });
};

// DELETE A CAT
const deleteCat = catId => {
  return new Promise((resolve, reject) => {
    connection.query('DELETE FROM cats WHERE id = ?', [catId], (err, catdata) => {
      if (err) {
        console.log(err);
        return reject(err);
      } else if (catdata.affectedRows === 0) {
        return resolve({ message: "Couldn't find a cat with that id!", code: 404 });
      }

      resolve({ message: 'Cat deleted successfully!', code: 200 });
    });
  });
};

module.exports = { getCats, createCat, updateCat, deleteCat };