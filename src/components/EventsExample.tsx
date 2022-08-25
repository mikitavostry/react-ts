import React, { FC, useState, useRef } from 'react'

const EventsExample: FC = () => {
    const [value, setValue] = useState<string>('')
    const inputRef = useRef<HTMLInputElement>(null)
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(inputRef.current?.value)
    }

    const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
        console.log('DRAG')
    }
    return (
        <div>
            <input value={value} onChange={changeHandler} type='text' placeholder='controlled' />
            <input ref={inputRef} type='text' placeholder='uncontrolled' />

            <button onClick={clickHandler}>Submit</button>
            <div onDrag={dragHandler} draggable style={{ width: 200, height: 200, background: 'red' }}></div>
            <div style={{ width: 200, height: 200, background: 'red', marginTop: 20 }}></div>

        </div>
    )
}

export default EventsExample