import React from 'react';
import ReactDOM from 'react-dom';

class ButtonStepCounter extends React.Component {
    constructor() {
        super()
        this.state = {increasing: false}
    }

    componentWillReceiveProps(nextProps) {
        this.setState({increasing: nextProps.val > this.props.val})
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.val % 5 === 0
    }

    update() {
        ReactDOM.render(
            <ButtonStepCounter val={this.props.val+1} />,
            document.getElementById('root')
        )
    }

    render() {
        console.log('Increasing: ', this.state.increasing)
        return (
            <button onClick={this.update.bind(this)}>
                {this.props.val}
            </button>
        )
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(`prevVal: ${prevProps.val}`)
    }
}

ButtonStepCounter.defaultProps = {
    val: 0
}

export default ButtonStepCounter;
