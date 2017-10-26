import React from "react";

export class User extends React.Component {
    onNavigateHome ()  {
        console.log('onNavigateHome>>', );
        
    };

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        This is user page
                        <p> User Id:  { this.props.match.params.id }</p>
                        <button
                            onClick={() => this.onNavigateHome() }
                            type="button" 
                            className="btn btn-primary">
                            Go Home
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
