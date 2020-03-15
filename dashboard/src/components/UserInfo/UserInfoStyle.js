import styled from 'styled-components';

export const Wrapper = styled.div`
width: 100%;
display: flex;
align-items: center;
align-self: flex-start;
justify-content: center;
margin: 10px auto;
min-height: 20vh;
`

export const ProfileImg = styled.img`    
width: 150px;
height: 150px;
border-radius: 50%;
border: 2px white solid;
`

export const UsernameText = styled.p`
font-family: Arial, Helvetica, sans-serif;
font-size: 14pt;
font-weight: bold;
color: #FFF;
`

export const UserLocation = styled.p`
font-family: Arial, Helvetica, sans-serif;
font-size: 10pt;
color: #DDD;
`

export const ProfileInfos = styled.div`
margin-left: 20px;    
`