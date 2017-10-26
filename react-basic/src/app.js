import React from "react";
import { render } from "react-dom";
import PropTypes from 'prop-types'; 

import { Header } from "./app/components/common/Header";
import { Home } from "./app/components/common/Home";


class App extends React.Component {
    constructor(){
        super();
        this.state = {
            homeLink: "Home"
        };
    }
    
    onGreet() {
        console.log('greet>>')
        alert('greet>>')
    }
    onChangeLinkName(newName){
        console.log('onChangeLinkName>>1>>', newName)
        this.setState({
            homeLink: newName,
            homeMounted: false
        });
    }

    onChangeHomeMounted(){
        this.setState({
            homeMounted: !this.state.homeMounted
        })
    }

    render() {
        let homeComponent = "";
        if(this.state.homeMounted){
            homeComponent = (
            <Home 
                name={"Max"} 
                initialAge={27} 
                user={user} 
                greet={ this.onGreet } 
                changeLink={ this.onChangeLinkName.bind(this)}
                homeLinkName= { this.state.homeLink} 
            />
        );
        }
       let user = {
            name: "Ana",
            hobbies:["sports", "dancing"]
        }

        return (
            <div className="container-fluid">
                <h1>Welcome  </h1>
                <Header homeLink={this.state.homeLink}/>
                {homeComponent}
                <button onClick={ this.onChangeHomeMounted.bind(this)  }>(Un)Mount Homem Component                  
                 </button>
            </div>
        );
    }
}

render(<App/>, window.document.getElementById("app"))