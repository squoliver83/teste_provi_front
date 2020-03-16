import React from 'react';
import { Wrapper, ProfileImg, UsernameText, UserLocation, ProfileInfos } from './UserInfoStyle';

// mock de dados de usuário/estudante
import profileImg from '../../img/sam_profile_small.jpg';
const userDataMock = {
    name: "Samuel Quaresma",
    city: "São Vicente",
    state: "SP"
}


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