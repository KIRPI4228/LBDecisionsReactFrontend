import { useState } from "react";
import Api from "../../Api";
import CalculationResponseComponent from "./CalculationResponseComponent";
import '../ComponentContainerStyles.css';
import '../../InputStyles.css';


const CalculatinoOptionsFormComponent = () => {

    const [Sd, setSd] = useState(1);
    const [Xmax, setXmax] = useState(1);
    const [Vb, setVb] = useState(1);
    const [Fb, setFb] = useState(1);
    const [doubleFront, setDoubleFront] = useState(1);
    const [thickness, setThickness] = useState(1);
    const [vent, setVent] = useState('');
    const [width, setWidth] = useState(1);
    const [height, setHeight] = useState(1);
    const [depth, setDepth] = useState(1);
    
    
    const [answer, setAnswer] = useState('');

    const parameters = {
            parameters: {
              Xmax: parseInt(Xmax),
              Sd: parseInt(Sd),
              Vb: parseInt(Vb),
              Fb: parseInt(Fb),
              doubleFront: parseInt(doubleFront),
              Thickness: parseInt(thickness),
              vent: vent,
              maxDims: {
                x: parseInt(width),
                y: parseInt(height),
                z: parseInt(depth)
              }
            }
        }

    function calculate() {
        

        Api.calculateVentedBox(parameters).then(response => setAnswer(response.data));
    }


    const propertiesStyle = "display-flex";

    return (
        <>
        <div className="component-container">
            <div>
                <h2 className="component-text-name">Sd</h2>
                <input type="text" className="styled-text-field component-text-field" onChange={(event) => setSd(event.target.value)}></input>
            </div>
            <div>
                <h2 className="component-text-name">Xmax</h2>
                <input type="text" className="styled-text-field component-text-field" onChange={(event) => setXmax(event.target.value)}></input>
            </div>
            <div>
                <h2 className="component-text-name">Vb</h2>
                <input type="text" className="styled-text-field component-text-field" onChange={(event) => setVb(event.target.value)}></input>
            </div>
            <div>
                <h2 className="component-text-name">Fb</h2>
                <input type="text" className="styled-text-field component-text-field" onChange={(event) => setFb(event.target.value)}></input>
            </div>
            <div>
                <h2 className="component-text-name">Количество лбов</h2>
                <input type="text" className="styled-text-field component-text-field" onChange={(event) => setDoubleFront(event.target.value)}></input>
            </div>
            <div>
                <h2 className="component-text-name">Толщина</h2>
                <input type="text" className="styled-text-field component-text-field" onChange={(event) => setThickness(event.target.value)}></input>
            </div>
            <div>
                <h2 className="component-text-name">Максимальная ширина</h2>
                <input type="text" className="styled-text-field component-text-field" onChange={(event) => setWidth(event.target.value)}></input>
            </div>
            <div>
                <h2 className="component-text-name">Максимальная высота</h2>
                <input type="text" className="styled-text-field component-text-field" onChange={(event) => setHeight(event.target.value)}></input>
            </div>
            <div>
                <h2 className="component-text-name">Максимальная глубина</h2>
                <input type="text" className="styled-text-field component-text-field" onChange={(event) => setDepth(event.target.value)}></input>
            </div>

            <div>
                <h2 className="component-text-name">Порт</h2>
                <select value="TUBE" onChange={(event) => setVent(event.target.value)}>
                  <option value="RECT:FRONT">Щель на лбу</option>
                  <option value="RECT:SIDE">Щель сбоку</option>
                  <option value="TUBE">Труба</option>
                </select>
            </div>

            <input type="button" className="styled-button blue component-button" value="Рассчитать" onClick={() => calculate()}></input>
        </div>

        <CalculationResponseComponent answer={answer} />
            
        </>
    );
}

export default CalculatinoOptionsFormComponent;