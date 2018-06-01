console.log("app.js is running!");

//JSX - JavaScript XML
var templateTwo = (
    <div>
        <h1>Bart</h1> 
        <p>Age: 28</p>
        <p> Location: Cracow </p>
        
    </div>
);

// Create new templateTwo var JSX expression
// div 
// h1 -> Moje imie
// p -> Age: 28
// p -> Location: Cracow
// Render templateTwo insted of template

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);