import React from 'react'
import { Route, Switch, NavLink, BrowserRouter } from 'react-router-dom'
import { hot } from 'react-hot-loader'
import Page1 from './pages/Page1'
import Page2 from './pages/Page2'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <>
          <h1>Hello World.</h1>
          <NavLink to="/">Page1</NavLink>
          <NavLink to="page2">Page2</NavLink>
          <Switch>
            <Route exact path="/" component={Page1} />
            <Route path="/page2" component={Page2} />
          </Switch>
        </>
      </BrowserRouter>
    )
  }
}

export default hot(module)(App)
