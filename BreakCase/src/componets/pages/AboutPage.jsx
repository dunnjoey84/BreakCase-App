//The info page about BreakCase
export default function AboutPage() {
    return (
        <>
            <section className="page-heading">
                <div>
                    <span className="eyebrow">
                        About BreakCase
                    </span>

                    <h1>
                        For the average true crime enjoyer, or the real fanatic.
                    </h1>

                    <p>
                        BreakCase is an app that uses everything we have learned in class and some things ive googled to put together a good
                        system for researching true crime. I love true crime, and when I hear podcasts or watch documentaries, I tend to dive
                        into research. BreakCase helps by making sure all the information anyone finds isnt instantly info-dumped. You can wow
                        all your friends and family with your high level true crime knowledge. I promise they will all be impressed. For sure.
                    </p>
                </div>
            </section>

            <div className="about-grid">

                <article className="info-panel">
                    <h2>
                        What BreakCase Does
                    </h2>

                    <ul>
                        <li>Create case records</li>
                        <li>Edit existing cases</li>
                        <li>Delete cases</li>
                        <li>Search cases</li>
                        <li>Filter cases</li>
                        <li>Store info locally, cause I dunno backend stuff yet</li>
                    </ul>
                </article>

                <article className="info-panel">
                    <h2>
                        Ethics
                    </h2>

                    <ul>
                        <li>Use reputable sources.</li>
                        <li>FACTS, not allegations.</li>
                        <li>Keep private info private.</li>
                        <li>Respect victims and families. always.</li>
                        <li>
                            Do not accuse people, I promise this app doesnt make you a cop.
                        </li>
                    </ul>
                </article>

                <article className="info-panel">
                    <h2>
                        Data Storage
                    </h2>

                    <p>
                        Cases records are stored locally because I have pretty much no knowledge of backend development....Yet. I also really
                        hope I remember to come change this in unit 2.
                    </p>
                </article>

                <article className="info-panel">
                    <h2>
                        Goals
                    </h2>

                    <p>
                        The main goal I have for this app is going to be applied in unit 2, which is back end development. until then all 
                        features will be locally stored, but will "work" as if they had backend support.
                    </p>
                </article>

            </div>
        </>
    );
}