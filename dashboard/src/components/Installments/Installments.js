import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import Typography from '@material-ui/core/Typography';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { InstallmentDetails, InstallmentHeader, PaydText, UnpaidText, SectionTitle, Wrapper } from './InstallmentsStyle';

function Installments(props) {
    const parcelas = props.installments.map((parc, index) =>
        <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <InstallmentHeader>PARCELA {index + 1}</InstallmentHeader>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <Typography>
                    <InstallmentDetails>Vencimento: {parc.dueDate}</InstallmentDetails>
                    <InstallmentDetails>Valor: {parc.formatedValue}</InstallmentDetails>
                    {parc.payd ? <PaydText>Paga</PaydText> : <UnpaidText>A pagar</UnpaidText>}
                </Typography>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    )

    return (
        <Wrapper>
            <SectionTitle>Parcelamento</SectionTitle>
            <div>{parcelas}</div>
        </Wrapper>
    );
}

export default Installments;