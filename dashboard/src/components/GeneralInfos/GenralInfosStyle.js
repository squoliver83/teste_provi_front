import styled from 'styled-components';

export const Wrapper = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
color: #333;
`

export const InfoCards = styled.div`
display: grid;
grid-auto-flow: column;
grid-auto-columns: 1fr;
grid-gap: 20px;
text-align: center;
@media screen AND (max-width: 500px) {
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    width: 80%;
}
`

export const SectionTitle = styled.h3`
margin: 20px auto 10px;
color: #fff;
text-transform: uppercase;
text-align: center;
font-weight: bold;
padding: 10px;
text-align: center;
`