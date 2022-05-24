import React from "react";

const ConversionInput = ({value , onChange}) => {

    return (
        <input type='number'
                value={value}
                onChange={onChange}
            />
    )
}

export default ConversionInput