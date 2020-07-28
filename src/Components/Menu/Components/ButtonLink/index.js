import React from "react";



function ButtonLink(props){
// props.className and props.href are inherit from Menu

    console.log(props);
    return (
   
        <a className={props.className} href={props.href}>
            {props.children}
        </a>
        )
        
}

export default ButtonLink;