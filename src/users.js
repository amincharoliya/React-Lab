import React from 'react'
import {Link} from 'react-router-dom'
import Helmet,{ HelmetProvider  } from 'react-helmet-async'

const Users = (props) => {   
    const usersList =  props.userData.map(user => {
        return(
            <li key={user.id}>
                <Link to={`user/${user.id}`}> 
                    <strong>{user.id}. </strong>
                    <span>{user.name}</span>
                </Link>
            </li>
        )         
    });
    return(
        <>
        <HelmetProvider>
            <Helmet>
                <title>User List | React Lab</title>
                <meta name="description" content="List of users fetched from parent Component." />
            </Helmet>
        </HelmetProvider>
        <ul>
            {usersList}
        </ul>
        </>
    )
}


export default Users