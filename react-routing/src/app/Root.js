import React from "react";
import { Navbar } from "./components/common/Navbar"

export class Root extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <Navbar />
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-12">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}
