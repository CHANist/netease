import React from 'react';

class InputNumber extends React.Component {
    render() {
        return (
            <input type="text" value={this.props.value} defaultValue={this.props.defaultValue} onChange={this.props.onChange} />
        )
    }
}

export default InputNumber;