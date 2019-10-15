import * as React from 'react'
import {
	BrowserRouter as Router,
	Redirect,
	Route,
	RouteComponentProps,
	Switch
} from 'react-router-dom'
import '../assets/styles/main.scss'

import LandingPage from './Pages/LandingPage'

class App extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/' component={LandingPage} />
                    <Route render={() => <Redirect to='/' />} />
                </Switch>
            </Router>
        )
    }
}

export default App
