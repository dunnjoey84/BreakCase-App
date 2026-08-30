//importing!
import { Link } from "react-router";
import StatusBadge from "../ui/StatusBadge";

//Create casetable, displays list of cases
export default function CaseTable({
    cases
}) {
    return (
        //cool wrap around the table for css
        <div className="table-wrapper">

            <table>
                {/*table head, creates the names at the top of each column, thank you W3 schools*/}
                <thead>
                    <tr>
                        <th>Case</th>
                        <th>Location</th>
                        <th>Date</th>
                        <th>Status</th>
                    </tr>
                </thead>

                <tbody>

                    {/*map through our cases, one each section*/}
                    {cases.map((caseItem) => (
                        <tr key={caseItem.id}>

                            {/*case title with navigation*/}
                            <td>
                                <Link
                                    className="table-link"
                                    to={`/cases/${caseItem.id}`}
                                >
                                    {caseItem.title}
                                </Link>
                            </td>

                            {/*location*/}
                            <td>
                                {caseItem.location}
                            </td>

                            {/*date*/}
                            <td>
                                {caseItem.date}
                            </td>

                            {/*Case Status*/}
                            <td>
                                <StatusBadge
                                    status={caseItem.status}
                                />
                            </td>

                        </tr>
                    ))}

                </tbody>

            </table>

        </div>
    );
}