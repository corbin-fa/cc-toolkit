import "./SatActConverter.css";

import SatActInput from "./components/SatActInput.jsx";

function SatActConverter() {
    return (
    <div className="sat_act_converter_page">
        <h1>SatActConverter</h1>
        <p margin={{margin: "2px"}}>The conversions used for this tool can be found at <a href="https://www.act.org/content/act/en/products-and-services/the-act/scores/act-sat-concordance.html">act.org</a></p>
        <SatActInput />
    </div>

    );
}

export default SatActConverter;