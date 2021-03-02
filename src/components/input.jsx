import React from 'react';

export const Input = (props) => {
    let { className, disabled, onChange, value,  ...others} = props;

    return (
        <div>
            {
            disabled ? <input value={value} className={`input ${className} disabled`} {...others} />:
            <input value={value} onChange={onChange} className={`input ${className}`} {...others} />
            }
        </div>
    );
};