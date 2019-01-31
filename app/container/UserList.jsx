import React from 'react';
import List from '../component/List'

class UserList extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="finOps_ctr">
                <List data={['Ram, Shyam']}/>
            </div>
        );
    }
}
export default UserList;
