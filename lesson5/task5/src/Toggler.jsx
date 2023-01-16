import React from "react";


class Toggler extends React.Component {
constructor(props){
    super(props)
this.state ={
    toggle:'Off'
}
}


changeToggle = () => {
    this.setState({
        toggle: this.state.toggle === 'Off'
? 'On'
: 'Off'
    })
} 
    render(){
        return (
            <div >
                <button className="toggler" onClick={this.changeToggle}>{this.state.toggle}</button>
            </div>

          
        )   
    }
}

export default Toggler