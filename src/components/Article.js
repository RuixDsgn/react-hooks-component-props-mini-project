import React from "react";

function Article({ title, date = "January 1, 1970", minutes, preview }) {
    // const under30Mins = () => {
    //     return (
    //         "☕️☕️"
    //     )
    // }

    // const over30Mins = () => {
    //     return (
    //         "🍱"
    //     )
    // }
    return (
        <article>
            <h3>{title}</h3>
            <small>{date} • {minutes > 5 ? "☕️☕️" : "☕️" } {minutes} min read</small>
            <p>{preview}</p>
        </article>
    )
}

export default Article;