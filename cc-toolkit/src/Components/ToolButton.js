import '../App.css';

function ToolButton({ ButtonName, ButtonLink }) {
    return (
        <button 
            className="tool-button" 
            onClick={() => window.open(ButtonLink, '_blank', 'noopener,noreferrer')}
        >
            {ButtonName}
        </button>
    );
}

export default ToolButton;