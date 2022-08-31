import React, { useCallback, useState } from 'react'

const initCounter = 0

export const Counter = () => {
    const [counterVal, setcounterVal] = useState(initCounter)
    const handleOnclick = useCallback(
        (type) => {
            switch (type) {
                case "Increment":
                    setcounterVal(prev => ++prev)
                    break
                case "Decrement":
                    setcounterVal(prev => --prev)
                    break
                case "Reset":
                    setcounterVal(0)
                    break


                default:
                    break;
            }
        },
        [counterVal],
    )


    return (
        <>
            <div>Counter is:<span data-testid="countVal">{counterVal}</span></div>
            <input type="button" data-testid="increment" onClick={() => handleOnclick("Increment")} value="+" />
            <input type="button" data-testid="decrement" onClick={() => handleOnclick("Decrement")} value="-" />
            <input type="button" onClick={() => handleOnclick("Reset")} value="Reset" />
           
        </>
    )
}
