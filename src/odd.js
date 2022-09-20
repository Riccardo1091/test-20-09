import { useState } from "react"

export function Odd({props}) {
    const [value, setValue] = useState(false)

    function handler() {
        setValue(
            !value
        )
    }

    return(
        <>  
            <button onClick={handler}>Odd</button>
            {value && props}
        </>
    )
}