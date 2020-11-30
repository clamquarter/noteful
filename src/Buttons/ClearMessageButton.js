import React from 'react';
import StoreContext from '../ApiContext';

export default class ClearMessage extends React.Component {
    render() {
        return (
            <StoreContext.Consumer>
                {({ clearMessage }) => {
                    return (
                        <button className='clear-message'
                            onClick={clearMessage}> Clear </button>
                    )
                }}
            </StoreContext.Consumer>
        )
    }
}

