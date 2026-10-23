import Section from "../components/section";
import Gallery from "../components/sections/gallery";
import Projects from "../components/sections/projects";
import Toggle from "../components/toggle";

export default function En() {
    return (
        <>
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
                <Toggle/>
            </div>
            <p>
                All good? Sick.<br/>
                Hey there! o/<br/>
                I&#39;m Maddy. Welcome to my website! I manage a few things including: images, music, and a few projects made public!
            </p>
            <p id="contact">Contact: <a href="mailto:hello@maddles.net">hello@maddles.net</a></p>
            <p>More to come soon!</p>
        </div>
        {/* <div id='sections'>
                <Section title="Images">
                    <Gallery/>
                </Section>
                <Section title="Projects">
                    <Projects/>
                </Section>
        </div> */}
        </>
    );
}