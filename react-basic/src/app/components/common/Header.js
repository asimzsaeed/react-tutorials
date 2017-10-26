import React from "react";
//This is stateless component
export const Header = (props) => {
    return (
        <div className="container-fluid">
             <h1>Header</h1>
             <a href={props.homeLink} >{props.homeLink}</a>
        </div>
    );
}
