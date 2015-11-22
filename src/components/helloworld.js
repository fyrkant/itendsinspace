import React from 'react';

class HelloWorld extends React.Component {
    render() {
        return <p>{this.props.text}</p>;
    }
}

HelloWorld.propTypes = {text: React.propTypes.string.required};

export default HelloWorld;
