import React from 'react';
import ReactDOM from 'react-dom';

class ButtonCounter extends React.Component {
    constructor() {
        super()
        this.state = {val: 0}
        this.update = this.update.bind(this)
    }

    componentWillMount() {
        console.log('componentWillMount')
    }

    update() {
        this.setState({val: this.state.val+1})
    }

    componentDidMount() {
        console.log('componentDidMount')
    }

    render() {
        console.log('render')
        return (
            <button onClick={this.update}>{this.state.val}</button>
        )
    }
    componentWillUnmount() {
        console.log('componentWillUnmount')
    }

}

class Wrapper extends React.Component {
    mount() {
        ReactDOM.render(<ButtonCounter />, document.getElementById('container'))
    }

    unmount() {
        ReactDOM.unmountComponentAtNode(document.getElementById('container'))
    }

    render() {
        return (
            <div>
                <button onClick={this.mount.bind(this)}>Mount</button>
                <button onClick={this.unmount.bind(this)}>Unmount</button>
                <div id="container"></div>
            </div>
        )
    }
}

export default Wrapper;
