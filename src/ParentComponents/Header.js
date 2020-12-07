import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Header.css'


 class Header extends React.Component {
    static propTypes = {
        history: PropTypes.object.isRequired
    };

    render() {
        return (
            <header>
                <h1 onClick={() => this.props.history.push('/')}>
                    NOTEFUL 
                    </h1>
            </header>
        )
    }
}

export default withRouter(Header)