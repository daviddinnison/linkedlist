const LinkedList = require('./LinkedList');
const operations = require('./operations.js');

let list = new LinkedList();





list.insert(0, 'virginia');
list.insert(1, 'maryland');
list.insert(2, 'pennsylvania');
list.insert(3, 'north carolina');
list.insert(4, 'west virginia');
list.insert(5, 'delaware');


operations.isEmpty(list);