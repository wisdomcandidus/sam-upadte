import digi from './image/letter.png'

const assets = () => {
    return (
        <div>
            <section className="digital">
                <div className="digital-con">
                    <div className="sub">
                        <img src={digi} alt="" />
                    </div>

                    <div className="sub-con1">
                        <h2>
                            A digital market place like no other
                        </h2>
                        <p>
                            Explore a whole world of in-game items through Altura's NFT marketplace.
                             It is also the most powerful NFT minting platform.
                        </p>
                        <a href="https://www.emusk.eu/" target='_blank' rel ='noreferrer'>Explore marketplace</a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default assets
