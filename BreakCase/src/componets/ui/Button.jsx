//going to make a button componet to reuse!

export default function Button({children, //children is prop, fill in for whatever I put in the tags
    variant = "primary", //another prop, sets it as primary style
    type = "button", //sets button type to default
    onClick, //handles click events, tells it what to do when clicked
    className = "" //sets class for css
}) {
    return ( //return says what JSX the component will render, then creates the HTML button with "<button...>"
        <button className={`button button-${variant} ${className}`} type={type} onClick={onClick}>  
            {children} 
        </button> //Template Literal, assigns button class then allows it to be whatever variant, used for my styling for add, edit, and delete. Then added type and class,
        //then added children to label buttons later.
    );
}
