import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });

    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>${props.cost}</td>
        <td><button onClick={event=> increaseAllocation(props.name)}>
        <img src="https://pngimg.com/uploads/plus/plus_PNG109.png" alt="" height='30px' width='30px' /> 
        </button></td>
        <td><button onClick={event=> decreaseAllocation(props.name)}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a8/Eo_circle_green_no-entry.svg" alt="" height='30px' width='30px' />     
        </button></td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;
