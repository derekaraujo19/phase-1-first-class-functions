function receivesAFunction (heresAFunction) {
  heresAFunction();
  return console.log('we called the callback function');
}

function returnsANamedFunction () {
  let anotherFunction = function () {
    console.log('this is another function');
  }
  return anotherFunction;
}

function returnsAnAnonymousFunction () {
  return function() {cosole.log('this is an anon func');}
}
