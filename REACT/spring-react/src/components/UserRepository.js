import React, {useEffect, useState} from 'react'
import axios from 'axios' 

export const UserRepository= ({user}) => {
    const [users, setUsers] = useState([]);
    
    
    React.useEffect( () => {
        const fetchData = async () => {
            const response = await axios.get('http://localhost:8080/api/v1/');
            setUsers(response.data);
        }
        fetchData();
    }, []);

    

    return(
        <div>
            {users.length > 0 && users.map(user =>
                <div key={user.id} className="father">
                    <div className='child'>ID: {user.id}</div>
                    <div className='child'>Name: {user.name}</div>
                    <div className='child'>LastName: {user.lastname}</div>
                </div>
            )}
        </div>
    );
}

export class Post extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        lastname: '',
      };

      this.handleChangeName = this.handleChangeName.bind(this);
      this.handleChangeLastName = this.handleChangeLastName.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChangeName(event) {
        this.setState({name : event.target.value});
    }

    handleChangeLastName(event) {
        this.setState({lastname : event.target.value});
    }

    handleSubmit(event) {
        alert('E\' stato inserito: ' + this.state.name + ' ' + this.state.lastname);
        event.preventDefault();

        const user = {
            name: this.state.name,
            lastname: this.state.lastname
        };

        console.log(user);

        axios.post(`http://localhost:8080/api/v1/user`, { name: user.name, lastname: user.lastname })
        .then(res => {
            console.log(res);
            console.log(res.data);
        })
    }


    render() {
      return (
        <form  className='post-form' onSubmit={this.handleSubmit}>
          <label className='row'>
            Name
            <input
              className='row-input'
              name="name"
              type="text"
              onChange={this.handleChangeName}
            />
          </label>
          <br />
          <label className='row'>
          LastName
            
            <input
              className='row-input'
              name="lastname"
              type="text"
              onChange={this.handleChangeLastName}
            />
          </label>
          <input className='post-button' type="submit" value="Submit" />
        </form>
      );
    }
  }