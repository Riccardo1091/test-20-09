import { useState } from "react"

export function Even({props}) {
    const [value, setValue] = useState(false)

    function handler() {
        setValue(
            !value
        )
    }

    return(
        <>  
            <button onClick={handler}>Even</button>
            {value && props}
        </>
    )
}