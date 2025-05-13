import React from "react";
import "./navbarStyles.css"


function Navbar() {
    function handleDonate() {
        alert("U actually wanna doanate??  awwww dont worry honey just enjouy our website :)")
        alert(localStorage.getItem('showLogin'));

    }

    const isloggedin = localStorage.getItem('isloggedin') === 'true';

    function handleLoginPress() {
        localStorage.setItem('showLogin', 'true');
        window.location.reload(); // This will trigger App to show Auth
    }

    function handleSearchPress() {
        const searchIcon = document.querySelector('.searchIcon');
        const donate = document.querySelector('.display-res');
        const searchInput = document.querySelector(".search");

        searchIcon.style.display = "none";
        donate.style.display = "none";

        searchInput.style.display = "block";
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
                <input
                    type="text"
                    placeholder="Type here to search"
                    onKeyDown={(e) => {
                        // Check if the window width is below 768px (mobile)
                        if (window.innerWidth <= 808) {
                            const searchIcon = document.querySelector('.searchIcon');
                            const donate = document.querySelector('.display-res');
                            const searchInput = document.querySelector(".search");

                            if (e.key === 'Enter') {
                                searchIcon.style.display = "block";
                                donate.style.display = "flex"; // Flex instead of block if you use flexbox layout
                                searchInput.style.display = "none";

                                window.location.reload(); // This will trigger App to show Auth
                            }
                        } else{
                            if(e.key === 'Enter'){
                                alert("Search for: " + e.target.value);
                                e.target.value = ""; // Clear the input after search
                            }
                        }
                    }
                    } />
            </div>

            <div className="searchIcon" onClick={handleSearchPress}>
                <img src="../src/assets/search.png" alt="Search" />
            </div>

            <div className="left">

                <div className="donate" onClick={handleDonate}>
                    <div className="heart">
                        <img src="../src/assets/like.png" alt="Heart" />
                    </div>
                    <div>Support Us</div>
                </div>

                {!isloggedin ? (
                    <div className="donate log display-res" onClick={handleLoginPress}>
                        <div className="heart">
                            <img src="../src/assets/user.png" alt="U" />
                        </div>
                        <div>Login</div>
                    </div>
                ) : (
                    <div className="account"></div>
                )}

                <div className="icn">
                    <img src="../src/assets/menu.png" alt="M" />
                </div>
            </div>
        </div>
    )
}

export default Navbar