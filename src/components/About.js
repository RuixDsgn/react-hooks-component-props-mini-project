import React from "react";
import blogData from "../data/blog";

function About({image = "https://via.placeholder.com/215", about}) {
    return (
        <main>
            <aside>
                <img src={image} alt="blog logo"></img>
                <p>{about}</p>
            </aside>
        </main>
    )
}

export default About;