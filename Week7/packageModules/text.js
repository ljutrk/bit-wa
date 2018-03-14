const figlet = require('figlet');
const text = figlet.textSync('FrontendBootcamp', {
    font: 'Ghost',
    horizontalLayout: 'default',
    verticalLayout: 'default'
});
module.exports = {
    text
}
