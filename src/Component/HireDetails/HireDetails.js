import React from 'react';
import './HireDetails.css'

const HireDetails = (props) => {
    const hired = props.hire;
    let total = 0;
    for (const pd of hired) {

        const balance = pd.balance.slice(1, 2) + pd.balance.slice(3);
        console.log(balance);
        total = total + parseFloat(balance);
    }


    return (
        <div className="hire-card" >
            <h3>Employee Hired  :  {props.hire.length}</h3>
            <div className="item-style"><h4>Pesron name</h4>
                <h4>salary</h4>
            </div>
            <div className="item-style">
                <div>
                    {
                        props.hire.map(n => <p>{n.name}</p>)
                    }
                </div>
                <div> {
                    props.hire.map(n => <p>{n.balance}</p>)
                }</div>


            </div> <div className="item-style"><h4>Total</h4>
                <h4>${total.toFixed(2)}</h4></div>
        </div>

    );
};

export default HireDetails;