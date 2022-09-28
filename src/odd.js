import { useState } from "react"

export function Odd({props}) {
    const [value, setValue] = useState(false)

    function handler() {
        setValue(!value)
    }

    return(
        <div>  
            <button onClick={handler}>Odd</button>
            {value && props.odd.map((el, index) => <li key={el + Math.random() + index}>{el} <button name={el} onClick={props.deleter}>Delete</button></li>)}
        </div>
    )
}