import * as React from 'react'
import {
	BrowserRouter as Router,
	Route,
	RouteComponentProps,
	Switch
} from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

/* Styles */
import '../assets/styles/main.scss'

/* Components */
import MenuWidget from './MenuWidget'
import TopNav from './TopNav'

/* Pages */
import ContactPage from './Pages/ContactPage'
import LandingPage from './Pages/LandingPage'
import OurStoryPage from './Pages/OurStoryPage'

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
                <Route render={(props: RouteComponentProps) => (
                    <>
                        <MenuWidget open={this.state.menuOpen} onClose={this.handleMenuClose} />
                        <TopNav {...props} visible={this.state.showTopNav} onMenuOpen={this.handleMenuOpen} />

                            <TransitionGroup>
                                <CSSTransition
                                    timeout={450}
                                    classNames='fade'
                                    key={props.location.key}
                                    onExit={() => window.scrollTo({ top: 0, behavior: 'smooth'})}
                                >
                                    <Switch location={props.location}>
                                        <Route path='/contact' component={ContactPage} />
                                        <Route path='/our-story' component={OurStoryPage} />
                                        <Route path='/' component={LandingPage} />
                                    </Switch>
                                </CSSTransition>
                            </TransitionGroup>

                    </>
                )} />
            </Router>
        )
    }
}

export default App
