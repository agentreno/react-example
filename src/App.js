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
    topMessage: React.PropTypes.string.isRequired,
    bottomMessage: React.PropTypes.string
}

App.defaultProps = {
    topMessage: 'hello world'
}

export default App;
