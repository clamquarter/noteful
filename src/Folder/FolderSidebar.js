import React from 'react';
import { Link } from 'react-router-dom';
import AddFolder from '../Buttons/AddFolderButton';
import ApiContext from '../ApiContext';
import AddNote from '../Buttons/AddNoteButton';
import PropTypes from 'prop-types';

export default class FolderSideBar extends React.Component {
    static propTypes = {
       match: PropTypes.object.isRequired
    };

    render() {
        return (
            <ApiContext.Consumer>
                {({ folders }) => {
                    const { folderId } = this.props.match.params

                    const folderItems = folders.map((folder, idx) => {
                        return <Link key={idx} to={`/folder/${folder.name}`}>
                            <li
                                key={folder.id}
                                type='radio'
                                id={folder.id}
                                name='folder'
                                className={folder.name === folderId ?
                                    'selected-folder' : ''}>
                                {folder.name}
                            </li>
                        </Link>
                    })

                    return (
                        <>
                            {folderItems}
                            <AddFolder />
                            <AddNote />
                        </>
                    )
                }}
            </ApiContext.Consumer>
        )
    }
}

