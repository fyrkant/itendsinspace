import React from 'react';
import {Link} from 'react-router';


export class Wrapper extends React.Component {
    render() {
        console.log('hello');
        return (
            <div>
                <Link to={"read"}>Read</Link>
                {this.props.children}
            </div>
        );
    }
}
