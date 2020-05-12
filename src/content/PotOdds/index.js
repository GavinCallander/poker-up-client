import React, { useState } from 'react';

export const PotOdds = () => {

    const [pot, setPot] = useState(0);
    const [bet, setBet] = useState(0);
    const [odds, setOdds] = useState(0);

    let output = odds === 0 ? '':odds;

    const calculator = () => {
        setOdds();
    };

    return (
        <div className='page potodds'>
            <div className='potodds_header'>
                <p className='heading_two'>Pot Odds</p>
                <p className='body_two'>
                    Knowing how to calculate pot odds is an invaluable skill, as it allows you to
                    to make a mathematically based decision as to when calling is the correct decision.
                    They are, essentially, a ratio between the total pot and the bet facing you.
                    Pokerstars offer a great beginners article <a href='https://www.pokerstarsschool.com/lessons/pot-odds-and-expected-value/867/'>here</a>,
                    but if you need to get your head around the calculations quickly, the below tool is at your disposal.
                </p>
                <hr />
            </div>
            <div className='potodds_main'>
                <div className='potodds_input_section'>
                    <p className='body_one'>Total pot size: </p>
                    <input type='number' className='heading_two potodds_input' onChange={e => setPot(e.target.value)} value={pot} />
                </div>
                <div className='potodds_input_section'>
                    <p className='body_one'>Total bet size: </p>
                    <input type='number' className='heading_two potodds_input' onChange={e => setBet(e.target.value)} value={bet} />
                </div>
                <div className='potodds_output_section'>
                    <p className='heading_two'>Pot Odds</p>
                    <p className='heading_two'>{output}</p>
                </div>
            </div>
        </div>
    )
};