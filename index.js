const call = (x) => (x="potato salad");

function receivesAFunction(call) {
    return call();
}

function returnsANamedFunction(){
    return call;
}

function returnsAnAnonymousFunction(){
    return function() {
        ("Pls Work");
      }
}
const x = returnsAnAnonymousFunction();
