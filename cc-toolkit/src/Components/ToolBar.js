import '../App.css';
import ToolButton from './ToolButton.js';

function ToolBar() {
    return (
        <div className="tool-bar">
            <ToolButton ButtonName="SAT/GPA Converter" ButtonLink="https://blog.prepscholar.com/sat-gpa-conversion-table"/>
            <ToolButton ButtonName="SAT/ACT Converter" ButtonLink="https://www.act.org/content/act/en/products-and-services/the-act/scores/act-sat-concordance.html"/>
            <ToolButton ButtonName="Am I In Range?" ButtonLink="about:blank" />
        </div>
    );
}

export default ToolBar;