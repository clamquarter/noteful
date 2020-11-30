import React from 'react';
import moment from 'moment';
import './Note.css'
import ApiContext from '../ApiContext';
import DeleteNote from '../Buttons/DeleteNoteButton';
import PropTypes from 'prop-types';

export default class Note extends React.Component {
    static propTypes = {
        match: PropTypes.object.isRequired
    };
    

    render() {
        return (
            <ApiContext.Consumer>
                {({ notes }) => {

                    const note = notes.find(note => {
                        return this.props.match.params.noteId
                            === note.name
                    }) || { content: 'loading' }


                    return (
                        <div className='content'>
                            <li className='note-view' key={note.id}>
                                <span className='note-name'>{note.name}</span>
                                <DeleteNote
                                    id={note.id} />
                                <p>Date modified: <br />
                                    {moment(note.modified).calendar()}
                                </p>
                            </li>
                            <p>{note.content}</p>
                        </div>
                    )
                }}
            </ApiContext.Consumer>
        )
    }
}

