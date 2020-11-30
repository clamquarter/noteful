import React from 'react';
import { Link } from 'react-router-dom';
import AddFolder from '../Buttons/AddFolderButton';
import ApiContext from '../ApiContext';
import AddNote from '../Buttons/AddNoteButton';

export default class MainSideBar extends React.Component {

    render() {
        return (
            <ApiContext.Consumer>
                {({ folders }) => {

                    const folderItems = folders.map((folder, idx) => {
                        return (
                            <Link key={idx} to={`/folder/${folder.name}`}>
                                <li
                                    key={folder.id}
                                    id={folder.id}
                                    name='folder'>
                                    {folder.name}
                                </li>
                            </Link>
                        )
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

