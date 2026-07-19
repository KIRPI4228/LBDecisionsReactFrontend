import '../ComponentContainerStyles.css';
import '../../InputStyles.css';

export const StringParameter = (props) => {
    return (
        <div>
            <h2 className="component-text-name">{props.parameter.name}</h2>
            <input type="text" className="styled-text-field component-text-field" defaultValue={props.parameter.value} onChange={(event) => setParameter(props.parameters, props.parameter.id, event.target.value, props)}></input>
        </div>
    );
}

export const FloatParameter = (props) => {
    return (
        <div>
            <h2 className="component-text-name">{props.parameter.name}</h2>
            <input type="text" className="styled-text-field component-text-field" defaultValue={props.parameter.value} onChange={(event) => setParameter(props.parameters, props.parameter.id, parseFloat(event.target.value), props)}></input>
        </div>
    );
}

export const OptionParameter = (props) => {

    return (
        <div>
            <h2 className="component-text-name">{props.parameter.name}</h2>
            <select defaultValue={props.parameter.value} onChange={(event) => setParameter(props.parameters, props.parameter.id, event.target.value, props)}>
                {
                    props.parameter.options.map(option => <option value={option.value}>{option.name}</option>)
                }
            </select>
        </div>
    );
}


const parametersValues = {};

const setParameter = (parameters, id, value, props) => {
    let index = 0;
    for (; parameters[index].id !== id; index++) {}
    parameters[index].value = value;
    let params = "?";
    for(let i = 0; i < parameters.length; i++) {
        params += `${parameters[i].id}=${parameters[i].value || ""}`;
        if (i !== parameters.length-1) {
            params += "&";
        }
    }
    props.setSearchParams(params);
}