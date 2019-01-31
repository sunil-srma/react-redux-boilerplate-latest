import React from 'react';
import UserList from '../UserList';
import NavBar from '../component/NavBar';

class Container extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="finOps_ctr">
                <UserList/>
            </div>
        );
    }
}
export default Container;
