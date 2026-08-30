//imports, use memo lets us filter!
import { useMemo, useState } from "react";
import CaseCard from "../components/cases/CaseCard";
import CaseForm from "../components/cases/CaseForm";
import CaseTable from "../components/cases/CaseTable";
import Button from "../components/ui/Button";
import Modal from "../components/ui/Modal";

//create our cases page
export default function CasesPage({
    cases,
    onAddCase,
    onUpdateCase,
    onDeleteCase
}) {

    //keeps track of search bar
    const [query, setQuery] = useState("");

    //keeps track of status for search, starts on all
    const [statusFilter, setStatusFilter] = useState("All");

    //keeps track of if its cards or table, starts on card
    const [view, setView] = useState("cards");

    //keeps track of modal
    const [isFormOpen, setIsFormOpen] = useState(false);

    //keeps track of editing, with null meaning not editing
    const [editingCase, setEditingCase] = useState(null);


    //creates the search results with useMemo
    const filteredCases = useMemo(() => {

        //result style
        const normalizedQuery = query.toLowerCase().trim();

        //filter through cases
        return cases.filter((caseItem) => {

            //puts all the searched info together with styling (lower case)
            const searchableText = [
                caseItem.title,
                caseItem.location,
                caseItem.category,
                ...caseItem.tags
            ].join(" ").toLowerCase();

            //checks if result matches search
            const matchesQuery =
                !normalizedQuery ||
                searchableText.includes(normalizedQuery);

            //check if status matches
            const matchesStatus =
                statusFilter === "All" ||
                caseItem.status === statusFilter;

            //keeps cases that match search and status
            return matchesQuery && matchesStatus;
        });

    }, [cases, query, statusFilter]);


    //opens add case form
    function openAddForm() {
        setEditingCase(null);
        setIsFormOpen(true);
    }


    //opens form for editing
    function openEditForm(caseItem) {
        setEditingCase(caseItem);
        setIsFormOpen(true);
    }


    //submitting
    function handleSubmit(caseItem) {

        //if editing, update
        if (editingCase) {
            onUpdateCase(caseItem);
        }

        //otherwise, add new
        else {
            onAddCase(caseItem);
        }

        //close form
        setIsFormOpen(false);

        //stops editing
        setEditingCase(null);
    }


    //deleting
    function handleDelete(caseId) {

        //double checking since we all be misclicking
        const confirmed = window.confirm("Delete this case?");

        //if yes, delete.
        if (confirmed) {
            onDeleteCase(caseId);
        }
    }


    return (
        <>
            <section className="page-heading">

                <div>

                    <span className="eyebrow">
                        Research
                    </span>

                    <h1>
                        My Cases
                    </h1>

                    <p>
                        Search and filter cases, edit or delete, even adding new ones when one just obsession just isnt enough!
                    </p>

                </div>

                <Button onClick={openAddForm}>
                     Add
                </Button>

            </section>

            <section className="toolbar">

                <div className="search-field">

                    <input
                        value={query}
                        onChange={(event) =>
                            setQuery(event.target.value)
                        }
                        placeholder="What are you looking for?"
                    />

                </div>


                
                <div>

                    <select
                        value={statusFilter}
                        onChange={(event) =>
                            setStatusFilter(event.target.value)
                        }
                    >
                        <option>All</option>
                        <option>Active</option>
                        <option>Unsolved</option>
                        <option>Closed</option>
                    </select>

                </div>

                <div className="view-toggle">

                    <Button
                        variant={view === "cards"
                                ? "primary"
                                : "secondary"
                        }
                        onClick={() =>
                            setView("cards")
                        }
                    >
                        Cards
                    </Button>

                    <Button
                        variant={view === "table"
                                ? "primary"
                                : "secondary"
                        }
                        onClick={() =>
                            setView("table")
                        }
                    >
                        Table
                    </Button>

                </div>

            </section>

            <section>

                {filteredCases.length === 0 ? (

                    <div className="empty-state">

                        <h2>
                            No matches
                        </h2>

                        <p>
                            Try again or add your own case!
                        </p>

                    </div>

                )

                : view === "table" ? (

                    <CaseTable
                        cases={filteredCases}
                    />

                )

                : (

                    <div className="case-grid">

                        {filteredCases.map((caseItem) => (

                            <div
                                key={caseItem.id}
                                className="case-card-wrap"
                            >

                                <CaseCard
                                    caseItem={caseItem}
                                    onDelete={handleDelete}
                                />

                                <Button
                                    variant="secondary"
                                    onClick={() =>
                                        openEditForm(caseItem)
                                    }
                                >
                                    Edit Case
                                </Button>

                            </div>

                        ))}

                    </div>

                )}

            </section>


            {isFormOpen && (

                <Modal
                    title={
                        editingCase
                            ? "Edit Case"
                            : "Add Case"
                    }
                    onClose={() =>
                        setIsFormOpen(false)
                    }
                >

                    <CaseForm
                        initialCase={editingCase}
                        onSubmit={handleSubmit}
                        onCancel={() =>
                            setIsFormOpen(false)
                        }
                    />

                </Modal>

            )}

        </>
    );
}