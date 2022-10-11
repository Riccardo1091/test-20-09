import React, {useEffect, useState } from "react";
import useSWR from "swr";
import { Even } from "./even";
import { Odd } from "./odd";

const fetcher = (url) => fetch(url).then((res) => res.text());

export function Home() {
    const {data, mutate} = useSWR("http://localhost:4000/math", fetcher, {
        revalidateOnMount: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    });
    const [even, setEven] = useState([])
    const [odd, setOdd] = useState([])

    function handler() {
        mutate()
        if (data) {
            if (data.split(" ")[0] % 2 === 0) {
                setEven(prev => [...prev, data])
            } else {
                setOdd(prev => [...prev, data])
            }
        }
        
    }

    function deleter(e) {
        if (e.target.name.split(" ")[0] % 2 === 0) {
            setEven(prev => prev.filter(el => el !== e.target.name))
        } else {
            setOdd(prev => prev.filter(el => el !== e.target.name))
        }
    }


    // useEffect(() => {
    //     console.log(odd, even)
    // }, [odd, even]);


    return (
        <>
            <button onClick={handler}>Fetch frase</button>
            <p>
                {data && data}
            </p>
            <div>
                <Odd props={{odd, deleter}}/><br/>
                <Even props={{even, deleter}}/>
            </div>
        </>
    )
}