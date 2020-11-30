import React from 'react';
import { Link } from 'react-router-dom';
import AddFolderButton from '../Buttons/AddFolderButton';
import ApiContext from '../ApiContext';
import AddNoteButton from '../Buttons/AddNoteButton';

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
                            <AddFolderButton />
                            <AddNoteButton />
                        </>
                    )
                }}
            </ApiContext.Consumer>
        )
    }
}

