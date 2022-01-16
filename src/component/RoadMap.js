import lightining from './image/lightining.svg'
import code from './image/code.svg'
import tool from './image/tool.svg'
import network from './image/network.svg'
import arrow from './image/arrow.svg'

const RoadMap = () => {
    return (
        <div>
            <section className="roadmap">
                    <h2>RoadMap</h2>
                <div className="road">
                    <div className="content-roadmap">
                            <div className="imag">
                                <img src={lightining} alt="" />
                            </div>

                            <div className="road-content">
                                <div className="road-header">
                                    <h3>Launch</h3>
                                </div>
                                <ul>
                                    <li>
                                        Launch of website
                                    </li>
                                    <li>
                                        Token IDO on Oxbull
                                    </li>
                                    <li>Token Listing on pancake swap</li>
                                    <li>
                                        Launch of MVP
                                    </li>
                                    <li>
                                        Start of marketing and awareness
                                    </li>
                                </ul>
                            </div>
                    </div>
                    <div className="content-roadmap">
                            <div className="imag">
                                <img src={code} alt="" />
                            </div>

                            <div className="road-content">
                                <div className="road-header">
                                    <h3>Product Development</h3>
                                </div>
                                <ul>
                                    <li>
                                        Launch of full-fledged smart NFTS
                                    </li>
                                    <li>
                                        Introducing oracle-based loot boxes
                                    </li>
                                    <li>
                                        Furture research and Development
                                    </li>
                                    <li>
                                        Strategize a marketing and adoption plan
                                    </li>
                                    
                                </ul>
                            </div>
                    </div>

                    <div className="content-roadmap">
                            <div className="imag">
                                <img src={tool} alt="" />
                            </div>

                            <div className="road-content">
                                <div className="road-header">
                                    <h3>BUILDING A PLAYGROUND</h3>
                                </div>
                                <ul>
                                    <li>
                                        Iterate on MVP
                                    </li>
                                    <li>
                                        Research and Development
                                    </li>
                                    <li>
                                        Team expansion
                                    </li>
                                    <li>
                                        Furture Marketing
                                    </li>
                                    
                                </ul>
                            </div>
                    </div>

                    <div className="content-roadmap">
                            <div className="imag">
                                <img src={network} alt="" />
                            </div>

                            <div className="road-content">
                                <div className="road-header">
                                    <h3>ADOPTION AND EXPANSION</h3>
                                </div>
                                <ul>
                                    <li>
                                       Launch of our simple game that utilizes our NFTs
                                    </li>
                                    <li>
                                        Have indie game developer adopt Altura in their video-games
                                    </li>
                                    <li>
                                        Furture product development and iteration plan
                                    </li>
                                </ul>
                            </div>
                    </div>

                    <div className="content-roadmap">
                            <div className="imag">
                                <img src={arrow} alt="" />
                            </div>

                            <div className="road-content">
                                <div className="road-header">
                                    <h3>ADOPTION AND EXPANSION</h3>
                                </div>
                                <ul>
                                    <li>
                                       Launch of our simple game that utilizes our NFTs
                                    </li>
                                    <li>
                                        Have indie game developer adopt Altura in their video-games
                                    </li>
                                    <li>
                                        Furture product development and iteration plan
                                    </li>
                                </ul>
                            </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default RoadMap
