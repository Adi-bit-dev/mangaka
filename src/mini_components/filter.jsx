import React from "react";
import "./filterStyles.css"

function Filter() {
    return (
        <div class="filter-container">
            <div class="filter-title">Sort by</div>
            <div class="filter-options">
                <div class="filter-item active" onclick="filterSelected('popularity')">Popularity</div>
                <div class="filter-item" onclick="filterSelected('recent')">Recent</div>
                <div class="filter-item" onclick="filterSelected('trending')">Trending</div>
                <div class="filter-item" onclick="filterSelected('rating')">Rating</div>
            </div>
        </div>

    )
}

export default Filter