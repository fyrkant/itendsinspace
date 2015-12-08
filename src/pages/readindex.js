import React from 'react';
import {connect} from 'react-redux';

export class ReadIndex extends React.Component {
    render() {
        console.log(this.props.stories);
        return (
            <div>Helo</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ReadIndex);