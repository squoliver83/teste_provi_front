import React from 'react';
import styled from 'styled-components';
import { useStyles } from './StyleHooks';
import { Paper } from '@material-ui/core';

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #333;
`

const InfoCards = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;    
    padding: 25px;
    text-align: center;
`

function GeneralInfos(props) {    
    const classes = useStyles();
    return (
        <Wrapper>
            <h3 className={classes.sectionTitle}>FINANCIAMENTO - INFORMAÇÕES GERAIS</h3>
            <InfoCards>
                <Paper className={classes.paper} elevation={2}>
                    <p className={classes.cardTitle}>Empréstimo total:</p>
                    <p>R$ {props.amountTaken}</p>
                </Paper>
                <Paper className={classes.paper} elevation={2}>
                    <p className={classes.cardTitle}>Taxa de juros:</p>
                    <p>{props.monthlyInterest}%</p>
                </Paper>
                <Paper className={classes.paper} elevation={2}>
                    <p className={classes.cardTitle}>Total de juros:</p>
                    <p>R$ {props.totalAmountInTaxes}</p>
                </Paper>
                <Paper className={classes.paper} elevation={2}>
                    <p className={classes.cardTitle}>Total pago:</p>
                    <p>R$ {props.amountPayd}</p>
                </Paper>
            </InfoCards>
        </Wrapper>
    );    
}

export default GeneralInfos;