import React, { useState } from 'react'

const initCounter = 0

export const Counter = () => {
    const [counterVal, setcounterVal] = useState(initCounter)
    const handleOnclick = (type) => {
        switch (type) {
            case "Increment":
                return setcounterVal(prev => ++prev)
            case "Decrement":
                return setcounterVal(prev => --prev)
            case "Reset":
                return setcounterVal(0)


            default:
                break;
        }
    }
    return (
        <>
            <div>Counter is:<span data-testid="countVal">{counterVal}</span></div>
            <input type="button" data-testid="increment" onClick={() => handleOnclick("Increment")} value="+" />
            <input type="button" data-testid="decrement" onClick={() => handleOnclick("Decrement")} value="-" />
            <input type="button" onClick={() => handleOnclick("Reset")} value="Reset" />
        </>
    )
}
