import React from "react";
import "./navbarStyles.css"


function Navbar() {
    function handleDonate(){
        alert("U actually wanna doanate??  awwww dont worry honey just enjouy our website :)")
    }

    return (
        <div className="nav">
            <div className="right">
                <div className="icon">
                    <img src="../src/assets/logo.png" alt="Icon" />
                </div>
                <div className="name">Mangaka</div>
            </div>
            <div className="search">
                <input type="text" placeholder="Type here to search" />
            </div>
            <div className="left">
                <div className="donate" onClick={handleDonate}>
                    <div className="heart">
                        <img src="../src/assets/like.png" alt="Heart" />
                    </div>
                    <div>Support Us</div>
                </div>
                <div className="account"></div>
                <div className="icn">
                    <img src="../src/assets/menu.png" alt="M" />
                </div>
            </div>
        </div>
    )
}

export default Navbar