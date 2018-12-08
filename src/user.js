import React,{Component} from 'react'
import Helmet,{ HelmetProvider  } from 'react-helmet-async'

class User extends Component{
    render(){
        const id = Number(document.location.pathname.split('/')[2] - 1)
        const user = this.props.userData[id]
        return(
            <>
                <HelmetProvider>
                    <Helmet>
                        <title>{user.name} | React Lab</title>
                        <meta name="description" content={user.description} />
                    </Helmet>
                </HelmetProvider>
                <img src={user.url} />
                <h3>{user.name}</h3>
                <p>{user.description}</p>
            </>
        )
    }
}

export default User