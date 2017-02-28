//Promesas en react

function addPromise(a, b){
    return new Promise(function (resolve, reject){
       if (typeof a === 'number' && typeof b === 'number') {
           resolve(a + b);
       } else {
           reject('The arguments should be numbers');
       }
    });
}

getAddPromise(2, 4).then(function(result){
        console.log('adding success', result);
    }, function(err){
        console.log('error', err);
    }
});