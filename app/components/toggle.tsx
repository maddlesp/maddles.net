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

export default function Toggle() {
    return (
        <label className='switch-container' onClick={themeSwap}>
            <input type="checkbox"/>
        </label>
    );
}