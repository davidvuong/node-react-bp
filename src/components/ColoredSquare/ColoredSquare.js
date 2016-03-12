import React, { PropTypes } from 'react';

const propTypes = {
    onRetrieveColor: PropTypes.func.isRequired,
    color: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired
};

class ColoredSquare extends React.Component {
    render() {
        const styles = { backgroundColor: this.props.color, width: 300, height: 300 };
        return (
            <div className='colored-square' style={styles}>
                {this.props.status}
                <button onClick={this.props.onRetrieveColor}>get color</button>
            </div>
        );
    }
}
ColoredSquare.propTypes = propTypes;

export default ColoredSquare;
