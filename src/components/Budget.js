import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { currency, expenses, budget } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const [newexpense] = useState(expenses);

    const handleBudgetChange = (event) => {
        if (event.target.value > 20000){
            alert("Budget Cannot Exceed 20,000 !");
            setNewBudget(20000);
        }
        else if(event.target.value < 960){
            alert("Budget Cannot Be Lower Than Expenses!"+newexpense);
            setNewBudget(960);

        }
        else{
            setNewBudget(event.target.value);
        }
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}   </span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
