import React, { useContext, useState} from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const {currency} = useContext(AppContext);
    const [newCurrency, changeCurrency] = useState(currency);
    const handleCurrencyChange = event => {
        changeCurrency(event.type.value)
        setName(event.type.value)
    }
return (
    <div>
        <span>
            <select name="currency" onChange={handleCurrencyChange}>
                <option defaultValue>Currency {newCurrency}</option>
                <option value="$">$ Dollar</option> 
                <option value="£">£ Pound</option> 
                <option value="€">€ Euro</option> 
                <option value="₹">₹ Ruppee</option> 
            </select>
        </span>
    </div>
)
}

export default Currency;
