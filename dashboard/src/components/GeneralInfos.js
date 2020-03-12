import React from 'react';

class GeneralInfos extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <p>User ID: {this.props.userId}</p>
            </div>
        );
    }
}

export default GeneralInfos;