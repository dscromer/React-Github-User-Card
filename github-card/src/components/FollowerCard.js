import React from 'react'

const FollowerCard = props => {
    return (
        <div>
            <h3>{props.follower.login}</h3>
            <img src={props.follower.avatar_url} alt='follower'/>
        </div>
    )
}

export default FollowerCard