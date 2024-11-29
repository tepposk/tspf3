export default function Arrow(props) {

    const handleClick = () => {
        props.target.scrollIntoView({behavior: 'smooth'});
    };

    return (
        <div className="arrow-wrapper">
            <svg id={props.id} className="arrow" width="100%" height="100%" viewBox="0 0 36 64" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" xmlnsserif="http://www.serif.com/" style={{ fillRule: 'evenodd', clipRule: 'evenodd', strokeLinecap: 'round', strokeLinejoin: 'round', strokeMiterlimit: 1.5 }} onClick={() => handleClick()}>
                <g transform="matrix(1,0,0,1,-815.184,-888.183)">
                    <g transform="matrix(0.794933,0,0,0.820566,181.055,195.079)">
                        <path d="M800,900L820,920L840,900" style={{ fill: 'none', stroke: 'white', strokeWidth: 4.5 + 'px', }} />
                    </g>
                    <g transform="matrix(1,0,0,0.75,12.8996,260)">
                        <path d="M820,920L820,840" style={{ fill: 'none', stroke: 'white', strokeWidth: 4.11 + 'px' }} />
                    </g>
                </g>
            </svg>
        </div>

    )
};