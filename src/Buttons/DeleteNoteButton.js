import React from 'react';
import ApiContext from '../ApiContext';
import { withRouter } from 'react-router-dom';

import PropTypes from 'prop-types';
 
class DeleteNoteButton extends React.Component {
    static contextType = ApiContext;

    static defaultProps = {
        id: '37d2ae'
    };

    static propTypes = {
        id: PropTypes.string.isRequired
    };

    deleteNote = (id) => {
        fetch(`http://localhost:9090/notes/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
        })
            .then(resp => {
                if (!resp.ok) {
                    throw new Error('Item not deleted! Try again.')
                } else {
                    this.context.updateMessage('Item deleted!')
                }
            })
            .catch(error => this.context.updateError(error.message));
    }

    render() {
        const { id } = this.props;
        
        return (
            <ApiContext.Consumer>
                {({ handleDelete }) => {
                    return (
                        <button className='delete-note'
                            onClick={() => {
                                if (window.confirm
                                    ('Are you sure you want to delete?')) {
                                    handleDelete(id);
                                    this.deleteNote(id);
                                }
                                this.props.history.goBack()
                            }}
                        >DELETE</button>
                    )
                }}
            </ApiContext.Consumer>
        )
    }
}


export default withRouter(DeleteNoteButton)