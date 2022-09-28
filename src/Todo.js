export function Todo({props}) {
    return(
        <div> 
            <h1>TODO LIST</h1>
            {props.todo && props.todo.map((el, index) => <li key={el + Math.random() + index}>{el} <button name={el} onClick={props.complete}>Completed</button></li>)}
            <hr/>
            <h1>COMPLETED</h1>
            {props.todoDone && props.todoDone.map((el, index) => <li key={el + Math.random() + index}>{el}</li>)}
        </div>
    )
}