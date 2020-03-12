import React from 'react';

function Installments(props) {

    const parcelas = props.installments.map((parc) => 
        <p>Valor da parcela: {parc.value} - vencimento: {parc.dueDate}</p>
    )
    
    return (
        <>
            {parcelas}
        </>
    );
}

export default Installments;