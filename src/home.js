import React, {useEffect, useState } from "react";
import useSWR from "swr";
import { Even } from "./even";
import { Odd } from "./odd";
import { Todo } from "./Todo";

const fetcher = (url) => fetch(url).then((res) => res.text());

export function Home() {
    const {data, mutate} = useSWR("http://numbersapi.com/random/math", fetcher, {
        revalidateOnMount: false,
        revalidateOnFocus: false
    });
    const [even, setEven] = useState([])
    const [odd, setOdd] = useState([])

    const [todo, setTodo] = useState([])
    const [todoDone, setTodoDone] = useState([])
    
    // function handler() {
    //     mutate()
    // }

    useEffect(() => {
        if (data) {
            if (data.split(" ")[0] % 2 === 0) {
                setEven(prev => [...prev, data])
            } else {
                setOdd(prev => [...prev, data])
            }
            setTodo(prev => [...prev, data])
        } 
    }, [data]);

    function deleter(e) {
        if (e.target.name.split(" ")[0] % 2 === 0) {
            setEven(prev => prev.filter(el => el !== e.target.name))
        } else {
            setOdd(prev => prev.filter(el => el !== e.target.name))
        }
    }

    function complete(e) {
        setTodo(prev => prev.filter(el => el !== e.target.name))
        setTodoDone(prev => [...prev, e.target.name])
    }

    return (
        <>
            <button onClick={() => mutate()}>Fetch frase</button>
            <p>
                {data && data}
            </p>
            <div>
                <Odd props={{odd, deleter}}/><br/>
                <Even props={{even, deleter}}/>
                <hr/>
                <Todo props={{todo, todoDone, setTodo, complete}}/>
            </div>
        </>
    )
}