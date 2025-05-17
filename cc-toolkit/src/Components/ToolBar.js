import '../App.css';
import ToolButton from './ToolButton.js';

function ToolBar() {
    return (
        <div className="tool-bar">
            <ToolButton ButtonName="SAT/GPA Converter" ButtonLink="/sat-gpa-converter"/>
            <ToolButton ButtonName="SAT/ACT Converter" ButtonLink="/sat-act-converter"/>
            <ToolButton ButtonName="Am I In Range?" ButtonLink="/am-i-in-range" />
        </div>
    );
}

export default ToolBar;