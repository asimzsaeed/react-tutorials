import React from "react";

export class Home extends React.Component {
    constructor(props){
        console.log('constructor>>')
        super();
        this.state = {
            age: props.initialAge,
            status: 0,
            newHomeLinkName: 'newHomeLinkName'
        };

        setTimeout(() => {
            this.setState({
                status:   this.state.status + 1
            });
        }, 0);

    }
   
    componentWillMount(){
        console.log('componentWillMount>>')
    }

    componentDidMount(){
        console.log('componentDidMount>>')
    }

    componentWillReceiveProps(newProps){
        console.log('componentWillReceiveProps>>newProps>>', newProps)
    }
    
    shouldComponentUpdate(newProps, nextState){
        console.log('shouldComponentUpdate>>', newProps, nextState)
        // if(nextState.status === 1){
        //     return false;
        // }
        return true;
    }

    componentWillUpdate(newProps, nextState){
        console.log('componentWillUpdate>>', newProps, nextState)
    }

    componentDidUpdate(prevProps, prevState){
        console.log('componentDidUpdate>>', prevProps, prevState)
    }

    componentWillUnmount(){
        console.log('Component will unmount')
    }

    onMakeOlder() {
        this.setState({
            age:  this.state.age + 3,
        });
       
        console.log('this.age>>', this.age)
    }

    onChangeLink(){
        console.log('onChangeLink>>', this.state.newHomeLinkName)
        this.props.changeLink(this.state.newHomeLinkName)
    }
    onHandleChanges(event) {
        console.log('onHandleChanges>>', event);
        this.setState({
            newHomeLinkName:  event.target.value,
        });
    }
    render() {
        return (
            <div className="container-fluid">
                 <p>I'm {this.props.name} I'm {this.state.age} </p>
                 <p> {this.state.status}</p>
                 <input type="text" value={this.state.newHomeLinkName} onChange={ (event) => this.onHandleChanges(event) } />
                 <button onClick={() => this.onMakeOlder() }>make me older                   
                 </button>
                 <button onClick={this.props.greet}>Call parent method                   
                 </button>
                 <button onClick={ this.onChangeLink.bind(this)}>Set Greetings                  
                 </button>
                 <h4>Hobbies:</h4>
                 {/* <ul>
                     {this.props.user.hobbies.map((hobby, i) => <li key={i}>{i}- {hobby}</li>)}
                 </ul>
                 {this.props.children} */}
            </div>
        );
    }
}

Home.PropTypes= {
    name: React.PropTypes.string,
    homeLinkName: React.PropTypes.string,
    age : React.PropTypes.number,
    user : React.PropTypes.object,
    children: React.PropTypes.element.isRequired,
    greet: React.PropTypes.func,
    changeLink: React.PropTypes.func

}