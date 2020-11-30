import React from 'react';
import { Link } from 'react-router-dom';

export default class AddFolder extends React.Component {

    render() {
        return (
            <Link to='/AddFolder'>
                <li key='addFolder'>New Folder</li>
            </Link>
        )
    }
}
