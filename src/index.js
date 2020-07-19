require('./css/common.css')
require('./css/main.less');
const count = require('./modules/Count');
console.log('count:' + count)
import React from 'react'
import ReactDOM from 'react-dom'
import WJClassComp from './components/ClassComp';
import List from './components/List'
ReactDOM.render(
    <div>
        this is render block
        <WJClassComp />
        <List/>
    </div>,
    document.getElementById('root')
)