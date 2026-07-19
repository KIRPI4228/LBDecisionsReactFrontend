import { useEffect, useRef, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import Api from "../../Api";
import CalculationResponseComponent from "./CalculationResponseComponent";
import '../ComponentContainerStyles.css';
import '../../InputStyles.css';
import { Canvas, useFrame } from '@react-three/fiber'
import { rotate } from "three/src/nodes/utils/RotateNode.js";
import { FloatParameter, OptionParameter, StringParameter } from "./ParametersItems";

const CalculatinoOptionsFormComponent = (props) => {


    const [searchParams, setSearchParams] = useSearchParams();
    
    
    const [render, setRender] = useState('');


    

    async function getParametersList() {
        const response = (await Api.getParamtersList()).data;
        const parameters = response.parameters;

        let index = 0;
        searchParams.forEach(param => {
            parameters[index].value = param;
            index++;
        });
        console.log(parameters);

        

        function calculate() {
            console.log(parameters);
            Api.calculateVentedBox({parameters: parameters}).then(response => props.onCalculated(response.data));
        }

        setRender(
            <div className="component-container">
                <div className="component-container">
                    {
                        parameters.map(parameter => {
                            switch(parameter.type) {
                                case "string": return <StringParameter parameter={parameter} parameters={parameters} setSearchParams={setSearchParams}/>;
                                case "float": return <FloatParameter parameter={parameter} parameters={parameters}  setSearchParams={setSearchParams}/>;
                                case "option": return <OptionParameter parameter={parameter} parameters={parameters}  setSearchParams={setSearchParams}/>;
                            }
                        })
                    }
                    <div>
                        <input type="button" className="styled-button blue component-button" value="Calculate" onClick={() => calculate()}></input>
                        <input type="button" style={{margin: 20}} className="styled-button blue component-button" value="New template" onClick={() => {setSearchParams(""); window.location.reload()}}></input>
                    </div>
                </div>
                
            </div>
            
        );

        
    }

    useEffect(() => {
        getParametersList();
    }, []);

    return render;
}

export default CalculatinoOptionsFormComponent;