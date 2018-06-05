console.log("app.js is running!");
//only render subtitle and p tag, if subtitle exist - logical operator
//render new p tag - if options.length > 0 "Here are options" else "No options"
var app = {
    title: 'Indecision App',
    subtitle: 'Zadania na wczoraj!',
    options: []
};
var template = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.subtitle}</p>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are options' : 'No options'}</p>
        <ol>
            <li>pierwsza</li>
            <li>druga</li>
        </ol>
    </div>
);

var user = {
    name: 'Bartek',
    age: 28,
    location: 'Krakow'
};
function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>;
    }
}
var templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) &&  <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);