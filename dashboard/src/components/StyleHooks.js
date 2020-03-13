import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
    installmentDetails: {
        margin: 0,
    },
    paydStamp: {
        margin: 0,
        color: '#270',
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightBold,
    },
    unpaidStamp: {
        margin: 0,        
        color: '#f70',
        textTransform: "uppercase",
        fontWeight: theme.typography.fontWeightBold,
    },
    sectionTitle: {
        margin: '20px 0 0',
        color: '#ddd',
        textTransform: "uppercase",
        fontWeight: "bold",
    },
    paper: {
        margin: '10px',
        padding: '0 5px',
    },
    cardTitle: {
        fontWeight: 'bold',
    },
}));