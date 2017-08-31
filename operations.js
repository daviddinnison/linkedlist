module.exports = {
    //get rid of list.length
    display: function(list) {
        for(let i = 0; i < list.length; i++) {
            // console.log(this._find(i).value);
            console.log('test');
        }
    },

    size: function(list) {
        console.log('test');
    },

    isEmpty: function(list) {
        if (list.head === null) {
            console.log('The linked list is empty');
        } else {
            console.log('The linked list is not empty');
        }
    },

    findPrevious: function(list, index) {
        console.log('list head', list.head)
        console.log('index', index)
        // console.log('list head value', list.head.value)
        if (list.head === null) {
            console.log('The list is empty');
        } else if (index - 1 < 0) {
            console.log('No previous list items');
        } else {
            console.log('something else');
        }
    },
    
    findLast: function(list) {
        console.log('test');
    }
}