import React from 'react';


export default function HomeView(props) {
    return <div className="home-view">
        <h1>HOME VIEW</h1>

        {
            props.username ?
                <p>Welcome {props.username}!</p>
                :
                <p>No user logged in!</p>
        }
    </div>
}

