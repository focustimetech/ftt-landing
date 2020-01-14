import classNames from 'classnames'
import * as React from 'react'

interface IProps {
    name: string
    value: string
    label: string
    fullWidth?: boolean
    type?: string
    placeholder?: string
    onChange: (event: any) => void
}

class TextField extends React.Component<IProps> {
    inputRef: any

    constructor (props: IProps) {
        super(props)
        this.inputRef = React.createRef()
    }

    escFunction = (event: any) => {
        if (event.keyCode === 27) {
            this.inputRef.current.blur()
        }
    }

    render() {
        return (
            <div className={classNames('textfield', { '--non-empty': this.props.value.length > 0 }, { '--full-width': this.props.fullWidth })}>
                <div className='textfield__label'>
                    <label htmlFor={this.props.name}>{this.props.label}</label>
                </div>
                <input
                    type={this.props.type}
                    value={this.props.value}
                    onChange={this.props.onChange}
                    onKeyDown={this.escFunction}
                    name={this.props.name}
                    placeholder={this.props.placeholder}
                    ref={this.inputRef}
                />
            </div>
        )
    }
}

export default TextField
