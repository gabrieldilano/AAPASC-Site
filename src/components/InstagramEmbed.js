import React, { useEffect } from "react";
import "flowbite";

function InstagramEmbed() {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "//www.instagram.com/embed.js";
        script.async = true;
        document.body.appendChild(script);
    }, []);

    return (
        <div className="flex justify-center">
            <div className="max-w-7xl w-full">
                <blockquote
                    className="instagram-media"
                    data-instgrm-permalink="https://www.instagram.com/aapasc.asu/?hl=en"
                    data-instgrm-version="14"
                    style={{
                        background: "#FFF",
                        border: "0",
                        borderRadius: "3px",
                        boxShadow: "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
                        margin: "1px",
                        maxWidth: "540px",
                        minWidth: "326px",
                        padding: "0",
                        width: "calc(100% - 2px)",
                    }}
                >
                    <div style={{ padding: "16px" }}>
                        <a
                            href="https://www.instagram.com/aapasc.asu/?hl=en"
                            style={{
                                background: "#FFFFFF",
                                lineHeight: "0",
                                padding: "0 0.625rem",
                                textDecoration: "none",
                            }}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div style={{ paddingTop: "75%", position: "relative" }}>
                                <img
                                    src="https://instagram.fbkk10-1.fna.fbcdn.net/v/t51.2885-15/e35/117832007_168276351467285_3661069374538920990_n.jpg?_nc_ht=instagram.fbkk10-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=4mCT_Q5a9IcAX8LJzOB&_nc_tp=18&oh=68602e8a5b869ea1c81bb45efc14d176&oe=5F42F38E"
                                    alt="Instagram"
                                    style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                                />
                            </div>
                        </a>
                    </div>
                </blockquote>
            </div>
        </div>
    );
}

export default InstagramEmbed;
