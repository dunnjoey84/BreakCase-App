//while working through the code I am going to be very descriptive with comments to make sure you and I both dont get lost!

//imports! Link navitages through app
import { Link } from "react-router";

//button and badge imports
import Button from "../ui/Button"
import StatusBadge from "../ui/StatusBadge"

//create casecards, caseItem is a prop fo what its recieving, ondelete is a prop for handling delete
export default function CaseCard({
    caseItem,
    onDelete
}) {
    return (
        <article className="case-card">
            <div className="case-card-top">
                <StatusBadge status={caseItem.status} />
                <span className="case-category">
                    {caseItem.category}
                </span>"
            </div>
            
            <h3>{caseItem.title}</h3>

            <p className="muted">
                {caseItem.location} - {caseItem.date}
            </p>
            <p>{caseItem.summary}</p>
            <div className="tag-list">
                {caseItem.tags.map((tag) => (
                    <span className="tag"
                    key={tag}>
                        #{tag}
                    </span>
                ))}
            </div>

                <div className="card-actions">
                    <Link className="button button-primary" to={`/cases/${caseItem.id}`}>
                        View Case
                    </Link>

                    <Button variant="danger" onClick={() => onDelete(caseItem.id)}>
                        Delete
                    </Button>
                </div>

        </article>
    ) //So here I use Article, I googled, and its bascially div, but allows it to be one piece of info for the browser
    //then I used div for my structure inside the article.
    //for the tags, I use an array of tags, and they have each of them have a unique ID for the map function. Then the #{tag} is to display the tag
    //Then I set up a case card actions area, with a Link that I wanted to be a button. I then link it to the case using the ID.
    //I labeled the link to view the case. then I create the delete button, using the case id temp literal to delete the right one.
}


