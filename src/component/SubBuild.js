import puzzel from './image/puzzle.png'
import note from './image/note.png'
import pad from './image/pad.png'

const subBuild = () => {
    return (
        <div>
            <section className="build">
                <div className="sub-header">
                    <h2>BUILT BY DEVELOPERS, FOR DEVELOPERS</h2>
                </div>
                <div className="build-content">
                    <div className="build-icon">
                        <img src={puzzel} alt="" />
                        <h3>simple APIs</h3>
                        <p>
                            As developers, we know the importance of easy-to-use APIs and simple documentation. 
                            We want building on Altura to be as easy as possible.
                        </p>
                    </div>
                    <div className="build-icon">
                        <img src={note} alt="" />
                        <h3>True ownership</h3>
                        <p>
                            NFTs allow users to truly own their digital assets without the fear of them being confiscated or deleted.
                        </p>
                    </div>
                    <div className="build-icon">
                        <img src={pad} alt="" />
                        <h3>cross-platform items</h3>
                        <p>
                            Altura allows game developers to utilize in-game items of other projects within their own; 
                            this allows for cross-game items.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default subBuild
