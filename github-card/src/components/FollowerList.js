import React from 'react'
import FollowerCard from './FollowerCard'

const FollowerList = props => {
    return (
        <div>
            <h2>My Followers</h2>
            {props.followers.map(follower => (
                <FollowerCard key={follower.id} follower={follower} />
            ))}
        </div>
    )
}

export default FollowerList