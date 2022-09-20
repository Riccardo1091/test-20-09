import { useState } from "react"

export function Even({props}) {
    const [value, setValue] = useState(false)

    function handler() {
        setValue(!value)
    }

    return(
        <div>  
            <button onClick={handler}>Even</button>
            {value && props.even.map((el, index) => <li key={el+index}>{el} <button name={el} onClick={props.deleter}>Delete</button></li>)}
        </div>
    )
}