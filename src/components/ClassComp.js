
import React from 'react';
import HookComp from './HookComp'
class WJClassComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            address: '',
        }
    }
    updateAddress = (address) => {
        this.setState({
            address: address
        })
    }
    getData = () => {
        console.log('http get data...');
    }

    componentDidMount() {
        console.log('this is didMount...')
    }


    render() {
        return (
            <div className="main">
                <div className="div1"></div>
                <div onClick={() => { this.updateAddress('liuan') }}>this is react component.
                    <HookComp />
                </div>
            </div>
        )
    }
}
export default WJClassComp;
