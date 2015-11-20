import React from 'react';

class HelloWorld extends React.Component {
    constructor(props) {
        super(props);        
    }

    render() {
        return (
            <div>{this.props.text}</div>
        );
    }
}

HelloWorld.propTypes = {text: React.propTypes.string };

export default HelloWorld;
