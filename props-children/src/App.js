import React from 'react'

class App extends React.Component {
    render() {
        return (
            <div>
                <Button>I <Hearts /> React</Button>
            </div>
        )
    }
}

const Hearts = () => <span>&hearts;</span>

const Button = (props) => <button>{props.children}</button>

export default App
