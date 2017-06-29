import React from 'react';

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

export default DemoEvents;
