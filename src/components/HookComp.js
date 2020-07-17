import React, { useState, useEffect } from 'react'

function WjHook() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('initialName');

    useEffect(() => {
        console.log(`count is ${count}`)
    }, [count])

    useEffect(() => {
        console.log(`name is ${name}`)
    }, [name])
    return (
        <div>
            {count}
            {name}
        </div>
    )
}

export default WjHook