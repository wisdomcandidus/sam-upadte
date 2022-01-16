import nft from './image/nft.png'

const LootBox = () => {
    return (
        <div>
            <section className="LootBox">
                <div className="loot-content">
                    <div className="loot">
                        <h2>
                            Loot Boxes on The Blockchain
                        </h2>
                        <p>
                            We want to create truly random loot boxes on the blockchain 
                            that drop NFTs with varying rarities when they are unlocked.
                        </p>
                        <a href="http://localhost:3000/">Explore</a>
                    </div>

                    <div className="loot-sub">
                        <img src={nft} alt="" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default LootBox
