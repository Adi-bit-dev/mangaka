import React from "react";
import { useEffect } from "react";
import "./rightStyles.css";
import "./cards.css";

function Right() {
    useEffect(() => {
        const navEntries = performance.getEntriesByType("navigation");
        const isReload = navEntries.length > 0 && navEntries[0].type === "reload";

        if (isReload) {
            const cards = document.querySelectorAll('.cards');

            cards.forEach((card) => {
                card.classList.add('slideup-animation');
            });

            // Remove the animation class after it finishes
            setTimeout(() => {
                cards.forEach((card) => {
                    card.classList.remove('slideup-animation');
                });
            }, 600); // Match with your animation duration (0.5s)
        }
    }, []);

    return (
        <div className="right-container">

            <div className="latest-updates">
                <div className="title"><div>Trending Now</div></div>

                <div className="up first-up">
                    <div className="cards first-card first-section-cards new testing">
                        <div className="overlay">
                            <div className="fst">
                                <div className="manga-title">Attack on Titan</div>
                            </div>
                            <div className="lst">
                                <div>★★★★☆</div>
                            </div>
                        </div>
                    </div>

                    <div className="cards first-card first-section-cards testing">
                        <div className="overlay">
                            <div className="fst">
                                <div className="manga-title">Attack on Titan</div>
                            </div>
                            <div className="lst">
                                <div>★★★★☆</div>
                            </div>
                        </div>
                    </div>

                    <div className="cards first-card first-section-cards">
                        <div className="overlay">
                            <div className="fst">
                                <div className="manga-title">Attack on Titan</div>
                            </div>
                            <div className="lst">
                                <div>★★★★☆</div>
                            </div>
                        </div>
                    </div>

                    <div className="cards first-card first-section-cards">
                        <div className="overlay">
                            <div className="fst">
                                <div className="manga-title">Attack on Titan</div>
                            </div>
                            <div className="lst">
                                <div>★★★★☆</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="popular">
                <div className="title"><div>New Releases</div></div>
                <div className="up special-second overflow-x">
                    <div className="cards new special">
                        <div className="new-cover"></div>
                        <div className="card-title">Alya sometimes hides her feelings in Russian</div>
                    </div>

                    <div className="cards new scnd special">
                        <div className="new-cover"></div>
                        <div className="card-title">The count's seceret maid</div>
                    </div>

                    <div className="cards new special">
                        <div className="new-cover"></div>
                        <div className="card-title">Alya sometimes hides her feelings in Russian</div>
                    </div>

                    <div className="cards new scnd special">
                        <div className="new-cover"></div>
                        <div className="card-title">The count's seceret maid</div>
                    </div>
                </div>
            </div>

            <div className="popular padding-top">
                <div className="title"><div>Popular</div></div>
                <div className="up vertical">
                    <div className="section-lst">
                        <div className="card-main main-first-card"></div>
                        <div className="content">
                            <div className="title-last">
                                <div>That time i got reincarnated as a slime</div>
                                <div>★★★★☆</div>
                            </div>
                            <div className="episodes">
                                <div className="line-text">
                                    <div>Episode 1</div>
                                </div>
                                <div className="line-text">
                                    <div>Episode 2</div>
                                </div>
                                <div className="line-text">
                                    <div>Episode 2</div>
                                </div>
                                <div className="line-text">
                                    <div>Episode 2</div>
                                </div>
                                <div className="line-text">
                                    <div>Episode 2</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Right