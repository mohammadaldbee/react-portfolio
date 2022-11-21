import { Component } from "react";
import {Link} from 'react-router-dom';


export default  class Header extends Component{
    render(){
        return <div>
        <header>

        <div class="name">
        <Link to="/">Mo<span>hamm</span>ad</Link>
            
           
{/* <span style={{marginLeft:'50px'}}> {this.props.children}</span> */}
    

        </div>
    
        <div class="last">
            
            <Link to="/services">services&nbsp;</Link>
            <Link to="/projects">projects&nbsp;</Link>
            <Link to="/contact">contact&nbsp;</Link>
        </div>


       
    </header>
    </div>
     }}