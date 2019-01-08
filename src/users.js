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

        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeAoqelt-A_PTabEYZLuhMes609zUzI5_SevnzC3FkJ_ziWGQ/viewform?embedded=true" width="700" height="520" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
        </>
    )
}


export default Users