import React from 'react'
import ReactDOM from 'react-dom'
import MultiFruitTree from './multi-fruit_tree.jsx'
import Fruit from './fruit.jsx'

ReactDOM.render(
    <MultiFruitTree flavor='sweet'>
        <Fruit name='Banana' />
        <Fruit name='Grape' />
        <Fruit name='Mango' />
    </MultiFruitTree>,
    document.getElementById('app'))

