import React from "react";
import "./comicstappedStyles.css"
import { useEffect } from "react";

function Comicstapped() {
    useEffect(() => {
        document.body.style.setProperty("background-image", "none", "important");
        document.body.style.backgroundColor = "white";
    }, [])

    return (
        <div className="cards-tapped-container">
            <div className="first">
                <div className="cover-comics"></div>
                <div className="bookmark-comic">
                    <div className="lst-icon">
                        <img src="../src/assets/bookmark.png" alt="I" />
                    </div>
                    <div>Bookmark</div>
                </div>
            </div>
            <div className="mid">
                <div className="info">
                    <div className=" same title-lst">
                        <div>Title: </div>
                        <div className="title-target"> My hero academia season 5</div>
                    </div>
                </div>

                <div className="description same">
                    <div>Description: </div>
                    <div className="description-target"></div>
                </div>


                <div className="pain-releaver">
                    <div className="status same">
                        <div>Status: </div>
                        <div className="status-target highlight">Ongoing</div>
                    </div>

                    <div className="ratings same">
                        <div>Ratings:</div>
                        <div className="ratings-target highlight">5 stars</div>
                    </div>

                    <div className="author same">
                        <div>Author: </div>
                        <div className="author-target highlight"></div>
                    </div>
                </div>

            </div>
            <div className="lt">

                <div className="section-same">
                    <div className="cards first-cards imp"></div>
                    <div className="mini-info">
                        <div className="title first-title">This is title</div>
                        <div className="ratings first-ratings">
                            <span>&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                        </div>
                        <div className="mini-episode">
                            <div className="ep first-mini-episode">Episode 51</div>
                            <div className="ep first-second-mini-episode">Episode 52</div>
                        </div>
                    </div>
                </div>

                <div className="section-same">
                    <div className="cards second-cards imp"></div>
                    <div className="mini-info">
                        <div className="title second-title">This is title</div>
                        <div className="ratings second-rating">
                            <span>&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                        </div>
                        <div className="mini-episode">
                            <div className="ep second-mini-episode">Episode 51</div>
                            <div className="ep second-second-mini-episode">Episode 52</div>
                        </div>
                    </div>
                </div>

                <div className="section-same">
                    <div className="cards third-cards imp"></div>
                    <div className="mini-info">
                        <div className="title third-title">This is title</div>
                        <div className="ratings third-ratings">
                            <span>&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                        </div>
                        <div className="mini-episode">
                            <div className="ep third-mini-episode">Episode 51</div>
                            <div className="ep second-third-mini-episode">Episode 52</div>
                        </div>
                    </div>
                </div>

                <div className="section-same">
                    <div className="cards fourth-cards imp"></div>
                    <div className="mini-info">
                        <div className="title fourth-title">This is title</div>
                        <div className="ratings fourth-ratings">
                            <span>&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                        </div>
                        <div className="mini-episode">
                            <div className="ep fourth-mini-episode">Episode 51</div>
                            <div className="ep second-fourth-mini-episode">Episode 52</div>
                        </div>
                    </div>
                </div>

                <div className="section-same">
                    <div className="cards fifth-cards imp"></div>
                    <div className="mini-info">
                        <div className="title fifth-title">This is title</div>
                        <div className="ratings fifth-ratings">
                            <span>&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                        </div>
                        <div className="mini-episode">
                            <div className="ep fifth-mini-episode">Episode 51</div>
                            <div className="ep second-fifth-mini-episode">Episode 52</div>
                        </div>
                    </div>
                </div>

                <div className="section-same">
                    <div className="cards sixth-cards imp"></div>
                    <div className="mini-info">
                        <div className="title sixth-title">This is title</div>
                        <div className="ratings sixth-ratings">
                            <span>&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                        </div>
                        <div className="mini-episode">
                            <div className="ep sixth-mini-episode">Episode 51</div>
                            <div className="ep second-sixth-mini-episode">Episode 52</div>
                        </div>
                    </div>
                </div>

                <div className="section-same">
                    <div className="cards seventh-cards imp"></div>
                    <div className="mini-info">
                        <div className="title seventh-title">This is title</div>
                        <div className="ratings seventh-ratings">
                            <span>&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                        </div>
                        <div className="mini-episode">
                            <div className="ep seventh-mini-episode">Episode 51</div>
                            <div className="ep second-seventh-mini-episode">Episode 52</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Comicstapped