import React from 'react'

const Panel = (props) => {
    return <div style={{border: '1px solid #a8a8a8', padding: '5px', margin: '10px 0'}}>
        <h1>Panel from App A</h1>
        {props.children}
    </div>
}

export default Panel