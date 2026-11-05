import Section from "../components/section";
import Gallery from "../components/sections/gallery";
import Projects from "../components/sections/projects/projects";
import Toggle from "../components/toggle";
import { lang } from 'next/root-params';
import { getDictionary } from "../dictionary/dictionaries";
import { redirect } from "next/navigation";
import Link from "next/link";
import { generateStaticParams } from "./layout";

export default async function Home() {
    const l = await lang();
    if (!(await generateStaticParams()).map((p) => p.lang).includes(l))
        redirect('/en');
    
    const dict = await getDictionary(l);
    return (
        <>
        <div id="blurb">
            <div id="header">
                <h1>
                    {dict.header}
                </h1>
                <p>{dict.langSuggest.label}</p>
                <span id="lang-links">
                    {dict.langSuggest.langs.map((lang, idx) => (
                        <>
                        <Link className={lang.fontOverride} href={lang.href} key={lang.href}>
                            {lang.text}
                        </Link>
                        {idx < dict.langSuggest.langs.length - 1 && <span className='sitelen-lasin'> | </span>}
                        </>
                    ))}
                </span>
            </div>
            <div id="theme">
                {dict.theme.toDark}
                <Toggle dict={dict.theme}/>
            </div>
            <p>
                {dict.about.checkin}<br/>
                {dict.about.greeting}<br/>
                {dict.about.blurb}
            </p>
            <p id="contact">{dict.contact.label}: <a href={`mailto:${dict.contact.email}`}>{l == 'sp' ? dict.contact.email.split('').map(c => '\\'+c).join('') : dict.contact.email}</a></p>
            <p>{dict.more}</p>
        </div>
        {/* <div id='sections'>
                <Section title={dict.sections.gallery.title}>
                    <Gallery/>
                </Section>
                <Section title={dict.sections.projects.title}>
                    <Projects/>
                    <></>
                </Section>
                <Section title={dict.sections.playlist.title}>
                    <Playlist/>
                </Section>
        </div> */}
        </>
    );
}