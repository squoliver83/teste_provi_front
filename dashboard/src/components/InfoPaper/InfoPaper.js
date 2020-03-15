import React from 'react';
import { StyledPaper, PaperValue, CardTitle } from './InfoPaperStyle';

function InfoPaper(props) {
    return (
        <StyledPaper elevation={2}>
            <CardTitle>{props.title}</CardTitle>
            <PaperValue>{props.value}</PaperValue>
        </StyledPaper>
    );
}

export default InfoPaper;