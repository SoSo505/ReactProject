import React, { Component, ReactElement, useContext } from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import { type } from "os";
import { logoContext } from "./LogoContext";

// export default class Navbar extends Component<Props, State> {
//   constructor(props: Props) {
//     super(props);
//     this.state = {
//     };
//   }

//   render() {
//     return (
         
//     );
//   }
// }


interface Props {
  
}

export default function Navbar({}: Props): ReactElement {

  const { value, setValue } = useContext(logoContext);



  return (
       <div className="main_navbar">
           <h1 className="logo" style = {{color: value}} onClick={() => setValue((prevColor: string) => {
             return prevColor == 'red' ? 'white' : 'red' 
           })}>𝕲𝖊𝖊𝖈𝖔</h1>
           <div className="links">
             <Link className="link" to="/">
               Home
             </Link>
             <Link className="link" to="/Games">
               Games
             </Link>
             <Link className="link" to="/about_us">
               About us
             </Link>
             <Link className="link" to="/contacts">
               Contacts
             </Link>
             <Link className="link" to="help">
               Help
             </Link>
             <Link className="link" to="registration">
               Registration
             </Link>
           </div>
    </div>
  )
}
