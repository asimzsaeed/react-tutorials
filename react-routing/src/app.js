import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route } from 'react-router-dom'


import { Root } from "./app/Root";
import { Home } from "./app/components/common/Home";
import { User } from "./app/components/common/User";

class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Root}/>
                    <Route exact path="/" component={Home}/>
                    <Root>
                        <Route path="/home" component={Home} />
                        <Route path="/user/:id" component={User} />
                    </Root>
                </div>
            </Router>
        );
    }
}

render(<App />, window.document.getElementById("app"))