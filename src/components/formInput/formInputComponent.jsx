import React from 'react';
import "../formInput/formInputStyles.scss";

const formInputComponent = ({ label, ...otherProps }) => {
    return (
        <div className='group'>
            <input className='form-input' {...otherProps} />
            {/* Eğer label değeri varsa, aşağıdaki label elemanı render ediliyor */}
            {label && (
                <label
                    className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}
                >
                    {label}{/* label içeriği */}
                </label>
            )}
        </div>
    );
};

export default formInputComponent;
