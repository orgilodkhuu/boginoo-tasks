import React from 'react';

export const InputForm = (props) => {
    let { className, label,disabled,...others } = props;
    return (
        <div>
            <div className="mt ph-4 font-ubuntu fs-12 lh-18">{label}</div>
            {
            disabled ? <input className={`input ${className} disabled`} {...others} />:
            <input className={`input ${className}`} {...others} />
            }
        </div>
    );
};