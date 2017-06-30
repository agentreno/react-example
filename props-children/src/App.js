import React from 'react'

class App extends React.Component {
    render() {
        return (
            <div>
                <Button>I <Hearts /> React</Button>
                <Parent>
                    <Hearts className="childA" />
                    <Hearts className="childB" />
                </Parent>
            </div>
        )
    }
}

const Hearts = () => <span>&hearts;</span>

const Button = (props) => <button>{props.children}</button>

class Parent extends React.Component {
    render() {
        // Children starts as a React object
        console.log(this.props.children)
       
        // React.Children defines a forEach (first arg is the children prop)
        let items = React.Children.forEach(this.props.children,
            child => console.log(child.props.className)
        )

        // And a toArray for when the children just need storing
        items = React.Children.toArray(this.props.children)
        console.log(items)

        return null
    }
}

export default App
