import React, { Component } from "react";
import LoginRegister from "../LoginRegisterModal";
import classNames from 'classnames';
import Auth from "../../modules/Auth";

class TopNavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShow: false,
      login: true
    };
  }
  showHideModal = () => {
    this.setState({ modalShow: false });
  };

  loginClicked = () => {
    this.setState({ modalShow: true, login: true });
  };
  registerClicked = () => {
    this.setState({ modalShow: true, login: false });
  };

  logout = () => {
    Auth.logout();
    window.location.reload();
  };

  render() {
    return (
      <div  >
        <div className="container">
          <div className="row">
           
            <div className={classNames("col-md-6 text-right")}>
              <div className="top_nav_right">
                <ul className={classNames("top_nav_menu",)}   >
                  
                
                  {Auth.getUserDetails() !== undefined &&
                  Auth.getUserDetails() !== null &&
                  Auth.getToken() !== undefined ? (
                    <li className="account">
                      <a href="#">
                        {`Welcome ${Auth.getUserDetails().user_name}`}
                        <i className="fa fa-angle-down"></i>
                      </a>
                      
                        
                    </li>
                  ) : (
                    <li style={{marginLeft:1100,width:200,backgroundColor:"#ffffff"}} className="account">
                     < span>
                        My Account
                        <i className="fa fa-angle-down"></i>
                      </span>
                      <ul className="account_selection">
                        <li>
                          <a href="#" onClick={() => this.loginClicked()}>
                            <i
                              className="fas fa-sign-in-alt"
                              aria-hidden="true"
                            ></i>
                            Sign In
                          </a>
                        </li>
                        <li>
                          <a href="#" onClick={() => this.registerClicked()}>
                            <i
                              className="fa fa-user-plus"
                              aria-hidden="true"
                            ></i>
                            Register
                          </a>
                        </li>
                      </ul>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
        {this.state.modalShow ? (
          <LoginRegister
            show={this.state.modalShow}
            login={this.state.login}
            registerClicked={() => this.registerClicked()}
            loginClicked={() => this.loginClicked()}
            onHide={() => this.showHideModal()}
          />
        ) : null}
      </div>
    );
  }
}

export default TopNavBar;
