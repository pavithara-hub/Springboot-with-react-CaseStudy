import React from 'react';
import UserService from '../services/UserService';

class UserComponent extends React.Component{
    
    constructor(props){
        super(props)
        this.state={
            users:[]
        }
    }

    componentDidMount(){
        UserService.getUsers().then((response) => {
            this.setState({users: response.data})
        });
    }
    render(){
        return(
            <div>
                <h1 className="text-center">Users Information</h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <td>User Id</td>
                            <td>FirstName</td>
                            <td>LastName</td>
                            <td>City</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.users.map(
                                User =>
                                <tr key ={User.id}>
                                    <td> {User.id}</td>
                                    <td> {User.firstName}</td>
                                    <td> {User.lastName}</td>
                                    <td> {User.city}</td>
                                </tr>
                            )
                    
                            
                        }
                    </tbody>
                </table>


            </div>
        )
    }

}

export default UserComponent