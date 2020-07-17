require('./css/common.css')
require('./css/main.less');
const count = require('./modules/Count');
console.log('count:' + count)
import React from 'react'
import ReactDOM from 'react-dom'
import WJClassComp from './components/ClassComp';

ReactDOM.render(
    <div>
        this is render block
        <WJClassComp />
    </div>,
    document.getElementById('root')
)