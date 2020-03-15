import React from 'react';
import InfoPaper from '../InfoPaper/InfoPaper';
import { Wrapper, SectionTitle, InfoCards } from './GenralInfosStyle';

function GeneralInfos(props) {
    return (
        <Wrapper>
            <SectionTitle>INFORMAÇÕES GERAIS</SectionTitle>
            <InfoCards>
                <InfoPaper title="Empréstimo total:" value={"R$ " + props.amountTaken}/>
                <InfoPaper title="Taxa de juros:" value={props.monthlyInterest + " %"}/>
                <InfoPaper title="Total de juros:" value={"R$ " + props.totalAmountInTaxes}/>
                <InfoPaper title="Total pago:" value={"R$ " + props.amountPayd}/>
            </InfoCards>
        </Wrapper>
    );
}

export default GeneralInfos;