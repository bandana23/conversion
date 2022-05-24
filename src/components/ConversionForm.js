import React from 'react';
import ReactDOM from 'react-dom';
import ConversionInput from './ConversionInput';
import ConversionSelect from './ConversionSelect';

const ConversionForm = ({formData , setFormData}) => {

        const resetFormData = () => {
        setFormData({
            inputValue: "",
            inputUnit: "celsius",
            targetUnit: "celsius",
            studentResponse: "",
        });
    };


    return <form>
        <label>
            Input value:
            <ConversionInput value={formData.inputValue} onChange={(e) =>
                setFormData({ ...formData, inputValue : e.target.value })
            } />
        </label>

        <label>
            Input Unit:
            <ConversionSelect value={formData.inputUnit} onChange={(e) =>
                setFormData({ ...formData, inputUnit: e.target.value })
            } />
        </label>

        <label>
            Target Unit:
            <ConversionSelect value={formData.targetUnit} onChange={(e) =>
                setFormData({ ...formData, targetUnit: e.target.value })
            } />
        </label>
        <label>
            Student Response:
            <ConversionInput
                value={formData.studentResponse}
                onChange={(e) =>
                    setFormData({ ...formData, studentResponse: e.target.value })
                }
            />
        </label>
        <input type="reset" value="Reset" onClick={resetFormData} />
    </form>
}

export default ConversionForm