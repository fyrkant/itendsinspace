import React from 'react';

class HelloWorld extends React.Component {
    render() {
        return <p>{this.props.message}</p>;
    }
}

HelloWorld.propTypes = {
    message: React.PropTypes.string.isRequired
};

export default HelloWorld;