import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStyles } from './StyleHooks';

function Installments(props) {
    const classes = useStyles();
    const parcelas = props.installments.map((parc, index) =>
        <ExpansionPanel>
            <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
            >
                <Typography className={classes.heading}>PARCELA {index + 1}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <Typography>
                    <p className={classes.installmentDetails}>Vencimento: {parc.dueDate}</p>
                    <p className={classes.installmentDetails}>Valor: {parc.formatedValue}</p>
                    {parc.payd ? <p className={classes.paydStamp}>Paga</p> : <p className={classes.unpaidStamp}>A pagar</p>}
                </Typography>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    )

    return (
        <>
            <h3 className={classes.sectionTitle}>Parcelamento:</h3>
            <div>{parcelas}</div>
        </>
    );
}

export default Installments;