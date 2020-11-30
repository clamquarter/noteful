import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import AddNote from '../Buttons/AddNoteButton';
import DeleteNote from '../Buttons/DeleteNoteButton';
import ApiContext from '../ApiContext';

export default class Main extends React.Component {

    render() {
        return (
            <ApiContext.Consumer>
                {({ notes }) => {

                    let mainList = notes.map(item => {
                        return (
                            <li key={item.id}>
                                <Link to={`/note/${item.name}`}>
                                    {item.name}
                                </Link>
                                <DeleteNote
                                    id={item.id} />
                                <p>Date modified: <br />
                                    {moment(item.modified).calendar()}
                                </p>
                            </li>
                        )
                    })
                    return (
                        <ul>
                            { mainList}
                            <AddNote />
                        </ul>
                    )
                }}
            </ApiContext.Consumer>
        )
    }
}
