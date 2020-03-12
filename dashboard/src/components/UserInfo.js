import React from 'react';

const userDataMock = {
    name: "Samuel",
    city: "São Vicente",
    state: "SP"
}

function UserInfo() {
    return (
        <div>
            <p>{userDataMock.name}</p>
            <p>{userDataMock.city}</p>
            <p>{userDataMock.state}</p>
        </div>
    );
}

export default UserInfo;