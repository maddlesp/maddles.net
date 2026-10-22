'use client'

function themeSwap() {
    const root = document.querySelector(":root");
    const theme = document.getElementById("theme");
    if (!root || !theme) return;
    if (root?.getAttribute("theme") == "dark") {
        root.setAttribute("theme", "light");
        if (theme) theme.childNodes[0].nodeValue = "sina pona ala pona e suno suli?";
    } else {
        root.setAttribute("theme", "dark");
        if (theme) theme.childNodes[0].nodeValue = "suno suli li pakala ala pakala e oko sina?";
    }
}

export default function En() {
    return (
        <div id="blurb">
            <div id="header">
                <h1>
                    TOKI!
                </h1>
                <h2>
                    Don&#39;t speak toki pona? Go to the <a href="/en">english version of this site.</a>
                </h2>
            </div>
            <div id="theme">
                suno suli li pakala ala pakala e oko sina?
                <label className='switch-container' onClick={themeSwap}>
                    <input type="checkbox"/>
                </label>
            </div>
            <p>
                pona ala pona ale? pona a.<br/>
                toki lon! o/<br/>
                mi jan Masilen. kama pona tawa lipu mi. mi jo e ni mute. ni li sitelen li kalama li poki pali!
            </p>
            <p id="contact">ilo toki: <a href="mailto:hello@maddles.net">hello@maddles.net</a></p>
            <p>mi kama pana e mute lon kama.</p>
        </div>
    );
}