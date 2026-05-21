

const CalculationResponseComponent = (props) => {
  const answer = props.answer;
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

export default CalculationResponseComponent;