import React from 'react';
import PropTypes from 'prop-types';

export default class Main extends React.Component {
    static propTypes = {
        children : PropTypes.array.isRequired
    };

    render() {
        return (
            <div className='main-seg itemdouble'>
                {this.props.children}
            </div>
        )
    }
}

