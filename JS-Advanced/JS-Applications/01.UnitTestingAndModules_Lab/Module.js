//Create a module
//IIFE module
(function (scope)  {
    let message = 'Hello from console';

    function printMessage(additionalMessage) {
        console.log(message, additionalMessage);
    }
    scope.printMessage = printMessage();
})(window);

let logger = (function ()  {
    let message = 'Hello from console';

    function printMessage(additionalMessage) {
        console.log(message, additionalMessage);
    }
    return printMessage;
})();

//NODE module - exports/require
//module script
function printMessage(additionalMessage) {
    console.log(additionalMessage);
}
module.exports = printMessage;
//app script
const print = require('./demo');
console.log(print('success'));

//ES2015 module
//always imports an object - browser
//HTML
// <script> type = "module" src = "./directoryOfScript.js"</script>
// <script type = "module">
//     import printNew from './fileName.js';

//     printNew('execute');
//     console.log(message);
// </script>
//JS
function printNew(additionalMessage) {
    console.log(additionalMessage);
}
export default {
    printNew,
    name: 'Pesho',
}