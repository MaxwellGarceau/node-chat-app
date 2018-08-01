const moment = require('moment');

const date = moment();
date.add(1, 'years')
  .subtract(9, 'months');

// console.log(date.format('MMMM Do, YYYY'));

const currentDateTime = moment().format('h:mm a');

console.log(currentDateTime);
