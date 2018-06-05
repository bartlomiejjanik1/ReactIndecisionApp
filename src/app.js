console.log("app.js is running!");

const app = {
    title: 'Indecision App',
    subtitle: 'Zadania na wczoraj!',
    options: ['One', 'Two']
};

const onFormSubmit = (e) => {
    e.preventDefault();
};
const template = (
    <div>
        <h1>{app.title}</h1>
        
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are options' : 'No options'}</p>
        <ol>
            <li>pierwsza</li>
            <li>druga</li>
        </ol>
        <form onSubmit={onFormSubmit}>
             <input type="text" name="option" />
             <button>Add Option</button>
        </form>
    </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);