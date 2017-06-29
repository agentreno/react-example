import React from 'react';
import ReactDOM from 'react-dom';

class Input extends React.Component {
    render() {
        return <div><input ref="input" type="text" onChange={this.props.update} /></div>
    }
}

class UnwrappedInput extends React.Component {
    render() {
        return <input ref="input" type="text" onChange={this.props.update} />
    }
}

class DemoRefs extends React.Component {
    constructor() {
        super()
        this.state = {
            a: '',
            b: '',
            c: ''
        }
        this.update = this.update.bind(this)
    }

    update(e) {
        this.setState({
            a: this.a.refs.input.value, // string ref for node inside a child component
            b: this.refs.b.value, // string ref on a node in this component
            c: ReactDOM.findDOMNode(this.c).value // accessing a child component without refs
        })
    }

    render() {
        return (
            <div>
                <Input 
                    ref={component => this.a = component}
                    update={this.update}
                /> {this.state.a}
                <hr />
                <input
                    ref="b"
                    type="text" 
                    onChange={this.update}
                /> {this.state.b}
                <hr />
                <UnwrappedInput
                    ref={component => this.c = component}
                    update={this.update}
                /> {this.state.c}
            </div>
        )
    }
}

export default DemoRefs;
