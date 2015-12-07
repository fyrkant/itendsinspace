import React from 'react';

class Wrapper extends React.Component {
    render() {
        console.log('hello');
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

export default Wrapper;
