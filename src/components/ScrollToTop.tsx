import * as React from 'react'
import { RouteComponentProps } from 'react-router-dom'

interface IProps extends RouteComponentProps {
    children: any
}

class ScrollToTop extends React.Component<IProps> {
    componentDidUpdate(props: IProps) {
        if (props.location !== this.props.location)
            window.scrollTo(0, 0)
    }

    render() {
        return this.props.children
    }
}

export default ScrollToTop
