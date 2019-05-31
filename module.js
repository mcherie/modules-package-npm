let list = [  ]


function sortedList() {
  list.sort(function(a, b) {
    return a - b;
  })
};


module.exports = {



  addToList: function(num) {
  list.push(num);
  sortedList()
  },

  sortedList: function () {
    return list;
  }



}

