import React from 'react';
import styled from 'styled-components';
import profileImg from '../img/sam_profile_small.jpg';

// mock de dados de usuário/estudante
const userDataMock = {
    name: "Samuel Quaresma",
    city: "São Vicente",
    state: "SP"
}

const Wrapper = styled.div`
    width: 100%;
    /* background-color: #888; */
    display: flex;
    align-items: center;
    align-self: flex-start;
    justify-content: center;
    margin: 0 auto;
    height: 20vh;
`

const ProfileImg = styled.img`    
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 2px white solid;
    /*box-shadow: 0px 5px 5px gray;*/
`

const UsernameText = styled.p`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14pt;
    font-weight: bold;
    color: #FFF;
`

const UserLocation = styled.p`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 10pt;
    color: #DDD;
    /* font-style: italic; */
`

const ProfileInfos = styled.div`
    margin-left: 20px;
    
`

function UserInfo() {
    return (
        <Wrapper>
            <ProfileImg src={profileImg} alt="profileImg"/>
            <ProfileInfos>
                <UsernameText>{userDataMock.name}</UsernameText>
                <UserLocation>{userDataMock.city}, {userDataMock.state}</UserLocation>
            </ProfileInfos>
        </Wrapper>
    );
}

export default UserInfo;