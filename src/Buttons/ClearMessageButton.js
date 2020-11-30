import React from 'react';
import ApiContext from '../ApiContext';

export default class ClearMessageButton extends React.Component {
    render() {
        return (
            <ApiContext.Consumer>
                {({ clearMessage }) => {
                    return (
                        <button className='clear-message'
                            onClick={clearMessage}> Clear </button>
                    )
                }}
            </ApiContext.Consumer>
        )
    }
}

