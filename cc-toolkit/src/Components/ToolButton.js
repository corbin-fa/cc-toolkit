import '../App.css';

import { Link } from 'react-router-dom';

function ToolButton({ ButtonName, ButtonLink }) {
    return (
        <Link to={ButtonLink}>
            <button 
                className="tool-button" 
                // onClick={() => window.open(ButtonLink, '_blank', 'noopener,noreferrer')}
            >
                {ButtonName}
            </button>
        </Link>
    );
}

export default ToolButton;