/*jshint esversion: 6 */ 
import React, { Component } from 'react';
import Header from '../components/Header';
import { Helmet } from 'react-helmet';
import {Route, Link} from 'react-router-dom';
const headerStyle = {
    textDecoration: "underline"
};

function JsonUser(props) {
    return (
        <div>
            <h1 style={headerStyle}>{props.users[props.match.params.id].name}</h1>
            <p><strong>Username: </strong>{props.users[props.match.params.id].username}</p>
            <p><strong>City: </strong>{props.users[props.match.params.id].address.city}</p>
            <p><strong>Email: </strong>{props.users[props.match.params.id].email}</p>
            <p><strong>Phone: </strong>{props.users[props.match.params.id].phone}</p>
            <p><strong>Website: </strong>{props.users[props.match.params.id].website}</p>
            <p><strong>Company: </strong>{props.users[props.match.params.id].company.name}</p>
        </div>
    )
}

class Users extends Component { 
    constructor(props){
        super(props);
        this.state = {
          isLoading: true,
          data: [],
        }
      }
    
    async componentDidMount(){
        let resp = await fetch('https://jsonplaceholder.typicode.com/users');
        let json = await resp.json();

        this.setState({
          isLoading: false,
          data: json
        });
      }
      renderUser = (props) => {
        console.log(this.state);
        return <JsonUser users={this.state.data} {...props}></JsonUser>
      }

    render () {
        return (
            <div id='userInfo'>
                <Helmet>
                    <title>Rory | Users</title>
                </Helmet>
                <Header/> 
                <div>
                    {
                    this.state.data.map((dynamicData,id) =>
                    <div key={id}>
                        <Link to={`/users/${id}`}>{dynamicData.name}</Link>
                    </div>
                    )}
                </div>

                <hr/>

                {this.state.isLoading? null : <Route path={`/users/:id`} component={this.renderUser} />}

            </div>
        )
    }
}

export default Users;
