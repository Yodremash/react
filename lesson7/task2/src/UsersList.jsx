import React from 'react';
import User from './User';

class UserList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            sorting: null,
        }
    }

    toggleSorting = () => {
        const newSorting = this.state.sorting === "asc"
          ? "desc"
          : "asc"
        this.setState({
          sorting: newSorting
        });
    }

    render() {
      let newUserList;
      if(this.state.sorting){
        newUserList = this.props.users.slice().sort((a,b)=>
        this.state.sorting === 'asc' ? a.age - b.age : b.age - a.age)
      } else {
        newUserList = this.props.users
      }
      
        return(
            <div>
                <button className="btn" onClick={this.toggleSorting}>{this.state.sorting || '-'}</button>
                    <ul className="users">
                        {newUserList.map(user => (<User key={user.id} {...user} />))}
                    </ul>
            </div>
        );
    }
}

export default UserList;                                                          