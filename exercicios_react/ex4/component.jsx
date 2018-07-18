import React from 'react'

const Primeiro = props => (
    <h1>{props.value}</h1>
)

const Segundo = props => <h1>{props.value}</h1>

export const Terceiro = props => <h1>{props.value}</h1>
//export default { Primeiro }

export default props => <h1>{props.value}</h1>

export { Primeiro, Segundo }