import React from 'react';

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.topMessage}</h1>
                <h2>{this.props.bottomMessage}</h2>
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

export default App;
