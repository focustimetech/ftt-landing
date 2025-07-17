import clsx from 'clsx'
import React, { useRef } from 'react'

interface IProps {
    name: string
    value: string
    label: string
    fullWidth?: boolean
    type?: string
    placeholder?: string
    onChange: (event: any) => void
}

const TextField = (props: IProps) => {
    const inputRef = useRef<HTMLInputElement>(null)

    const escFunction = (event: any) => {
        if (event.keyCode === 27) {
            inputRef.current?.blur()
        }
    }
    
    return (
        <div className={clsx('textfield', { '--non-empty': props.value.length > 0 }, { '--full-width': props.fullWidth })}>
            <div className='textfield__label'>
                <label htmlFor={props.name}>{props.label}</label>
            </div>
            <input
                type={props.type}
                value={props.value}
                onChange={props.onChange}
                onKeyDown={escFunction}
                name={props.name}
                placeholder={props.placeholder}
                ref={inputRef}
            />
        </div>
    )
}

export default TextField
