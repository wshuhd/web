require('./css/common.css')
require('./css/main.less');
const count = require('./modules/Count');
console.log('count:' + count)

import React from 'react';
import ReactDOM from 'react-dom'
import Count from './components/hook1'
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

    shouldComponentUpdate() {
        console.log('this is shouldCompoentUpdate...')
    }


    render() {
        return (
            <div class="main" id='root'>
                <div class="div1"></div>
                <div onClick={() => { this.updateAddress('liuan') }}>this is react component.
                    <Count />
                </div>
            </div>
        )
    }
}
// export default WJClassComp;

ReactDOM.render(
    <div>
        this is render block
        <WJClassComp />
    </div>,
    document.getElementById('root')
)