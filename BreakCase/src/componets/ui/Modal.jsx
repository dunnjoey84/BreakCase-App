//Id like to create a pop up window or modal so if you want to delete a case its a pop up (thanks for the help on this one Dad)

//import use effects
import { useEffect } from "react";
//and button for closing button on modal
import Button from "./Button";

//creating modal component
export default function Modal({ title, children, onClose }) {
    //sets title, label, and what to do when modal should close. 
    //now I set up "when modal is active"
    useEffect(() => {
        function handleKeyDown(event) {
            if (event.key === "Escape") {
                onClose();
            }   
        } //I just added the ability to hit escape to exit modal, by having an event and then checking if the key pressed is the escape key, if so then close
        
        //now adding event listener for keydown (telling which event I care about) then says which funciton to run when it happens
        document.addEventListener("keydown", handleKeyDown);
        //ending event listener when done
        return () => {document.removeEventListener("keydown", handleKeyDown);
        };
    }, [onClose]);

    //actually HTML for Modal
return (
  // create backdrop for design
  <div className="modal-backdrop">

    <section
      className="modal"
      onMouseDown={(event) => event.stopPropagation()}
    >

      <div className="modal-header">
        <h2 id="modal-title">{title}</h2>

        <Button
      variant="ghost"
      onClick={onClose}
    >
      X
    </Button>
      </div>
    </section>

  </div>
)}
// so here I used something i found, the stop propagation, I read that this will stop the click on the modal from doing unintended things.
//then I added the close button, and set its variant to ghost for my ccs. I also added the X to make it an X button. 