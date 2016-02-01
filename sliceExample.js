var my_object = {
  '0': 'zero',
  '1': 'one',
  '2': 'two',
  '3': 'three',
  '4': 'four',
  length: 5
};

var sliced = Array.prototype.slice.call(my_object, 4);
console.log(sliced);

var thisslice = console.log.apply(this, [].slice.call(my_object, 1));