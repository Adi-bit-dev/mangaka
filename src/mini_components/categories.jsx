import React from "react";
import "./categoryStyles.css"

function Category() {
    return (
        <div class="categories-box">
            <div class="categories-title">Genres</div>
            <div class="categories-list">
                <div class="category-item action">Action</div>
                <div class="category-item adventure">Adventure</div>
                <div class="category-item fantasy">Fantasy</div>
                <div class="category-item scifi">Sci-Fi</div>
                <div class="category-item horror">Horror</div>
                <div class="category-item comedy">Comedy</div>
                <div class="category-item drama">Drama</div>
                <div class="category-item romance">Romance</div>
            </div>
        </div>
    )
}

export default Category