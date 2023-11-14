import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const {currency} = useContext(AppContext)

return (
    <div className="input-group mb-3" style={{ marginLeft: '2rem' }}>
        <div className="input-group-prepend">
            <label className="input-group-text" htmlFor="inputGroupSelect01">Currency</label>
        </div>
            <select className="custom-select" id="inputGroupSelect01">
                <option defaultValue>Choose...</option>
                <option value="Dollar" name="dollar">Dollar</option>
                <option value="Pound" name="pound">Pound</option>
                <option value="Euro" name="euro">Euro</option>
                <option value="Ruppee" name="ruppee">Ruppee</option>
            </select>
    </div>
);
};

export default Currency;