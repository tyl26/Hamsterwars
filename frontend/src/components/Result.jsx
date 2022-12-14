import React, { useEffect } from 'react'
import { useState } from 'react'
import { baseURL } from '../utils/baseURL';

function Result(result) {
    const [win, setWinner] = useState([]);
    const [loser, setLoser] = useState([]);

    //hömtar vinnaren med hjälp av id
    async function getWinner() {
        const response = await fetch(`${baseURL}/hamsters/` + result.result.winner._id, {
            method: "GET"
        })
        const data = await response.json()
        setWinner(data)
    }

    //hömtar förloraren med hjälp av id

    async function getLoser() {
        const response = await fetch(`${baseURL}/hamsters/` + result.result.loser._id, {
            method: "GET"
        })
        const data = await response.json()
        setLoser(data)
    }


    useEffect(() => {
        getWinner()
        getLoser()

    }, []);

    // console.log(loser);


    return (
        <div >
            <h3 className='winnerResult'>Winner is {win.name}! </h3>
            <h5 className='downBelow'>See their status down below!</h5>


            {/* vinnaren */}
            <section className='resultContainer'>
                <section className='winner'>
                    <h1 className='win'>Winner</h1>
                    <img src={win.imgName} alt="" />
                    <h2>Name: {win.name}</h2>
                    <h2>Wins: {win.wins}</h2>
                    <h2>Defeats: {win.defeats}</h2>
                    <h2>Games: {win.games}</h2>
                </section>

                {/* förloraren */}
                <section className='loser'>
                    <h1 className='lose' >Loser</h1>
                    <img src={loser.imgName} alt="" />

                    <h2>Name: {loser.name}</h2>
                    <h2>Wins: {loser.wins}</h2>
                    <h2>Defeats: {loser.defeats}</h2>
                    <h2>Games: {loser.games}</h2>
                </section>
            </section>
        </div>


    )
}

export default Result
