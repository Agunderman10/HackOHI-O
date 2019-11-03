import React, { Component} from 'react';
import "./assets/bootstrap/css/bootstrap.min.css";
import "./assets/fonts/fontawesome-all.min.css";
import "./assets/fonts/font-awesome.min.css";
import "./assets/fonts/ionicons.min.css";
import "./assets/fonts/fontawesome5-overrides.min.css";
import "./assets/css/-Filterable-Cards-.css";
import "./font.css"

class ProjectListings extends Component {
  //
  // componentDidMount(){
  //   postScribe('#','copy + paste amazon code here');
  // }

  render(){
    return (
      <div>
        <div>
          <div className="container" />
        </div>
        <div id="wrapper">
          <nav className="navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0">
            <div className="container-fluid d-flex flex-column p-0">
              <a className="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0" href="#">
                <div className="sidebar-brand-icon rotate-n-15"><i className="fa fa-group" /></div>
                <div className="sidebar-brand-text mx-3"><span>Crowdcode</span></div>
              </a>
              <hr className="sidebar-divider my-0" />
              <ul className="nav navbar-nav text-light" id="accordionSidebar" />
              <div className="text-center d-none d-md-inline" />
              <ul className="nav navbar-nav text-light" id="accordionSidebar">
                <li className="nav-item" role="presentation"><a className="nav-link" href="index.html"><i className="fas fa-tachometer-alt" /><span>&nbsp;Dashboard</span></a></li>
                <hr className="sidebar-divider" />
                <div className="sidebar-heading">
                  <p className="mb-0">Main Features</p>
                </div>
                <li className="nav-item" role="presentation">
                  <div><a className="btn btn-link nav-link" data-toggle="collapse" aria-expanded="false" aria-controls="collapse-1" href="#collapse-1" role="button"><i className="fas fa-pencil-alt" />&nbsp;<span>Project Listings</span></a>
                    <div className="collapse" id="collapse-1">
                      <div className="bg-white border rounded py-2 collapse-inner">
                        <h6 className="collapse-header">CUSTOM COMPONENTS:</h6><a className="collapse-item" href="buttons.html">Buttons</a><a className="collapse-item" href="cards.html">Cards</a></div>
                    </div>
                  </div>
                </li>
                <li className="nav-item" role="presentation">
                  <div><a className="btn btn-link nav-link" data-toggle="collapse" aria-expanded="false" aria-controls="collapse-2" href="#collapse-2" role="button"><i className="far fa-edit" />&nbsp;<span>My Projects</span></a>
                    <div className="collapse" id="collapse-2">
                      <div className="bg-white border rounded py-2 collapse-inner">
                        <h6 className="collapse-header">CUSTOM UTILITIES:</h6><a className="collapse-item" href="utilities-color.html">Colors</a><a className="collapse-item" href="utilities-border.html">Borders</a><a className="collapse-item" href="utilities-animation.html">Animations</a>
                        <a className="collapse-item" href="utilities-other.html">Other</a>
                      </div>
                    </div>
                  </div>
                  <div><a className="btn btn-link nav-link" data-toggle="collapse" aria-expanded="false" aria-controls="collapse-2" href="#collapse-2" role="button"><i className="icon ion-document-text" />&nbsp;<span>My Statistics</span></a>
                    <div className="collapse" id="collapse-2">
                      <div className="bg-white border rounded py-2 collapse-inner">
                        <h6 className="collapse-header">CUSTOM UTILITIES:</h6><a className="collapse-item" href="utilities-color.html">Colors</a><a className="collapse-item" href="utilities-border.html">Borders</a><a className="collapse-item" href="utilities-animation.html">Animations</a>
                        <a className="collapse-item" href="utilities-other.html">Other</a>
                      </div>
                    </div>
                  </div>
                </li>
                <hr className="sidebar-divider" />
                <div className="sidebar-heading">
                  <p className="mb-0">ADDITIONAL features</p>
                </div>
                <li className="nav-item" role="presentation">
                  <div><a className="btn btn-link nav-link" data-toggle="collapse" aria-expanded="false" aria-controls="collapse-3" href="#collapse-3" role="button"><i className="fas fa-cog" />&nbsp;<span>Settings</span></a>
                    <div className="collapse" id="collapse-3">
                      <div className="bg-white border rounded py-2 collapse-inner">
                        <h6 className="collapse-header">LOGIN SCREENS:</h6><a className="collapse-item" href="login.html">Login</a><a className="collapse-item" href="register.html">Register</a><a className="collapse-item" href="forgot-password.html">Forgot Password</a>
                        <h6 className="collapse-header">OTHER PAGES:</h6><a className="collapse-item" href="404.html">404 Page</a><a className="collapse-item" href="blank.html">Blank Page</a></div>
                    </div>
                  </div>
                  <div id="collapsePages" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar" aria-controls="collapsePages">
                    <div className="bg-white border rounded py-2 collapse-inner">
                      <h6 className="collapse-header">LOGIN SCREENS:</h6><a className="collapse-item" href="#">Login</a><a className="collapse-item" href="#">Register</a><a className="collapse-item" href="#">Forgot Password</a>
                      <h6 className="collapse-header">OTHER PAGES:</h6><a className="collapse-item" href="#">404 Page</a><a className="collapse-item" href="#">Blank Page</a></div>
                  </div>
                </li>
                <hr className="sidebar-divider" />
              </ul><button className="btn rounded-circle border-0" id="sidebarToggle" type="button" /></div>
          </nav>
          <div className="d-flex flex-column" id="content-wrapper">
            <div id="content">
              <nav className="navbar navbar-light navbar-expand bg-white shadow mb-4 topbar static-top">
                <div className="container-fluid"><button className="btn btn-link d-md-none rounded-circle mr-3" id="sidebarToggleTop" type="button"><i className="fas fa-bars" /></button>
                  <form className="form-inline d-none d-sm-inline-block mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                    <div className="input-group"><input className="bg-light form-control border-0 small" type="text" placeholder="Search for ..." />
                      <div className="input-group-append"><button className="btn btn-primary py-0" type="button"><i className="fas fa-search" /></button></div>
                    </div>
                  </form>
                  <ul className="nav navbar-nav flex-nowrap ml-auto">
                    <li className="nav-item dropdown d-sm-none no-arrow"><a className="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="false" href="#"><i className="fas fa-search" /></a>
                      <div className="dropdown-menu dropdown-menu-right p-3 animated--grow-in" role="menu" aria-labelledby="searchDropdown">
                        <form className="form-inline mr-auto navbar-search w-100">
                          <div className="input-group"><input className="bg-light form-control border-0 small" type="text" placeholder="Search for ..." />
                            <div className="input-group-append"><button className="btn btn-primary py-0" type="button"><i className="fas fa-search" /></button></div>
                          </div>
                        </form>
                      </div>
                    </li>
                    <li className="nav-item dropdown no-arrow mx-1" role="presentation">
                      <div className="nav-item dropdown no-arrow"><a className="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="false" href="#"><span className="badge badge-danger badge-counter">3+</span><i className="fas fa-bell fa-fw" /></a>
                        <div className="dropdown-menu dropdown-menu-right dropdown-list dropdown-menu-right animated--grow-in" role="menu">
                          <h6 className="dropdown-header">alerts center</h6>
                          <a className="d-flex align-items-center dropdown-item" href="#">
                            <div className="mr-3">
                              <div className="bg-primary icon-circle"><i className="fas fa-file-alt text-white" /></div>
                            </div>
                            <div><span className="small text-gray-500">December 12, 2019</span>
                              <p>A new monthly report is ready to download!</p>
                            </div>
                          </a>
                          <a className="d-flex align-items-center dropdown-item" href="#">
                            <div className="mr-3">
                              <div className="bg-success icon-circle"><i className="fas fa-donate text-white" /></div>
                            </div>
                            <div><span className="small text-gray-500">December 7, 2019</span>
                              <p>$290.29 has been deposited into your account!</p>
                            </div>
                          </a>
                          <a className="d-flex align-items-center dropdown-item" href="#">
                            <div className="mr-3">
                              <div className="bg-warning icon-circle"><i className="fas fa-exclamation-triangle text-white" /></div>
                            </div>
                            <div><span className="small text-gray-500">December 2, 2019</span>
                              <p>Spending Alert: We've noticed unusually high spending for your account.</p>
                            </div>
                          </a><a className="text-center dropdown-item small text-gray-500" href="#">Show All Alerts</a></div>
                      </div>
                    </li>
                    <li className="nav-item dropdown no-arrow mx-1" role="presentation">
                      <div className="nav-item dropdown no-arrow"><a className="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="false" href="#"><i className="fas fa-envelope fa-fw" /><span className="badge badge-danger badge-counter">7</span></a>
                        <div className="dropdown-menu dropdown-menu-right dropdown-list dropdown-menu-right animated--grow-in" role="menu">
                          <h6 className="dropdown-header">alerts center</h6>
                          <a className="d-flex align-items-center dropdown-item" href="#">
                            <div className="dropdown-list-image mr-3"><img className="rounded-circle" src="assets/img/avatars/avatar4.jpeg" />
                              <div className="bg-success status-indicator" />
                            </div>
                            <div className="font-weight-bold">
                              <div className="text-truncate"><span>Hi there! I am wondering if you can help me with a problem I've been having.</span></div>
                              <p className="small text-gray-500 mb-0">Emily Fowler - 58m</p>
                            </div>
                          </a>
                          <a className="d-flex align-items-center dropdown-item" href="#">
                            <div className="dropdown-list-image mr-3"><img className="rounded-circle" src="assets/img/avatars/avatar2.jpeg" />
                              <div className="status-indicator" />
                            </div>
                            <div className="font-weight-bold">
                              <div className="text-truncate"><span>I have the photos that you ordered last month!</span></div>
                              <p className="small text-gray-500 mb-0">Jae Chun - 1d</p>
                            </div>
                          </a>
                          <a className="d-flex align-items-center dropdown-item" href="#">
                            <div className="dropdown-list-image mr-3"><img className="rounded-circle" src="assets/img/avatars/avatar3.jpeg" />
                              <div className="bg-warning status-indicator" />
                            </div>
                            <div className="font-weight-bold">
                              <div className="text-truncate"><span>Last month's report looks great, I am very happy with the progress so far, keep up the good work!</span></div>
                              <p className="small text-gray-500 mb-0">Morgan Alvarez - 2d</p>
                            </div>
                          </a>
                          <a className="d-flex align-items-center dropdown-item" href="#">
                            <div className="dropdown-list-image mr-3"><img className="rounded-circle" src="assets/img/avatars/avatar5.jpeg" />
                              <div className="bg-success status-indicator" />
                            </div>
                            <div className="font-weight-bold">
                              <div className="text-truncate"><span>Am I a good boy? The reason I ask is because someone told me that people say this to all dogs, even if they aren't good...</span></div>
                              <p className="small text-gray-500 mb-0">Chicken the Dog · 2w</p>
                            </div>
                          </a><a className="text-center dropdown-item small text-gray-500" href="#">Show All Alerts</a></div>
                      </div>
                      <div className="shadow dropdown-list dropdown-menu dropdown-menu-right" aria-labelledby="alertsDropdown" />
                    </li>
                    <div className="d-none d-sm-block topbar-divider" />
                    <li className="nav-item dropdown no-arrow" role="presentation">
                      <div className="nav-item dropdown no-arrow"><a className="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="false" href="#"><span className="d-none d-lg-inline mr-2 text-gray-600 small">Valerie Luna</span><img className="border rounded-circle img-profile" src="assets/img/avatars/avatar1.jpeg" /></a>
                        <div className="dropdown-menu shadow dropdown-menu-right animated--grow-in" role="menu"><a className="dropdown-item" role="presentation" href="#"><i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400" />&nbsp;Profile</a><a className="dropdown-item" role="presentation" href="#"><i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400" />&nbsp;Settings</a>
                          <a className="dropdown-item" role="presentation" href="#"><i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400" />&nbsp;Activity log</a>
                          <div className="dropdown-divider" /><a className="dropdown-item" role="presentation" href="#"><i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" />&nbsp;Logout</a></div>
                      </div>
                    </li>
                  </ul>
                </div>
              </nav>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-12">
                    <h1 />
                    <section className="py-5">
                      <div className="container">
                        <h1 className="text-center mb-4">Project Listings</h1>
                        <div className="filtr-controls text-center lead text-uppercase mb-3"><span className="active d-inline-block mx-3 py-1 position-relative" data-filter="all">all </span><span className="d-inline-block mx-3 py-1 position-relative" data-filter={1}>Web&nbsp;</span><span className="d-inline-block mx-3 py-1 position-relative" data-filter={2}>Mobile</span><span className="d-inline-block mx-3 py-1 position-relative" data-filter={3}>Desktop</span></div>
                        <div className="row filtr-container">
                          <div className="col-md-6 col-lg-4 filtr-item" data-category="2,3">
                            <div className="card border-dark">
                              <div className="card-header bg-dark text-light">
                                <h5 className="m-0">Google</h5>
                              </div><img className="img-fluid card-img w-100 d-block rounded-0" src="assets/img/th-01.jpg" />
                              <div className="card-body">
                                <p className="card-text">&nbsp;Project: &nbsp;</p>
                                <p className="card-text">&nbsp;Description:&nbsp;</p>
                                <p className="card-text">&nbsp;Reward: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</p>
                                <p className="card-text">&nbsp;Time:&nbsp;</p>
                              </div>
                              <div className="d-flex card-footer"><button className="btn btn-dark btn-sm" type="button"><i className="fa fa-eye" />&nbsp;View</button><button className="btn btn-outline-dark btn-sm ml-auto" type="button"><i className="fas fa-star" />&nbsp;Star</button></div>
                            </div>
                          </div>
                          <div className="col-md-6 col-lg-4 filtr-item" data-category="1,3">
                            <div className="card border-dark">
                              <div className="card-header bg-dark text-light">
                                <h5 className="m-0">MedData</h5>
                              </div><img className="img-fluid card-img w-100 d-block rounded-0" src="assets/img/th-02.jpg" />
                              <div className="card-body">
                                <p className="card-text">&nbsp;Project: &nbsp;</p>
                                <p className="card-text">&nbsp;Description:&nbsp;</p>
                                <p className="card-text">&nbsp;Reward: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</p>
                                <p className="card-text">&nbsp;Time:&nbsp;</p>
                              </div>
                              <div className="d-flex card-footer"><button className="btn btn-dark btn-sm" type="button"><i className="fa fa-eye" />&nbsp;View</button><button className="btn btn-outline-dark btn-sm ml-auto" type="button"><i className="fas fa-star" />&nbsp;Star</button></div>
                            </div>
                          </div>
                          <div className="col-md-6 col-lg-4 filtr-item" data-category="2,3">
                            <div className="card border-dark">
                              <div className="card-header bg-dark text-light">
                                <h5 className="m-0">Microsoft</h5>
                              </div><img className="img-fluid card-img w-100 d-block rounded-0" src="assets/img/th-03.jpg" />
                              <div className="card-body">
                                <p className="card-text">&nbsp;Project: &nbsp;</p>
                                <p className="card-text">&nbsp;Description:&nbsp;</p>
                                <p className="card-text">&nbsp;Reward: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</p>
                                <p className="card-text">&nbsp;Time:&nbsp;</p>
                              </div>
                              <div className="d-flex card-footer"><button className="btn btn-dark btn-sm" type="button"><i className="fa fa-eye" />&nbsp;View</button><button className="btn btn-outline-dark btn-sm ml-auto" type="button"><i className="fas fa-star" />&nbsp;Star</button></div>
                            </div>
                          </div>
                          <div className="col-md-6 col-lg-4 filtr-item" data-category={3}>
                            <div className="card border-dark">
                              <div className="card-header bg-dark text-light">
                                <h5 className="m-0">Workday</h5>
                              </div><img className="img-fluid card-img w-100 d-block rounded-0" src="assets/img/th-06.jpg" />
                              <div className="card-body">
                                <p className="card-text">&nbsp;Project: &nbsp;</p>
                                <p className="card-text">&nbsp;Description:&nbsp;</p>
                                <p className="card-text">&nbsp;Reward: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</p>
                                <p className="card-text">&nbsp;Time:&nbsp;</p>
                              </div>
                              <div className="d-flex card-footer"><button className="btn btn-dark btn-sm" type="button"><i className="fa fa-eye" />&nbsp;View</button><button className="btn btn-outline-dark btn-sm ml-auto" type="button"><i className="fas fa-star" />&nbsp;Star</button></div>
                            </div>
                          </div>
                          <div className="col-md-6 col-lg-4 filtr-item" data-category="1,2">
                            <div className="card border-dark">
                              <div className="card-header bg-dark text-light">
                                <h5 className="m-0">Cisco</h5>
                              </div><img className="img-fluid card-img w-100 d-block rounded-0" src="assets/img/th-07.jpg" />
                              <div className="card-body">
                                <p className="card-text">&nbsp;Project: &nbsp;</p>
                                <p className="card-text">&nbsp;Description:&nbsp;</p>
                                <p className="card-text">&nbsp;Reward: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</p>
                                <p className="card-text">&nbsp;Time:&nbsp;</p>
                              </div>
                              <div className="d-flex card-footer"><button className="btn btn-dark btn-sm" type="button"><i className="fa fa-eye" />&nbsp;View</button><button className="btn btn-outline-dark btn-sm ml-auto" type="button"><i className="fas fa-star" />&nbsp;Star</button></div>
                            </div>
                          </div>
                          <div className="col-md-6 col-lg-4 filtr-item" data-category="1,3">
                            <div className="card border-dark">
                              <div className="card-header bg-dark text-light">
                                <h5 className="m-0">Ultimate Software</h5>
                              </div><img className="img-fluid card-img w-100 d-block rounded-0" src="assets/img/th-08.jpg" />
                              <div className="card-body">
                                <p className="card-text">&nbsp;Project: &nbsp;</p>
                                <p className="card-text">&nbsp;Description:&nbsp;</p>
                                <p className="card-text">&nbsp;Reward: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</p>
                                <p className="card-text">&nbsp;Time:&nbsp;</p>
                              </div>
                              <div className="d-flex card-footer"><button className="btn btn-dark btn-sm" type="button"><i className="fa fa-eye" />&nbsp;View</button><button className="btn btn-outline-dark btn-sm ml-auto" type="button"><i className="fas fa-star" />&nbsp;Star</button></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div></div>
      </div>

      // <script src="assets/js/jquery.min.js"></script>
      // <script src="assets/bootstrap/js/bootstrap.min.js"></script>
      // <script src="assets/js/-Filterable-Cards-.js"></script>
      // <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.js"></script>
      // <script src="assets/js/theme.js"></script>
    );
  }
}

export default ProjectListings;
