import * as classNames from 'classnames'
import * as React from 'react'
import Link from 'next/link'

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
                        <Link href='/'>
                            <div className='menu__logo'><img src='images/ft-blue.png' /></div>
                        </Link>
                        <a onClick={() => props.onClose()} className='menu_button'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
                        </a>
                    </div>
                    <ul className='menu__list'>
                        <Link href='our-story'><li>Our Story</li></Link>
                        <Link href='spotlight'><li>Spotlight</li></Link>
                        <Link href='contact'><li>Contact</li></Link>
                    </ul>
                </div>
            </div>

        </>
    )
}

export default MenuWidget
