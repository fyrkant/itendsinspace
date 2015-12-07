import React from 'react';
import {connect} from 'react-redux';

class ReadHome extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div></div>
        );
    }
}

const mapStateToProps = (appState) => {
    return {
        stories: appState.done
    };
};

const mapDispatchToProps = () => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReadHome);