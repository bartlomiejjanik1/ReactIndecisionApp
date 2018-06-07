class IndecisionApp extends React.Component {
    render() {
        const title = 'IndecisionTytul z IA';
        const subtitle = 'Jedziemy!';
        const options = ['rzecz pierwsza', 'rzecz 2', 'rzecz 3'];
        return (
            <div>
                <Header title={title} subtitle={subtitle}/>    
                <Action />
                <Options options={options} />
                <AddOption /> 
            </div>
        );
    }
}

class Header extends React.Component {
    render () {
        
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    handlePick(){
        alert('HandlePicked odpalono guzik');
    }
    render() {
        return (
            <div>
                <button onClick={this.handlePick}>Co powinienem zrobic?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    handleRemoveAll() {
        alert('usune wszystko!');
    }
    render () {
        return (
            <div>
                <button onClick={this.handleRemoveAll}>Usun wszystko!</button>
                {
                    this.props.options.map((option) => <Option key={option} optionText={option} />)
                }
            </div>
        );
    }
}

class Option extends React.Component {
    render () {
        return (
            <div>
                Option: {this.props.optionText}
            </div>
        );
    }
}

class AddOption extends React.Component {
    handleAddOption(e){
        e.preventDefault();

        const option = e.target.elements.option.value.trim();

        if (option) {
            alert(option);
        }
    }
    render () {
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                <input type="text" name="option" />
                <button>Dodaj zadanie</button>
                </form>
            </div>
        );
    }
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));