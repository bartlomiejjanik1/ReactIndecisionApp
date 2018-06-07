console.log('Aplikacja działa!');

const app = {
  title: 'ToDoApp - to learn React',
  subtitle: 'Aplikacja sluzaca do nauki Reacta w ramach projektu SPA',
  options: []
};

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    render();
  }
};

const onRemoveAll = () => {
  app.options = [];
  render();
};

const appRoot = document.getElementById('app');

const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Twoje zadania to' : 'Nie ma zadan'}</p>
      <p>{app.options.length}</p>
      <button onClick={onRemoveAll}>Usun wszystkie zadania</button>
        {
        [<p key="1">a</p>,<p key="2">b</p>,<p key="3">c</p>]
        }

      <ol>
        <li>Zadanie 1</li>
        <li>Zadanie 2</li>
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Dodaj zadanie</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

render();
