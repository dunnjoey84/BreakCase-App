///importing
import { useState } from "react";
import Button from "../ui/Button";

//empty starter form
const initialForm = {
    title: "",
    location: "",
    date: "",
    status: "",
    category: "",
    summary: "",
    notes: "",
    tags: ""
};

//checks all fields are filled
function validate(form) {

    //empty object for errors (like a bad cookie jar)
    const errors = {};

    //case title is at least 3 characters with a trim so its not ugly
    if (form.title.trim().length < 3) {
        errors.title = "Enter at least 3 characters.";
    }

    //location needed
    if (!form.location.trim()) {
        errors.location = "Location is needed.";
    }

    //date needed
    if (!form.date) {
        errors.date = "Choose a case date.";
    }

    //status needed
    if (!form.status) {
        errors.status = "Status?";
    }

    //category needed
    if (!form.category) {
        errors.category = "What type of case is this?";
    }

    //summary minimum
    if (form.summary.trim().length < 10) {
        errors.summary = "Summary must be at least 10 characters.";
    }

    //returns the uhohs
    return errors;
}

//create the case form, empty form, what to do on submit, what to do on cancel
export default function CaseForm({
    initialCase,
    onSubmit,
    onCancel
}) {

    //allows you to change the form (the ? check to see if the form has a value, and if it doesnt it returns the starting form)
    const [form, setForm] = useState(
        initialCase
            ? {
                ...initialCase,

                //changes tags to string to show in input
                tags: initialCase.tags.join(", ")
            }
            : initialForm
    );

    //errors
    const [errors, setErrors] = useState({});

    //change handler, gets the change and updates the part of the form that was changed.
    function handleChange(event) {

        //gets the change
        const { name, value } = event.target;

        //updates
        setForm((current) => ({
            ...current,
            [name]: value
        }));

        //if error on update, clears it
        if (errors[name]) {
            setErrors((current) => ({
                ...current,
                [name]: ""
            }));
        }
    }

    //Submit
    function handleSubmit(event) {

        //I dont want a refresh
        event.preventDefault();

        //This checks if you messed up. sends new form to validation function
        const validationErrors = validate(form);

        //Checks if at least one problem was found, object.keys makes the errors into an array, and if there is at least one (.lenght > 0)
        //the return then stops form if errors are found
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        //if no errors, submits, ...form copies  
        onSubmit({
            ...form,

            //removes extra spaces
            title: form.title.trim(),
            location: form.location.trim(),
            summary: form.summary.trim(),
            notes: form.notes.trim(),

            //turns the tags from string to array. Split seperates commas, map goes through and trims each tag, and boolean gets rid of empty
            tags: form.tags
                .split(",")
                .map((tag) => tag.trim())
                .filter(Boolean)
        });
    }

    return (
        <form
            className="form-grid"
            onSubmit={handleSubmit}
        >

            <label>
                Case title

                <input
                    name="title"
                    value={form.title}
                    onChange={handleChange}
                    placeholder="Case title"
                />

                {errors.title && (
                    <span className="field-error">
                        {errors.title}
                    </span>
                )}
            </label>

            <label>
                Location

                <input
                    name="location"
                    value={form.location}
                    onChange={handleChange}
                    placeholder="City, state"
                />

                {errors.location && (
                    <span className="field-error">
                        {errors.location}
                    </span>
                )}
            </label>

            <label>
                Case date

                <input
                    name="date"
                    type="date"
                    value={form.date}
                    onChange={handleChange}
                />

                {errors.date && (
                    <span className="field-error">
                        {errors.date}
                    </span>
                )}
            </label>

            <label>
                Status

                <select
                    name="status"
                    value={form.status}
                    onChange={handleChange}
                >
                    <option value="">
                        Choose a status
                    </option>

                    <option value="Unsolved">
                        Unsolved
                    </option>

                    <option value="Active">
                        Active
                    </option>

                    <option value="Closed">
                        Closed
                    </option>
                </select>

                {errors.status && (
                    <span className="field-error">
                        {errors.status}
                    </span>
                )}
            </label>

            <label>
                Category

                <select
                    name="category"
                    value={form.category}
                    onChange={handleChange}
                >
                    <option value="">
                        Choose a category
                    </option>

                    <option value="Missing Person">
                        Missing Person
                    </option>

                    <option value="Homicide">
                        Homicide
                    </option>

                    <option value="Conspiracy">
                        Conspiracy
                    </option>

                    <option value="Other">
                        Other
                    </option>
                </select>

                {errors.category && (
                    <span className="field-error">
                        {errors.category}
                    </span>
                )}
            </label>

            <label>
                Tags

                <input
                    name="tags"
                    value={form.tags}
                    onChange={handleChange}
                    placeholder="timeline, evidence"
                />
            </label>

            <label>
                Summary

                <textarea
                    name="summary"
                    rows="4"
                    value={form.summary}
                    onChange={handleChange}
                    placeholder="Describe the case..."
                />

                {errors.summary && (
                    <span className="field-error">
                        {errors.summary}
                    </span>
                )}
            </label>

            <label>
                Research notes

                <textarea
                    name="notes"
                    rows="5"
                    value={form.notes}
                    onChange={handleChange}
                    placeholder="Research notes..."
                />
            </label>

            <div className="form-actions">

                <Button type="submit">
                    {initialCase
                        ? "Save Changes"
                        : "Add Case"}
                </Button>

                {onCancel && (
                    <Button
                        variant="secondary"
                        onClick={onCancel}
                    >
                        Cancel
                    </Button>
                )}

            </div>
        </form>
    );
}