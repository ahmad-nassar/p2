import React , {Component} from 'react';
import axios from 'axios'

class Blog extends Component {
    
   state = {
       users : []
   }
   
    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res => {
            console.log(res.data)
            this.setState({
                users: res.data
            })
        })
    }
    
    render() {
        const {users} = this.state
        const userlist = users.map(user => {
            return (
                <div key={users.id}>
                    <div className="content">
                        <div>Name: {user.name}</div>
                        <div>UserName: {user.username}</div>
                    </div>
                </div>
            )
        })
        return (
            <div className="Blog">
                <h2>Blog</h2>
                <p>This is Blog section</p>
                <div>
                    {userlist}
                </div>
            </div>
        );
    }
}
export default Blog;