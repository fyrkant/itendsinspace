import React from 'react';
import {connect} from 'react-redux';

class ReadHome extends React.Component {
    render() {
        console.log(this.props.stories);
        return (
            <div></div>
        );
    }
}

let mapStateToProps = (appState) => {
    return {
        stories: appState.stories
    };
};

let mapDispatchToProps = () => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReadHome);