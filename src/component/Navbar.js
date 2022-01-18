import React from 'react';

const Navbar = () => {
    return (
        <div>
            <header className="Header">
                <nav>
                    <div className="logo" >
                        <a href="#Emusk">
                        <h2>
                            E<span>Musk</span>
                        </h2>
                        </a>
                    </div>

                    <div className="header-content" id="head">
                        <ul>
                            <li className="lists">
                             <a href="#Road" className="a-tag">Road Map </a> 
                            </li>
                            <li className="lists">
                               <a href="#Section" className="a-tag">Blog</a> 
                            </li>
                            <li className="lists">
                               <a href="#Footer" className="a-tag">Community</a> 
                            </li>
                            <li className="lists">
                               <a href="#Team" className="a-tag" >Team</a> 
                            </li>
                        </ul>
                    </div>

                    <div className="social-icons">
                       <ul>
                           <li>
                               <a href="/"><i className="fab fa-telegram"></i></a>
                           </li>
                           <li>
                               <a href="/">
                                   <i className="fab fa-twitter"></i>
                               </a>
                           </li>
                           <li>
                               <a href="/">
                                   <i className="fab fa-discord"></i>
                               </a>
                           </li>
                           <li>
                               <a href="/">
                                   <i className="fab fa-reddit"></i>
                               </a>
                           </li>
                       </ul>
                    </div>

                    <div class="ham-content">
                        <input type="checkbox" class="check" />
                <div class="ham">
                    <div></div>
                </div>
                <div class="all-items">
                    <div class="menu">
                       <ul>
                        <li className="lists">
                            <a href="#Road" className="a-tag">Road Map </a> 
                           </li>
                           <li className="lists">
                              <a href="#Section" className="a-tag">Blog</a> 
                           </li>
                           <li className="lists">
                              <a href="#Fo0ter" className="a-tag">Community</a> 
                           </li>
                           <li className="lists">
                              <a href="#Team" className="a-tag">Team</a> 
                           </li>
                           <li>
                            <a href="/"><i className="fab fa-telegram"></i>
                             <span>Telegram</span>
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <i className="fab fa-twitter"> <span>Twitter</span></i>
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <i className="fab fa-discord"> <span>Discord</span></i>
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <i className="fab fa-reddit"> <span>Reddit</span></i>
                            </a>
                        </li>
                       </ul>
                
                       {/* <ul class="social-icons">
                        <li>
                            <a href=""><i className="fab fa-telegram"></i>
                             <span>Telegram</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i className="fab fa-twitter"> <span>Twitter</span></i>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i className="fab fa-discord"> <span>Discord</span></i>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i className="fab fa-reddit"> <span>Reddit</span></i>
                            </a>
                        </li>
                       </ul> */}
            
                    </div>
                </div>
        </div>
                <div className='market'>
                    <a href="https://www.emusk.eu/">Market place</a>
                </div>
                </nav>
            </header>
        </div>
    )
}

export default Navbar



