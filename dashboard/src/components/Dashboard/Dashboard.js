import React, { Component } from 'react';
import UserInfo from '../UserInfo/UserInfo'
import axios from 'axios';
import GeneralInfos from '../GeneralInfos/GeneralInfos';
import Installments from '../Installments/Installments';
import { DashboardTitle, Wrapper } from './DashboardStyle';

class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            installments: [],
            userId: '',
            amountTaken: '',
            amountPayd: '',
            monthlyInterest: '',
            totalAmountInTaxes: ''
        };
    }

    componentDidMount() {
        this.getData()
    }

    getData = async () => {
        const queryResponse = await axios.get('http://www.mocky.io/v2/5c923b0932000029056bce39');
        this.setState({
            userId: queryResponse.data.UserId,
            amountTaken: queryResponse.data.amountTaken.toFixed(2),
            amountPayd: queryResponse.data.amountPayd.toFixed(2),
            totalAmountInTaxes: queryResponse.data.totalAmountInTaxes.toFixed(2),
            monthlyInterest: queryResponse.data.monthlyInterest,
            installments: queryResponse.data.installments
        })
    }

    render() {
        return (
            <Wrapper>
                <DashboardTitle>PAINEL DO ESTUDANTE</DashboardTitle>
                <UserInfo />
                <GeneralInfos
                    amountTaken={this.state.amountTaken}
                    amountPayd={this.state.amountPayd}
                    monthlyInterest={this.state.monthlyInterest}
                    totalAmountInTaxes={this.state.totalAmountInTaxes}
                />
                <Installments 
                    installments={this.state.installments}
                />
            </Wrapper>
        );
    }
}

export default Dashboard;