import React from "react";


const currentYear = new Date().getFullYear();

function Footer() {
    
    return <div>
    <footer>
            copyright © {currentYear}
    </footer>
        
    </div>
}

export default Footer;
