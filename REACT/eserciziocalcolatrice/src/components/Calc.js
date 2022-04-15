import React, {useState} from "react"

export default function Calc() {

    const [calc, setCalc] = useState("");
    const [result, setresult] = useState("");

    const ops = ["/", "*", "+", "-", "."];

    const updateCalc= value => {
        // Controllo per non inserire operatori consecutivi
        if(ops.includes(value) && calc === '' || ops.includes(value) && ops.includes(calc.slice(-1))){
            return;
        }
        
        setCalc(calc+value);

        if(!ops.includes(value)) {
            setresult(eval(calc + value).toString());
        }
    }

    const calculate= () => {
        setCalc(eval(calc.toString()));
    }

    const deleteLast = () => {
        if(calc==''){
            return;
        }
        const value = calc.slice(0, -1);
        
        setCalc(value);
    }

    const deleteAll = () => {
        if(calc==''){
            return;
        }
        const value = "";
        setCalc(value);
    }
    
    
   
        return (
            <div className="calc-container">
                <div className="number-input">
                    {result ? <span><small>({result})</small></span>: ''}
                    {calc || "0"}</div>
                <div className="row">
                    <button className="child bold">(</button>
                    <button className="child bold" onClick={deleteAll}>CE</button>
                    <button className="child bold">)</button>
                    <button className="child bold" onClick={deleteLast}>C</button>
                </div>
                <div className="row">
                    <button className="child" id="num" onClick={() => updateCalc('1')}>1</button>
                    <button className="child" id="num" onClick={() => updateCalc('2')}>2</button>
                    <button className="child" id="num" onClick={() => updateCalc('3')}>3</button>
                    <button className="child bold" onClick={() => updateCalc('+')}>+</button>
                </div>
                <div className="row">
                    <button className="child" id="num" onClick={() => updateCalc('4')}>4</button>
                    <button className="child" id="num" onClick={() => updateCalc('5')}>5</button>
                    <button className="child" id="num" onClick={() => updateCalc('6')}>6</button>
                    <button className="child bold" onClick={() => updateCalc('-')}>-</button>
                </div>
                <div className="row">
                    <button className="child" id="num" onClick={() => updateCalc('7')}>7</button>
                    <button className="child" id="num" onClick={() => updateCalc('8')}>8</button>
                    <button className="child" id="num" onClick={() => updateCalc('9')}>9</button>
                    <button className="child bold" onClick={() => updateCalc('*')}>*</button>
                </div>
                <div className="row">
                    <button className="child bold">.</button>
                    <button className="child" id="num" onClick={() => updateCalc('0')}>0</button>
                    <button className="child bold" onClick={calculate}>=</button>
                    <button className="child bold" onClick={() => updateCalc('/')}>/</button>
                </div>
            </div>
        );
}