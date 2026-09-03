//imports!
//useNavigate lets us move
//useParams for id in the URL
import { Link, useNavigate, useParams } from "react-router";

//useState for modal
import { useState } from "react";

//UI components
import Button from "../ui/Button";
import Modal from "../ui/Modal";
import StatusBadge from "../ui/StatusBadge";

//Case form for editing cases
import CaseForm from "../cases/CaseForm";

//Creates detail page
export default function CaseDetailsPage({ cases, onUpdateCase, onDeleteCase }) {
    //Case ID for URL
    const { caseId } = useParams();
    //navigation
    const navigate = useNavigate();
//Editing Modal
    const [isEditing, setIsEditing] =
        useState(false);

    //finds the case that matches URL ID
    const caseItem = cases.find(
        (item) => item.id === caseId
    );

    //no matches
    if (!caseItem) {
        return (
            <>
                <h1>
                    Not Found
                </h1>

                <p>
                    BreakCase doesnt know about this case, you could add it!
                </p>
                <Link
                    className="button button-primary"
                    to="/cases"
                >
                    Go Back
                </Link>
            </>
        );
    }

    //Deleteing
    function handleDelete() {
        //confirms
        const confirmed = window.confirm(
            "Delete?"
        );

        //if yes then...
        if (confirmed) {
            onDeleteCase(caseItem.id);

            //done deleting, goes back.
            navigate("/cases");
        }
    }

    return (
        <>
            <Link
                className="back-link"
                to="/cases"
            >
                Back
            </Link>

            <div className="detail-header">

                <div>
                    <div className="detail-meta">
                        <StatusBadge
                            status={caseItem.status}
                        />

                        <span>
                            {caseItem.category}
                        </span>
                    </div>

                    <h1>
                        {caseItem.title}
                    </h1>  

                    <p className="muted">
                        {caseItem.location}
                        {" · "}
                        {caseItem.date}
                    </p>
                </div>

                <div className="detail-actions">

                    <Button
                        onClick={() =>
                            setIsEditing(true)
                        }
                    >
                        Edit
                    </Button>

                    <Button
                        variant="danger"
                        onClick={handleDelete}
                    >
                        Delete
                    </Button>
                </div>
            </div>

            <div className="detail-grid">

                <article className="detail-panel">
                    <h2>
                        Summary
                    </h2>

                    <p>
                        {caseItem.summary}
                    </p>
                </article>

                <article className="detail-panel">
                    <h2>
                        Research Notes
                    </h2>

                    <p>
                        {caseItem.notes ||
                            "No notes yet."}
                    </p>
                </article>

                <article className="detail-panel">
                    <h2>
                        Tags
                    </h2>

                    <div className="tag-list">

                        {caseItem.tags.map(
                            (tag) => (
                                <span
                                    className="tag"
                                    key={tag}
                                >
                                    #{tag}
                                </span>
                            )
                        )}
                    </div>
                </article>
            </div>

            {isEditing && (
                <Modal
                    title="Edit Case"
                    onClose={() =>
                        setIsEditing(false)
                    }
                >
                    <CaseForm
                        initialCase={caseItem}

                        //updates after editing.
                        onSubmit={(updatedCase) => {
                            onUpdateCase(updatedCase);
                            setIsEditing(false);
                        }}

                        //closes modal when cancel
                        onCancel={() =>
                            setIsEditing(false)
                        }
                    />
                </Modal>
            )}
        </>
    );
}