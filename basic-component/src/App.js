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
                <h1>{this.props.topMessage}</h1>
                <h2>{this.props.bottomMessage}</h2>
                <h3>{this.state.stateMessage} - {this.state.unchangedMessage}</h3>
                <input type="text" onChange={this.update.bind(this)} />
            </div>
        )
    }
}

export default App;
