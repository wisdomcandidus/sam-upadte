import React from 'react';

const Navbar = () => {
    return (
        <div>
            <header className="Header">
                <nav>
                    <div className="logo">
                        <h2>
                            E<span>Musk</span>
                        </h2>
                    </div>

                    <div className="header-content" id="head">
                        <ul>
                            <li className="lists">
                             <a href="http://localhost:3000/" className="a-tag">Road Map </a> 
                            </li>
                            <li className="lists">
                               <a href="http://localhost:3000/" className="a-tag">Blog</a> 
                            </li>
                            <li className="lists">
                               <a href="http://localhost:3000/" className="a-tag">Community</a> 
                            </li>
                            <li className="lists">
                               <a href="http://localhost:3000/" className="a-tag">Contact</a> 
                            </li>
                        </ul>
                    </div>

                    <div className="social-icons">
                       <ul>
                           <li>
                               <a href="http://localhost:3000/"><i className="fab fa-telegram"></i></a>
                           </li>
                           <li>
                               <a href="http://localhost:3000/">
                                   <i className="fab fa-twitter"></i>
                               </a>
                           </li>
                           <li>
                               <a href="http://localhost:3000/">
                                   <i className="fab fa-discord"></i>
                               </a>
                           </li>
                           <li>
                               <a href="http://localhost:3000/">
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
                            <a href="http://localhost:3000/" className="a-tag">Road Map </a> 
                           </li>
                           <li className="lists">
                              <a href="http://localhost:3000/" className="a-tag">Blog</a> 
                           </li>
                           <li className="lists">
                              <a href="http://localhost:3000/" className="a-tag">Community</a> 
                           </li>
                           <li className="lists">
                              <a href="http://localhost:3000/" className="a-tag">Contact</a> 
                           </li>
                       </ul>
                
                       <ul class="social-icons">
                        <li>
                            <a href="http://localhost:3000/"><i className="fab fa-telegram"></i>
                             <span>Telegram</span>
                            </a>
                        </li>
                        <li>
                            <a href="http://localhost:3000/">
                                <i className="fab fa-twitter"> <span>Twitter</span></i>
                            </a>
                        </li>
                        <li>
                            <a href="http://localhost:3000/">
                                <i className="fab fa-discord"> <span>Discord</span></i>
                            </a>
                        </li>
                        <li>
                            <a href="http://localhost:3000/">
                                <i className="fab fa-reddit"> <span>Reddit</span></i>
                            </a>
                        </li>
                       </ul>
                    </div>
                </div>
        </div>
                </nav>
            </header>
        </div>
    )
}

export default Navbar



