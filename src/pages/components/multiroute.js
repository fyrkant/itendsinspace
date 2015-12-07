import {Component} from 'react';

class MultiRoute extends Component {
    render() {
        return (<div>{this.props.children}</div>);
    }
}

export default MultiRoute;