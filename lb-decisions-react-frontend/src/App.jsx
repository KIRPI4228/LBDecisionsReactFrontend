import { useState } from 'react'
import axios from 'axios';

function App() {

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
  

  function signUp() {
        

        axios.post("http://127.0.0.1:4444/calc", parameters).then(response => { 
          setAnswer(response.data);
          /*setAnswer(
            `
            Раскрой: \n
            ${response.data.dx4Parts}\n
\n
            Количество листров:  ${response.data.sheetsCount}\n
\n
            Длина порта: ${response.data.box.vent.length}\n
            Грязный объем: ${response.data.box.overallVolume}\n
            Чистый объем: ${response.data.box.volume}\n
            Объем порта: ${response.data.box.vent.volume}\n
\n
            Внешние размеры\n
            Ширина: ${response.data.box.externalDimensions.x}\n
            Высота: ${response.data.box.externalDimensions.y}\n
            Глубина: ${response.data.box.externalDimensions.z}\n
\n
            Внитриние размеры\n
            Ширина: ${response.data.box.internalDimensions.x}\n
            Высота: ${response.data.box.internalDimensions.y}\n
            Глубина: ${response.data.box.internalDimensions.z}\n
            `
          );*/
        });
    }

  function getAnswer() {
    if (answer.box === undefined) {
      return (<></>);
    }
    return (
      <>
        <div className="component-container">
          <h4 className="component-text-name">Раскрой: {answer.dx4}</h4>
          <h4 className="component-text-name">Количество листов: {answer.sheetsCount}</h4>
          <br></br>
          <h4 className="component-text-name">Длина порта: {answer.box.vent.length}</h4>
          <h4 className="component-text-name">Диаметр порта: {answer.box.vent.diameter}</h4>
          <h4 className="component-text-name">Площадь порта: {answer.box.vent.square}</h4>
          <br></br>
          <h4 className="component-text-name">Грязный объем: {answer.box.overallVolume}</h4>
          <h4 className="component-text-name">Чистый объем: {answer.box.volume}</h4>
          <h4 className="component-text-name">Объем порта: {answer.box.vent.volume}</h4>
          <br></br>
          <h3 className="component-text-name">Внешние Размеры</h3>
          <h4 className="component-text-name">Ширина: {answer.box.externalDimensions.x}</h4>
          <h4 className="component-text-name">Высота: {answer.box.externalDimensions.y}</h4>
          <h4 className="component-text-name">Глубина: {answer.box.externalDimensions.z}</h4>
          <br></br>
          <h3 className="component-text-name">Внитриние Размеры</h3>
          <h4 className="component-text-name">Ширина: {answer.box.internalDimensions.x}</h4>
          <h4 className="component-text-name">Высота: {answer.box.internalDimensions.y}</h4>
          <h4 className="component-text-name">Глубина: {answer.box.internalDimensions.z}</h4>
        </div>
      </>
    );
  }

  return (
    <>
    <div className='sdf'>
<div className="component-container">
            
            <div>
                <h2 className="component-text-name">Порт</h2>
                <select value="TUBE" onChange={(event) => setVent(event.target.value)}>
                  <option value="RECT:SIDE">Щель на лбу</option>
                  <option value="RECT:FRONT">Щель сбоку</option>
                  <option value="TUBE">Труба</option>
                </select>
            </div>

            <input type="button" className="styled-button blue component-button" value="Рассчитать" onClick={() => signUp()}></input>
        </div>
        {getAnswer()}
        
    </div>
      
    </>
  )
}

export default App
