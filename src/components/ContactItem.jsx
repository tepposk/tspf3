export default function ContactItem(props) {

    return (
                <p id={`contact-${props.name}`} className="contact-info"><img src={props.icon} id={`${props.name}-icon`} alt={props.name} className="ns" />{props.content}</p> 
    )
};