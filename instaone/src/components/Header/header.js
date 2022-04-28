
    // src/components/Header/index.js

    import React from "react";

    import "./Header.css";

    class Header extends React.Component{

        render(){

          return (
            <div className="app">
              <div className="app__header"> 
                <div className="app__headerWrapper">
                  <div>
                  <i class="fa fa-align-justify align-centerIcon"></i>
                  </div>
               <img class="insta" src="https://seeklogo.com/images/I/instagram-new-2016-logo-D9D42A0AD4-seeklogo.com.png" 
                  alt="Insta" />
                  <img
                    src=" https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                    alt="Instagram original logo"
                  />
                  <div class="input-group rounded">
                  <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                    <span class="input-group-text border-0" id="search-addon">
                     <i class="fas fa-search"></i>
                      </span>
                  </div>
                  <button className="text__button">Logout</button>
                  <div className="app__headerButtons">
                    <button className="primary__button">Log in</button>
                    <button className="text__button">Sign up</button>
                  </div>
                </div>
              </div>
              
            </div>
           
          );
        }   

    }

    export default Header;