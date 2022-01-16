import jordan from './image/jordan.png'
import freeman from './image/freeman.png'
import sasha from './image/sasha.png'
import miles from './image/miles.png'

const Team = () => {
    return (
        <div>
            <section className="team">
                   <h2>Meet the team</h2>
                <div className="team-content">
                    <div className="team-icon">
                        <img src={jordan} alt="" />
                        <h3>Jordan blake</h3>
                        <p>Developer</p>
                    </div>
                    <div className="team-icon">
                        <img src={sasha} alt="" />
                        <h3>sandra path</h3>
                        <p>Partnership manager</p>
                    </div>
                    <div className="team-icon">
                        <img src={freeman} alt="" />
                        <h3>Frank brown</h3>
                        <p>Blockchain Developer</p>
                    </div>
                    <div className="team-icon">
                        <img src={miles} alt="" />
                        <h3>Emusk </h3>
                        <p>Founder</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Team
