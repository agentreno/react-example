import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            stateMessage: 'default state',
            unchangedMessage: 'unchanged'
        }
    }

    update(e) {
        this.setState({
            stateMessage: e.target.value
        })
    }

    render() {
        return (
            <div>
                <h1>{this.props.topMessage}</h1>
                <h2>{this.props.bottomMessage}</h2>
                <h3>{this.state.stateMessage} - {this.state.unchangedMessage}</h3>
                <Widget update={this.update.bind(this)} />
                <Button>I <Hearts /> React</Button>
                <DemoEvents />
                <DemoRefs />
            </div>
        )
    }
}

const Widget = (props) =>
    <input type="text" onChange={props.update} />

const Hearts = () => <span>&hearts;</span>

const Button = (props) => <button>{props.children}</button>

class DemoEvents extends React.Component {
    constructor() {
        super()
        this.state = {
            eventType: 'none'
        }
        this.update = this.update.bind(this)
    }

    update(e) {
        this.setState({ eventType: e.type })
    }

    render() {
        return (
            <div>
                <textarea cols="30" rows="30"
                    onKeyPress={this.update}
                    onCut={this.update}
                    onCopy={this.update}
                    onPaste={this.update}
                    onFocus={this.update}
                    onBlur={this.update}
                    onDoubleClick={this.update}
                    onTouchStart={this.update}
                    onTouchMove={this.update}
                    onTouchEnd={this.update}
                />
                <p>{this.state.eventType}</p>
            </div>
        )
    }
}

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


App.propTypes = {
    //topMessage: React.PropTypes.string.isRequired,
    topMessage(props, propName, component) {
        if (!(propName in props)) {
            return new Error(`missing ${propName} prop`)
        }
        if (props[propName].length < 6) {
            return new Error(`${propName} is too short`)
        }
    },
    bottomMessage: React.PropTypes.string
}

App.defaultProps = {
    topMessage: 'hello world'
}

export default App
