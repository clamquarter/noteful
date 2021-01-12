import React from 'react';
import ApiContext from '../ApiContext';
import ValidationError from '../ValidationError';
import PropTypes from 'prop-types';
import config from '../config'


export default class AddFolder extends React.Component {
    static contextType = ApiContext;

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            touched: false
        }
    }

    static propTypes = {
        history: PropTypes.object.isRequired
    };

    handleAddFolder = (e) => {
        e.preventDefault();

        let newFolder = JSON.stringify(this.state);

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: newFolder
        }

        fetch(`${config.API_ENDPOINT}/api/folders`, options)
            .then(resp => {
                if (!resp.ok) {
                    throw new Error('Folder not added - please try again later.')
                } else return resp.json()
            })
            .then(respJson => {
                this.context.handleAddFolder(respJson);
                this.context.updateMessage('Folder added!');
            })
            .then(() => this.props.history.push('/'))
            .catch(error => this.context.updateError(error.message));
    }

    updateFolderInput = (value) => {
        this.setState({
            name: value,
            touched: true
        })
    }

    validateFolderName = () => {
        let name = this.state.name.trim();
        if (name.length === 0) {
            return 'Please enter note name';
        } else if (name.length < 3) {
            return 'Name must be at least 3 characters long';
        } else if (name.length > 15) {
            return 'Please don\'t make the name so long...';
        };
    }

    render() {
        const { name } = this.state;
        const nameError = this.validateFolderName();

        return (

            <form className='folder-form'
                onSubmit={(e) => {
                    this.handleAddFolder(e);
                }}>

                <fieldset>
                    <legend>Folder Details</legend>
                    <label htmlFor='new-folder'>Folder Name:</label>
                    <input type='text' id='new-folder' placeholder='ie Indubitable' defaultValue={name}
                        onChange={(e) => this.updateFolderInput(e.target.value)} required />
                    {this.state.touched && (
                        <ValidationError message={nameError} />
                    )}
                    <button type='submit'
                    disabled={this.validateFolderName()}>Submit</button>
                </fieldset>

            </form>
        )
    }
}

