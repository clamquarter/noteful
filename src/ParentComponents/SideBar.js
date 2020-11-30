import React from 'react';
import PropTypes from 'prop-types';

export default class SideBar extends React.Component {
    static propTypes = {
        children : PropTypes.array.isRequired
    };

    render() {
        return (
            <div className='sidebar item'>
                <ul>
                    {this.props.children}
                </ul>
            </div>
        )
    }
}

