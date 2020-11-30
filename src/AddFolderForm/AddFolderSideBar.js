import React from 'react';
import { Link } from 'react-router-dom';

export default class AddFolderSideBar extends React.Component {
    render() {
        return (
            <>
                <Link to='/'>
                    <li
                        key='goBack'>GO BACK</li>
                </Link>
                <h2>Add Folder</h2>
            </>
        )
    }
}
