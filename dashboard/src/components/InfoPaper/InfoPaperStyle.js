import { Paper } from '@material-ui/core';
import styled from 'styled-components';

export const StyledPaper = styled(Paper)`
padding: 0 5px;
@media screen AND (max-width: 500px) {
    margin: 5px;
    width: 100%;
}
`

export const CardTitle = styled.p`
font-weight: bold;
color: #007;
@media screen AND (max-width: 500px) {
    margin: 0;
}
`

export const PaperValue = styled.p`
color: purple;
font-size: 14pt;
font-weight: bold;
@media screen AND (max-width: 500px) {
    margin: 0;
}
`