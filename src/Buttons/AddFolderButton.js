import React from 'react';
import { Link } from 'react-router-dom';

export default class AddFolderButton extends React.Component {

    render() {
        return (
            <button> <Link to='/AddFolder'>
                <li key='addFolder'>New Folder</li>
            </Link>
            </button>
        )
    }
}
