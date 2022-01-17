import logo from './image/crypto.png'

const Hero_section = () => {
    return (
        <div>
            <main className="hero-section">
                <div className="hero-content">
                    <h1>
                        POWERING THE FUTURE OF GAMING
                    </h1>
                    <p>
                        Altura provides the infrastructure for the
                        future of in-game items, digital assets and
                        The Metaverse
                    </p>
                    <div className="button-section">
                        <a href="https://www.emusk.eu/" target='_blank'>Explore marketplace</a>
                    </div>
                </div>

                <div className="img">
                    <img src={logo} alt='' />
                </div>
            </main>
        </div>
    )
}

export default Hero_section
