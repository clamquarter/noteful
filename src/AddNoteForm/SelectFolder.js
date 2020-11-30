import React from 'react';
import ApiContext from '../ApiContext';
import PropTypes from 'prop-types';

export default class SelectFolder extends React.Component {
    static contextType = ApiContext;

    static propTypes = {
        handleChange: PropTypes.func.isRequired
    };

    render() {
        const {handleChange} = this.props;

        const select = this.context.folders.map((folder, idx) => {
            return (
                <option key={idx} value={folder.id}>
                    {folder.name}
                </option>
            )
        })
        
        return (
            <select onChange={(e) => handleChange('folderId', e.target.value)} required>
                {select}
            </select>
        )
    }
}