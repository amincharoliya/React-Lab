import React,{Component} from 'react'
import {Helmet} from 'react-helmet'

class User extends Component{
    render(){
        const id = Number(document.location.pathname.split('/')[2] - 1)
        const user = this.props.userData[id]
        return(
            <>
                <Helmet>
                    <title>{user.name} | React Lab</title>
                    <meta name="description" content={user.description} />
                </Helmet>
                <img src={user.url} />
                <h3>{user.name}</h3>
                <p>{user.description}</p>
            </>
        )
    }
}

export default User