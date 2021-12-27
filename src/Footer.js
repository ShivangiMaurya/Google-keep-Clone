import React from 'react';

const Footer=()=>{
    const year=new Date().getFullYear();
    return(
        <>
        {/* <Footer> */}
         <p id="copy">
            copyright © {year}

        </p> 
         
        {/* </Footer> */}
        
        </>
    );
};
export default Footer;