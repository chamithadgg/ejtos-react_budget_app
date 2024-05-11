import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = (props) => {
    const { currency  } = useContext(AppContext);

    const [setcurrency] = useState(currency);

    return (
        <div>
            <div className='row'>

            <div className="input-group mb-3" style={{ marginLeft: '2rem' }}>
                    <div className="input-group-prepend">
                <label className="input-group-text" htmlFor="inputGroupSelect01">Currency</label>
                  </div>
                  <select className="custom-select" id="inputGroupSelect01" color='green' onChange={(event) => setcurrency(event.target.value)}>
                        <option value= "$"> $ Doller</option>
                        <option value="£">£ Pound</option>
                        <option value="€">€ Euro</option>
                        <option value="₹">₹ Ruppee</option>
                  </select>

                </div>
                </div>

        </div>
    );
};

export default Currency;