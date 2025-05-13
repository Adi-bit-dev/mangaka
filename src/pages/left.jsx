import React from "react";
import "./leftStyles.css";
import Category from "../mini_components/categories";
import Filter from "../mini_components/filter";
import { useState } from "react";

function Left(){

    const [showCategory, setshowCategory] = useState(false);
    const [showFilter, setshowFilter] = useState(false);

    function categoriesClicked(){
        if(showCategory){
            setshowCategory(false);
        } else{
            setshowCategory(true);
        }
    }

    function filterClicked(){
        if(showFilter){
            setshowFilter(false);
        } else{
            setshowFilter(true);
        }
    }

    function mangaka(){
        alert("Coming soon!! Its under development")
    }

    return(
        <div className="left-container">
            <div className="section">
                {/* Add the selected class to the selected button */}
                <div className="button selected">
                    <div className="icn">
                        <img src="../src/assets/home.png" alt="Home" />
                    </div>
                    <div>Home</div>
                </div>
                <div className="button">
                    <div className="icn">
                        <img src="../src/assets/bell.png" alt="Bell" />
                    </div>
                    <div>Notifications</div>
                </div>
                <div className="button">
                    <div className="icn">
                        <img src="../src/assets/bookmark.png" alt="Bookmark" />
                    </div>
                    <div>Bookamark</div>
                </div>
                <div className="button" onClick={filterClicked}>
                    <div className="icn">
                        <img src="../src/assets/filter.png" alt="Filter" />
                    </div>
                    <div>Filter</div>
                </div>
                {showFilter && <Filter/>}
                <div className="button" onClick={categoriesClicked}>
                    <div className="icn">
                        <img src="../src/assets/categories.png" alt="categories" />
                    </div>
                    <div>Categories</div>
                </div>
                {/* conditionally render categories */}
                {showCategory && <Category />}
                <div className="button" onClick={mangaka}>
                    <div className="icn">
                        <img src="../src/assets/become_a_member.png" alt="member_icon" />
                    </div>
                    <div>Become a mangaka</div>
                </div>
            </div>
        </div>
    )
}

export default Left