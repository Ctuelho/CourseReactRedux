import React from 'react'
import ReactDOM from 'react-dom'
import MultiFruitTree from './multi-fruit_tree.jsx'
import Fruit from './fruit.jsx'

ReactDOM.render(
    <MultiFruitTree>
        <Fruit name='Banana' flavor='sweet' />
    </MultiFruitTree>,
    document.getElementById('app'))

