import React from 'react';
import { Link } from 'react-router-dom';
import ApiContext from '../ApiContext';
import PropTypes from 'prop-types';

export default class NoteSideBar extends React.Component {
    static propTypes = {
        match: PropTypes.object.isRequired
    };

    render() {
        return (
            <ApiContext.Consumer>
                {({ folders, notes }) => {

                    const note = notes.find(note => {
                        return this.props.match.params.noteId
                            === note.name
                    }) || {content: '', name: 'Name Unknown'}

                    const folder = folders.find(folder => {
                        return folder.id === note.folderId
                    }) || {name : 'Folder Name Unknown'}

                    return (
                        <>
                            <Link to='/'>
                                <li
                                    key='goBack'>GO BACK</li>
                            </Link>
                            <h2>{folder.name}</h2>
                        </>
                    )
                }}
            </ApiContext.Consumer>
        )
    }
}

