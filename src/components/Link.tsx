import Link, { LinkProps } from 'next/link'

interface IProps extends LinkProps {
    children: any
}

const LinkComponent = (props: IProps) => {
    const { children, ...rest } = props
    return (
        <Link {...rest}>
            <a className='next-link'>{children}</a>
        </Link>
    )
}

export default LinkComponent
