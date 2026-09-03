
//Id like to create a pop up window or modal so if you want to delete a case its a pop up (thanks for the help on this one Dad)

//import useEffect
import { useEffect } from "react";

//button for closing button on modal
import Button from "./Button";

//creating modal component
//title is the title at the top
//children is whatever we put inside the Modal
//onClose tells the modal how to close
export default function Modal({ title, children, onClose }) {

    //when modal is active
    useEffect(() => {

        //checks for keyboard presses
        function handleKeyDown(event) {

            //if escape is pressed, close modal
            if (event.key === "Escape") {
                onClose();
            }
        }

        //listen for key presses
        document.addEventListener("keydown", handleKeyDown);

        //remove event listener when modal is done
        return () => {
            document.removeEventListener(
                "keydown",
                handleKeyDown
            );
        };

    }, [onClose]);


    //actual HTML for modal
    return (

        //backdrop behind modal
        //clicking backdrop will close modal
        <div
            className="modal-backdrop"
            onMouseDown={onClose}
        >

            <section
                className="modal"

                //stops clicking inside modal
                //from also clicking the backdrop
                onMouseDown={(event) =>
                    event.stopPropagation()
                }
            >

                <div className="modal-header">

                    <h2 id="modal-title">
                        {title}
                    </h2>

                    <Button
                        variant="ghost"
                        onClick={onClose}
                    >
                        X
                    </Button>

                </div>


                {children}

            </section>

        </div>
    );
}

