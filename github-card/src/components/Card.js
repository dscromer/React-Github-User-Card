import React from 'react'
import styled from 'styled-components'

// STYLES HERE =============
const Container = styled.div`
    background-color: #547AA5;
    padding: 15px;
    width: 50%;
    border-radius: 5px;
    margin: 0 auto;
    filter: drop-shadow(15px 15px 7px #363457);
    `
const Flex = styled.div`
    display: flex;
    justify-content: space-evenly;
    `

const Picture = styled.img`
    margin-right: 15px;
    border-radius: 5px;
    border: 2px solid black
    max-width: 50%;
    `

const Info = styled.div`
    background-color: rgba(184, 225, 255, 0.8);
    padding: 10px;
    border-radius: 5px;
    width: 40%;
`

// COMPONENT ===============
const Card = props => {
    return (
        <Container>
            <h1>{props.user.name}'s Github Profile</h1>
            <Flex>
                <div>
                    <Picture src={props.user.avatar_url} alt='profile'/>
                </div>
                <Info>
                    <p><b>Location:</b> {props.user.location}</p>
                    <p><b>Bio:</b> {props.user.bio}</p>
                    <p><b>Repositories:</b> {props.user.public_repos}</p>
                    <p><b>Followers:</b> {props.user.followers}</p>
                    <p><b>Company:</b> {props.user.company}</p>
                    <p><b>E-mail:</b> {props.user.email}</p>
                </Info>
            </Flex>
        </Container>
    )
};

export default Card
