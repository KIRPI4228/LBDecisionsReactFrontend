import CalculatinoOptionsFormComponent from "../components/Calculation/CalculationOptionsFormComponent";
import { useState } from "react";
import CalculationResponseComponent from "../components/Calculation/CalculationResponseComponent";


const CalculationPage = () => {

    const [answer, setAnswer] = useState();
    return (
       <div className="centered-component-holder">
        <CalculatinoOptionsFormComponent onCalculated={answer => setAnswer(answer)} />
        <CalculationResponseComponent answer={answer} />
       </div>
    );
}

export default CalculationPage;