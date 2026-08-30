//imports
import { Link } from "react-router";

//create homepage. gives homepage the cases
export default function HomePage({
    cases
}) {

    //counts how many cases are active.
    const activeCount = cases.filter(
        (caseItem) => caseItem.status === "Active"
    ).length;

    //counts how many cases are unsolved
    const unsolvedCount = cases.filter(
        (caseItem) => caseItem.status === "Unsolved"
    ).length;
//I have a fragment, I want these grouped with out adding more HTML
    return (
        <>

            {/*hero section, hero means indroduction at top of webpage.*/}
            <section className="hero">

                <div className="hero-copy">

                    <span className="eyebrow">
                        Research Organizer for the true crime freaks!
                    </span>

                    <h1>
                        Keep every detail and unhealthy fixation in one place!
                    </h1>

                    <p>
                        BreakCase is a true-crime tracking app for organizing all research, notes, and anything else one can possibly find online...probably.
                    </p>

                    <div className="hero-actions">

                        <Link
                            className="button button-primary"
                            to="/cases"
                        >
                            Open Cases
                        </Link>

                        <Link
                            className="button button-secondary"
                            to="/about"
                        >
                            How does BreakCase work?
                        </Link>

                    </div>

                </div>


            </section>

            <section className="stats-grid">


                <div className="stat-card">
                    <strong>
                        {cases.length}
                    </strong>

                    <span>
                        Tracked
                    </span>
                </div>

                <div className="stat-card">
                    <strong>
                        {activeCount}
                    </strong>

                    <span>
                        Active
                    </span>
                </div>

                <div className="stat-card">
                    <strong>
                        {unsolvedCount}
                    </strong>

                    <span>
                        Unsolved
                    </span>
                </div>

            </section>


            <section className="content-section">

                <div className="section-heading">

                    <div>
                        <span className="eyebrow">
                            Built for the weirdos that love crime, but not doing it, just reading about it.
                        </span>

                        <h2>
                            Organize all the jumbled information you come across while watching your documentaries.
                        </h2>
                    </div>

                    <Link
                        className="text-link"
                        to="/cases"
                    >
                        Browse all
                    </Link>

                </div>


                
                <div className="feature-grid">

                    
                    <article className="feature-card">

                        <span className="feature-number">
                            1
                        </span>

                        <h3>
                            Track cases
                        </h3>

                        <p>
                            Add, edit, delete, search, and filter your case records.
                        </p>

                    </article>


                    
                    <article className="feature-card">

                        <span className="feature-number">
                            2
                        </span>

                        <h3>
                            Take notes
                        </h3>

                        <p>
                            All your thoughts and ideas in one place! Jump to all the conclusions you can!
                        </p>

                    </article>


                    
                    <article className="feature-card">

                        <span className="feature-number">
                            3
                        </span>

                        <h3>
                            Stay reasonable.
                        </h3>

                        <p>
                            True crime is all fun and games, but remember to stay true and dont spread misinformation. We aim to help you keep track!
                        </p>

                    </article>

                </div>

            </section>

        </>
    );
}