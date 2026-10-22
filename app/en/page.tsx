'use client'

function themeSwap() {
    const root = document.querySelector(":root");
    const theme = document.getElementById("theme");
    if (!root || !theme) return;
    if (root?.getAttribute("theme") == "dark") {
        root.setAttribute("theme", "light");
        if (theme) theme.childNodes[0].nodeValue = "Bright lights hurt your eyes?";
    } else {
        root.setAttribute("theme", "dark");
        if (theme) theme.childNodes[0].nodeValue = "Do you like bright lights?";
    }
}

export default function En() {
    return (
        <div id="blurb">
            <div id="header">
                <h1>
                    HELLO!
                </h1>
                <h2>
                    sina toki ala toki e toki? tawa <a href="/tp">ni lipu pi toki pona!</a>
                </h2>
            </div>
            <div id="theme">
                Bright lights hurt your eyes?
                <label className='switch-container' onClick={themeSwap}>
                    <input type="checkbox"/>
                </label>
            </div>
            <p>
                All good? Sick.<br/>
                Hey there! o/<br/>
                I&#39;m Maddy. Welcome to my website! I manage a few things including: images, music, and a few projects made public!
            </p>
            <p id="contact">Contact: <a href="mailto:hello@maddles.net">hello@maddles.net</a></p>
            <p>More to come soon!</p>
        </div>
    );
}