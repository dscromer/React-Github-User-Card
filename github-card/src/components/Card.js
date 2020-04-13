import React from 'react'

const Card = props => {
    return (
        <div>
            <img src={props.user.avatar_url} alt='profile'/>
            <p>Location: {props.user.location}</p>
            <p>Bio: {props.user.bio}</p>
            <p>Repositories: {props.user.public_repos}</p>
            <p>Followers: {props.user.followers}</p>
        </div>
    )
};

export default Card
