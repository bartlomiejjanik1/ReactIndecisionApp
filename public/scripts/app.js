console.log("app.js is running!");

//JSX - JavaScript XML
//var template = <p>This is JSX z app.js</p>;
var template = React.createElement(
    "p",
    null,
    "This is JSX z app.js"
  );
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);