import * as React from 'react'
import {
	BrowserRouter as Router,
	Route,
	RouteComponentProps,
	Switch
} from 'react-router-dom'
import '../assets/styles/main.scss'

/* Components */
import MenuWidget from './MenuWidget'
import TopNav from './TopNav'

/* Pages */
import ContactPage from './Pages/ContactPage'
import LandingPage from './Pages/LandingPage'

interface IState {
    menuOpen: boolean
    showTopNav: boolean
}

class App extends React.Component<{}, IState> {
    state: IState = {
        menuOpen: false,
        showTopNav: false
    }

    onScroll = (event: any) => {
        if (window.pageYOffset > 500 /* && window.pageYOffset < 900*/ )
            this.setState({ showTopNav: true });
        else
            this.setState({ showTopNav: false })
    }
    
    handleMenuOpen = () => {
        this.setState({ menuOpen: true })
    }

    handleMenuClose = () => {
        this.setState({ menuOpen: false })
    }

    componentDidMount() {
        window.addEventListener('scroll', this.onScroll)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll, false)
    }

    render() {
        return (
            <Router>
                <Route path='/' render={(props: RouteComponentProps) => (
                    <>
                        <MenuWidget open={this.state.menuOpen} onClose={this.handleMenuClose} />
                        <TopNav {...props} visible={this.state.showTopNav} onMenuOpen={this.handleMenuOpen} />
                    </>
                )} />
                <Switch>
                    <Route path='/contact' component={ContactPage} />
                    <Route path='/' component={LandingPage} />
                </Switch>
            </Router>
        )
    }
}

export default App
