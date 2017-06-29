import React from 'react';

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
                <h3>{this.state.stateMessage} - {this.state.unchangedMessage}</h3>
                <Widget update={this.update.bind(this)} />
            </div>
        )
    }
}

const Widget = (props) =>
    <input type="text" onChange={props.update} />

export default App;
