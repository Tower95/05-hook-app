import { useCounter } from "../hook/useCounter"

export const CounterWithCustomHook = () => {

  let {counter, increment, decrement, reset} = useCounter(10);

  return (
    <>
      <h1> Counter with Hook: {counter}</h1>
      <hr/>
      <button onClick={() => increment(2)} className="btn btn-primary">+1</button>
      <button onClick={reset} className="btn btn-primary">Reset</button>
      <button onClick={() => decrement(2)} className="btn btn-primary">-1</button>
    </>
  )
}


