'use client'

export default function Toggle({ dict }: { dict: {toDark: string, toLight: string}}) {
    function themeSwap() {
    const root = document.querySelector(":root");
    const theme = document.getElementById("theme");
    if (!root || !theme) return;
    if (root?.getAttribute("theme") == "dark") {
        root.setAttribute("theme", "light");
        if (theme) theme.childNodes[0].nodeValue = dict.toDark;
    } else {
        root.setAttribute("theme", "dark");
        if (theme) theme.childNodes[0].nodeValue = dict.toLight;
    }
}
    return (
        <label className='switch-container' onClick={themeSwap}>
            <input type="checkbox"/>
        </label>
    );
}