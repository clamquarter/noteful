import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import DeleteNote from '../Buttons/DeleteNoteButton';
import ApiContext from '../ApiContext';
import PropTypes from 'prop-types';

export default class Folder extends React.Component {
    static propTypes = {
        match: PropTypes.object.isRequired
    };

    render() {
        return (
            <ApiContext.Consumer>
                {({ notes, folders }) => {

                    const folder = folders.find(folder => {
                        return folder.name === this.props.match.params.folderId
                    })

                    let list = notes.filter(item => item.folderId === folder.id)

                    let mainList = list.map(item => {
                        return <li key={item.id}>
                            <Link to={`/note/${item.name}`}>
                                {item.name}
                            </Link>
                            <DeleteNote id={item.id}/>
                            <p>Date modified: <br/>
                            {moment(item.modified).calendar()}
                            </p>
                        </li>
                    })

                    return (
                        <ul>
                            { mainList}
                        </ul>
                    )
                }}
            </ApiContext.Consumer>
        )
    }
}


