import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHouseChimney } from "@fortawesome/free-solid-svg-icons";

export default function Icon({ name, size = 24, className }) {
    return (
        // <svg
        //     className={className}
        //     width={size}
        //     height={size}
        //     viewBox="0 0 24 24"
        //     xmlns="http://www.w3.org/2000/svg"
        // >
        //     {icons[name]}
        // </svg>
        <h1 style={{ fontSize: '34px' }}>
            {/* <FontAwesomeIcon icon={faHouseChimney} /> */}
            <FontAwesomeIcon
                icon="fa-solid fa-house-chimney"
                // style={{ fontSize: '100px', color: 'burlywood' }}
                size="2x"
                color="burlywood"
             /> Home
        </h1>
    )
}