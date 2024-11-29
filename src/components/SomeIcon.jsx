export default function SomeIcon(props) {

    return (
        <a href={props.link} target="_blank" className="some-icon" >
            <img src={props.icon} alt={props.name} />
        </a>
    )
};