import * as React from 'react'
import * as classNames from 'classnames'

interface IProps {
    open: boolean
    onClose: () => void
}

const MenuWidget = (props: IProps) => {
    return (
        <>
            <div className={classNames('menu', {'--open': props.open})}>
                <div className='menu__inner'>
                    <div className='menu__header'>
                        <div className='menu__logo'><img src='src/assets/images/ft-blue.png' /></div>
                        <a onClick={() => props.onClose()} className='menu_button'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
                        </a>
                    </div>
                    <ul>
                        <li>What We Do</li>
                        <li>Our Story</li>
                        <li>Spotlight</li>
                    </ul>
                </div>
            </div>

        </>
    )
}

export default MenuWidget
