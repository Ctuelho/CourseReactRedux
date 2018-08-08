import React from 'react'
import ReactDOM from 'react-dom'
import Default, { Primeiro, Segundo, Terceiro } from './component.jsx'

ReactDOM.render(
    <div>
        <Primeiro value="Hello react1!"/>
        <Segundo value="Hello react2!"/>
        <Terceiro value="Hello react3!"/>
        <Default value="Hello default"/>
    </div>,
    document.getElementById('app'))

