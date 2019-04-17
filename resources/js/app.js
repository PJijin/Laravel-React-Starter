import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Example from "./components/Example";
import Home from "./components/Home";

import { Provider } from "react-redux";
import store from "./store";
class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div>
                        <Header />
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/example" component={Example} />
                        </Switch>
                    </div>{" "}
                </BrowserRouter>
            </Provider>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app"));
