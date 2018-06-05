console.log("app.js is running!");

var app = {
    title: 'Indecision App',
    subtitle: 'Zadania na wczoraj!'
};
var template = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.subtitle}</p>
        <ol>
            <li>pierwsza</li>
            <li>druga</li>
        </ol>
    </div>
);

var user = {
    name: 'Bartek',
    age: 26,
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
        <p>Age: {user.age}</p>
        {getLocation(user.location)}
    </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);