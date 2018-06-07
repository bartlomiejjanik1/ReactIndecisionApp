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
    render() {
        return (
            <div>
                <button>Co powinienem zrobic?</button>
            </div>
        );
    }
}


class Options extends React.Component {
    render () {
        return (
            <div>
                {this.props.options.length}
                <Option />
            </div>
        );
    }
}

class Option extends React.Component {
    render () {
        return (
            <div>
                Komponent Option jako nested komponent w Optionsssss
            </div>
        );
    }
}

class AddOption extends React.Component {
    render () {
        return (
            <div>
                Komponent o nazwie AddOption
            </div>
        );
    }
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));