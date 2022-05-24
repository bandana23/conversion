import React , {useEffect , useState}from 'react';
import { unitConversionTest } from "../conversion";
import ConversionForm from './ConversionForm';

/**
 * 
 * @returns 
 */
const ConversionApp = () => {

    let [formData, setFormData] = useState({
        inputValue: "",
        inputUnit: "celsius",
        targetUnit: "celsius",
        studentResponse: "",
    });


    return (
        <>
            <header className="App-header">Unit Conversion Test</header>
            <h2> Enter Conversion Below: </h2>
            <ConversionForm formData = {formData} setFormData = {setFormData} />
            {unitConversionTest(
                formData.inputValue,
                formData.inputUnit,
                formData.targetUnit,
                formData.studentResponse
            )}
        </>
    )
}

export default ConversionApp