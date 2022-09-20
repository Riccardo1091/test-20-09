import React, {useEffect, useState } from "react";
import useSWR from "swr";
import { Even } from "./even";
import { Odd } from "./odd";

const fetcher = (url) => fetch(url).then((res) => res.text());

export function Home() {
    const {data, mutate} = useSWR("http://numbersapi.com/random/math", fetcher, {
        revalidateOnMount: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    });
    const [even, setEven] = useState([])
    const [odd, setOdd] = useState([])

    function handler() {
        mutate()
        if (data.split(" ")[0] % 2 === 0) {
            setEven(prev => [...prev, data])
        } else {
            setOdd(prev => [...prev, data])
        } 
    }

    useEffect(() => {
        console.log(odd, even)
    }, [odd, even]);


    return (
        <>
            <button onClick={handler}>Fetch frase</button>
            <p>
                {data && data}
            </p>
            <div style={{'display':'flex'}}>
                <Odd style={{'width':'50%','flex':'50%'}} props={odd}/>
                <Even style={{'width':'50%','flex':'50%'}} props={even}/>
            </div>
        </>
    )
}