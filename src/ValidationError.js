import React from 'react';
import PropTypes from 'prop-types';

export default class ValidationError extends React.Component {
    static propTypes = {
        message: PropTypes.string
    };
    
    render() {
        const message = this.props.message ?
            <div className='validation'>{this.props.message}</div>
            : <></>
        return (
            message
        )
    }
}

