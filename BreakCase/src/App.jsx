//importing! 
import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router";
import Header from "./componets/layout/Header";
import Footer from "./componets/layout/Footer";
import HomePage from "./pages/HomePage";
import CasesPage from "./pages/CasesPage";
import CaseDetailsPage from "./pages/CaseDetailsPage";
import AboutPage from "./pages/AboutPage";
import { seedCases } from "./data/seedCases";

//local storage name
const STORAGE_KEY = "break-case-cases";

//checking storage
function loadCases() {
    try {
        //grabs saved cases
        const savedCases =
            localStorage.getItem(STORAGE_KEY);

        //uses saved causes, if none, then seed data.
        return savedCases
            ? JSON.parse(savedCases)
            : seedCases;

    } catch (error) {
        //load error
        console.error(
            "loading failed",
            error
        );
        return seedCases;
    }
}

export default function App() {

    //all cases in useState
    const [cases, setCases] =
        useState(loadCases);

    //case array change
    useEffect(() => {
        //saves cases
        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(cases)
        );
    }, [cases]);

    //adding new
    function addCase(newCase) {
        setCases((currentCases) => [
            {
                ...newCase,

                //using something I found to generate a random id for new cases, so if you delete you dont get a duplicate case id
                id: crypto.randomUUID()
            },
            ...currentCases
        ]);
    }

    //updating
    function updateCase(updatedCase) {
        setCases((currentCases) =>
            currentCases.map((caseItem) =>
                //if same Id, replace old with new.
                caseItem.id === updatedCase.id
                    ? updatedCase
                    : caseItem
            )
        );
    }

    //deleting
    function deleteCase(caseId) {
        setCases((currentCases) =>
            currentCases.filter(
                (caseItem) =>
                    //keep all except the one with the matching id
                    caseItem.id !== caseId
            )
        );
    }

    return (
        <div className="app">

            <Header />
            <main className="site-main">
                <Routes>
                    <Route
                        path="/"
                        element={
                            <HomePage
                                cases={cases}
                            />
                        }
                    />
                    <Route
                        path="/cases"
                        element={
                            <CasesPage
                                cases={cases}
                                onAddCase={addCase}
                                onUpdateCase={updateCase}
                                onDeleteCase={deleteCase}
                            />
                        }
                    />
                    <Route
                        path="/cases/:caseId"
                        element={
                            <CaseDetailsPage
                                cases={cases}
                                onUpdateCase={updateCase}
                                onDeleteCase={deleteCase}
                            />
                        }
                    />
                    <Route
                        path="/about"
                        element={
                            <AboutPage />
                        }
                    />
                    <Route
                        path="*"
                        element={
                            <Navigate
                                to="/"
                                replace
                            />
                        }
                    />

                </Routes>
            </main>
            <Footer />

        </div>
    );
}