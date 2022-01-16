import React from 'react'
import pics from './image/illustrate.png'
const SecSection = () => {
    return (
        <div>
            <section className="sec-content">
                <div className="content">
                    <div className="sub-content">
                        <img src={pics} alt="crypto for understanding" />
                    </div>

                    <div className="sub-con">
                        <h2>Introducing the Future of NFTs: smart NFTs</h2>
                        <p>
                            Imagine a video game sword that gets stronger every time it is used to slay a monster. 
                            Smart NFTs have properties that can change based on certain conditions.
                            </p>
                        <div className="export">
                            <a href="http://localhost:3000/">Build a smart NFTs</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SecSection
