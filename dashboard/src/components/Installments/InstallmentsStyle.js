import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

export const Wrapper = styled.div`
    margin-bottom: 20px;
`

export const SectionTitle = styled.h3`
    margin: 20px auto 10px;
    color: #fff;
    text-transform: uppercase;
    text-align: center;
    font-weight: bold;
`

export const InstallmentHeader = styled(Typography)`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 15pt;
    color: #007;
`

export const InstallmentDetails = styled.p`
    margin: 0;
    font-size: 12pt;
`

export const PaydText = styled.p`
    margin: 0;
    color: #015;
    font-size: 15pt;
    font-weight: bold;
`

export const UnpaidText = styled.p`
    margin: 0;
    color: #f70;
    font-size: 12pt;
    font-weight: bold;
`