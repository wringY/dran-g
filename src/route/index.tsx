/*
 * @Desc:
 * @Author: wringY
 * @Date: 2021-05-29 12:52:28
 * @LastEditTime: 2021-10-01 09:56:59
 * @FilePath: \my-app-ts\src\route\index.tsx
 */
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './config'

class App extends React.Component {
    constructor(props: any) {
        super(props)
    }
    render(): React.ReactNode {
        return (
            <Router forceRefresh={false}>
                <React.Suspense fallback={<div>加载中</div>}>
                    <Switch>
                        <Route component={Home} path="/home"></Route>
                    </Switch>
                </React.Suspense>
            </Router>
        )
    }
}
export default App
