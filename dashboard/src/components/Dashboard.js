import React, { Component } from 'react';
import UserInfo from './UserInfo'
import axios from 'axios';
import styled from 'styled-components';
import GeneralInfos from './GeneralInfos';
import Installments from './Installments';

const responseDataMock = {
    installments: [
        {
            value: 500,
            formatedValue: "R$ 500,00",
            payd: false,
            dueDate: "01/04/12"
        },
        {
            value: 500,
            formatedValue: "R$ 500,00",
            payd: false,
            dueDate: "01/05/12"
        },
        {
            value: 500,
            formatedValue: "R$ 500,00",
            payd: false,
            dueDate: "01/06/12"
        },
        {
            value: 500,
            formatedValue: "R$ 500,00",
            payd: false,
            dueDate: "01/07/12"
        },
        {
            value: 500,
            formatedValue: "R$ 500,00",
            payd: false,
            dueDate: "01/08/12"
        },
        {
            value: 500,
            formatedValue: "R$ 500,00",
            payd: false,
            dueDate: "01/09/12"
        },
        {
            value: 500,
            formatedValue: "R$ 500,00",
            payd: false,
            dueDate: "01/10/12"
        }
    ],
    UserId: 146,
    amountTaken: 3000,
    amountPayd: 0,
    monthlyInterest: 2,
    totalAmountInTaxes: 500
}

const Wrapper = styled.div`
    width: 100%;
    background-color: #888;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin: 0 auto;
    height: 100vh;
`

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
            amountTaken: queryResponse.data.amountTaken,
            amountPayd: queryResponse.data.amountPayd,
            totalAmountInTaxes: queryResponse.data.totalAmountInTaxes,
            monthlyInterest: queryResponse.data.monthlyInterest,
            installments: queryResponse.data.installments
        })
    }

    render() {
        
        return (
            <Wrapper>
                <UserInfo />
                <GeneralInfos 
                    userId={this.state.userId}
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