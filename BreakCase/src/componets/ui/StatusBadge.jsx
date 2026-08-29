//creating export
export default function StatusBadge({ status }) {
   //Creating a variable and switching it to lowercase and using hypons for css styling usage.
    const className = status.toLowerCase().replace(" ", "-");
    
    //the return, with a span/classes for css to show different case status...also another template Literal, makes it so status = "open" would be status-open
    return(
        <span className={`status status-${className}`}>
            {status}
        </span>
    );
}