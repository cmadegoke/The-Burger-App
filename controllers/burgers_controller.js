const connection = require('../config/connection');


const getBurgers = () => {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM burgers', (err, burgerdata) => {
      if (err) {
        console.log(err);
      
        return reject(err);
      }

      
      resolve(burgerdata);
    });
  });
};


const createBurger = burgerObj => {
  return new Promise((resolve, reject) => {
    connection.query('INSERT INTO burgers SET ?', burgerObj, (err, burgerdata) => {
      if (err) {
        console.log(err);
       
        return reject(err);
      }
     
      resolve(burgerdata);
    });
  });
};


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


module.exports = { getBurgers, createBurger, updateBurger};


