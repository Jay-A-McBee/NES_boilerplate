'use strict';
const fs = require('fs');
const path = require('path');


const readFile = () => {
    return new Promise((resolve,reject) => {
        const [fields, ...rest] = fs.readFileSync(path.resolve(__dirname, '../data/user.csv')).toString().split('\n');
        const queue = [...rest];
        const fieldArr = fields.split(',');
        const field = 0;
        const dataToInsert = [];
        
        while(queue.length){
            const entry = queue.shift().split(',');
            const currEntry = {};
            for(let i = 0; i<fieldArr.length; i++){
                currEntry[fieldArr[i]] = entry[i];
            }
            console.log(currEntry)
            dataToInsert.push(currEntry);
        }
        return resolve(dataToInsert);
    })
}

module.exports = {
  up: (queryInterface, Sequelize) => {
        // return queryInterface.bulkInsert('Users', [{
        //     first: "Austin",
        //     last: "McBee",
        //     username: "jmcbee"
        // }], {});
      return readFile().then(data => {
          console.log(data)
          return queryInterface.bulkInsert('Users', data, {});
      }).catch(e => console.error(e));

  },

  down: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkDelete('User', null, {});
  }
};
