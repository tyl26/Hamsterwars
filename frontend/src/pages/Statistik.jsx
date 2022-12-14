import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { IoChevronBackCircleSharp } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { baseURL } from '../utils/baseURL'

function Statistik() {

    const [topFives, setTopFives] = useState([])


    //hömtar alla hamstrar
    useEffect(() => {
        fetch(`${baseURL}/hamsters`)
            .then((res) => res.json())
            .then((data) => setTopFives(data))

    }, [])

    return (
        <section>
            <Link to='/gallery'> <IoChevronBackCircleSharp className='backIcon' /></Link>
            <section className='topFives'>


                {/* mappar genom alla hamstrar och sorterar efter vem som har högst poäng och skriver bara ut de top 5*/}
                {/* top winners */}
                <section>
                    <h1>Top Winners</h1>
                    {topFives ? topFives
                        .sort((a, b) => a.wins > b.wins ? -1 : 1).slice(0, 5)
                        .map(winners => {

                            return (
                                <section key={winners._id} >

                                    <section className='top'>
                                        <img className='topImg' src={winners.imgName} alt="" />
                                        <h2 className='name'>{winners.name}</h2>
                                        <p><b>Wins: </b>{winners.wins} <b>points</b></p>
                                    </section>
                                </section>
                            )
                        }) : null}
                </section>


                {/* mappar genom alla hamstrar och sorterar efter vem som har högst poäng och skriver bara ut de top 5*/}
                {/* getting top Losers  */}
                <section>
                    <h1>Top Losers</h1>
                    {topFives ? topFives
                        .sort((a, b) => a.defeats > b.defeats ? -1 : 1).slice(0, 5)
                        .map(defeat => {
                            return (
                                <section key={defeat._id}>
                                    <section className='top'>
                                        <img className='topImg' src={defeat.imgName} alt="" />
                                        <h2 className='name'>{defeat.name}</h2>
                                        <p><b>Loses: </b>{defeat.defeats} <b>points</b></p>
                                    </section>
                                </section>
                            )
                        }) : null}
                </section>
            </section>
        </section>
    )
}

export default Statistik
