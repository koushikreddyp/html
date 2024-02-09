/*const delayedFunction = () => {
    console.log('Delayed function executed! ');
};

setTimeout(delayedFunction,2000);

const repeatedFunction = () => {
    console.log('Repeated function executed! ');
};

const intervalId = setInterval(repeatedFunction,1000);

setTimeout(() => {
    clearInterval(intervalId);
    console.log('Interval stopped');
}, 5000);
*/

function parentFunction (name, callback) {
    setTimeout(callback,1000);
    console.log("Hey "+name);
}

parentFunction("Random string", function()
{
    console.log("Hey I am a callback Function");
});

