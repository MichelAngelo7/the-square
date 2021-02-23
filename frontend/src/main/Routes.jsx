import React from 'react'
import { Switch, Route, Redirect} from 'react-router-dom'

import Home from '../components/home/Home'
import Chat from '../components/chat/Chat'

export default props =>
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/chat' component={Chat}/>
        <Redirect from="*" to="/" />
    </Switch>
