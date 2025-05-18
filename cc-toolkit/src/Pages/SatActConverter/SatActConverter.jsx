import "./SatActConverter.css";
import { Link } from 'react-router-dom';
import SatActInput from "./components/SatActInput.jsx";
import Button from 'react-bootstrap/Button';

function SatActConverter() {
    return (
    <div className="sat_act_converter_page">
        <Link to="/" style={{margin: "8px", position: "absolute"}}>
        <Button variant="primary">Return Home</Button>
        </Link>
        <h1>SAT/ACT/GPA Converter</h1>
        <p margin={{margin: "2px"}}>The conversions used for this tool can be found at <a href="https://www.act.org/content/act/en/products-and-services/the-act/scores/act-sat-concordance.html">act.org</a></p>
        <SatActInput />
    </div>

    );
}

export default SatActConverter;