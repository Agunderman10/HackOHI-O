import React, { Component} from 'react';
import "./assets/bootstrap/css/bootstrap.min.css";
import "./assets/fonts/fontawesome-all.min.css";
import "./assets/fonts/font-awesome.min.css";
import "./assets/fonts/fontawesome5-overrides.min.css";
import "./font.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import ProjectListings from '../project_listings/ProjectListings';

class UserProfile extends Component {
  render(){
    return (
        <Router> 
      <div class="text-dark" id="wrapper">
          <nav class="navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0">
              <div class="container-fluid d-flex flex-column p-0">
                  <ul class="nav navbar-nav text-light" id="accordionSidebar"></ul>
                  <nav class="navbar navbar-light text-black-50 bg-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0">
                      <div class="container-fluid d-flex flex-column p-0">
                          <a class="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0" href="#">
                              <div class="sidebar-brand-icon rotate-n-15"><i class="fa fa-group"></i></div>
                              <div class="sidebar-brand-text mx-3"><span>CrowdCode</span></div>
                          </a>
                          <hr class="sidebar-divider my-0"></hr>
                          <ul class="nav navbar-nav text-light" id="accordionSidebar">
                              <li class="nav-item" role="presentation"><a class="nav-link" href="index.html"><i class="fas fa-tachometer-alt"></i><span>&nbsp;Dashboard</span></a></li>
                              <hr class="sidebar-divider"></hr>
                              <div class="sidebar-heading">
                                  <p class="mb-0">Main Features</p>
                              </div>
                              < Link to = "/project-listings" >
                              <li class="nav-item" role="presentation">
                                  
                                  <div><a class="btn btn-link nav-link" data-toggle="collapse" aria-expanded="false" aria-controls="collapse-1" href="#collapse-1" role="button"><i class="far fa-list-alt"></i>&nbsp;<span>Project Listings</span></a>
                                      
                                      <div class="collapse"
                                          id="collapse-1">
                                          <div class="bg-white border rounded py-2 collapse-inner">
                                              <h6 class="collapse-header">CUSTOM COMPONENTS:</h6><a class="collapse-item" href="buttons.html">Buttons</a><a class="collapse-item" href="cards.html">Cards</a></div>
                                      </div>
                                  </div>
                                  
                              </li>
                              </Link>
                              <li class="nav-item" role="presentation">
                                  <div><a class="btn btn-link nav-link" data-toggle="collapse" aria-expanded="false" aria-controls="collapse-2" href="#collapse-2" role="button"><i class="far fa-user"></i>&nbsp;<span>My Projects</span></a>
                                      <div class="collapse"
                                          id="collapse-2">
                                          <div class="bg-white border rounded py-2 collapse-inner">
                                              <h6 class="collapse-header">CUSTOM UTILITIES:</h6><a class="collapse-item" href="utilities-color.html">Colors</a><a class="collapse-item" href="utilities-border.html">Borders</a><a class="collapse-item" href="utilities-animation.html">Animations</a>
                                              <a
                                                  class="collapse-item" href="utilities-other.html">Other</a>
                                          </div>
                                      </div>
                                  </div>
                              </li>
                              <hr class="sidebar-divider"></hr>
                              <div class="sidebar-heading">
                                  <p class="mb-0">Additional Features</p>
                              </div>
                              <li class="nav-item" role="presentation">
                                  <div><a class="btn btn-link nav-link" data-toggle="collapse" aria-expanded="false" aria-controls="collapse-3" href="#collapse-3" role="button"><i class="fas fa-cog"></i>&nbsp;<span>Settings</span></a>
                                      <div class="collapse" id="collapse-3">
                                          <div class="bg-white border rounded py-2 collapse-inner">
                                              <h6 class="collapse-header">LOGIN SCREENS:</h6><a class="collapse-item" href="login.html">Login</a><a class="collapse-item" href="register.html">Register</a><a class="collapse-item" href="forgot-password.html">Forgot Password</a>
                                              <h6 class="collapse-header">OTHER PAGES:</h6><a class="collapse-item" href="404.html">404 Page</a><a class="collapse-item" href="blank.html">Blank Page</a></div>
                                      </div>
                                  </div>
                                  <div id="collapsePages" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar" aria-controls="collapsePages">
                                      <div class="bg-white border rounded py-2 collapse-inner">
                                          <h6 class="collapse-header">LOGIN SCREENS:</h6><a class="collapse-item" href="#">Login</a><a class="collapse-item" href="#">Register</a><a class="collapse-item" href="#">Forgot Password</a>
                                          <h6 class="collapse-header">OTHER PAGES:</h6><a class="collapse-item" href="#">404 Page</a><a class="collapse-item" href="#">Blank Page</a></div>
                                  </div>
                              </li>
                              <li class="nav-item" role="presentation"></li>
                              <li class="nav-item" role="presentation"></li>
                              <hr class="sidebar-divider"></hr>
                          </ul>
                          <div class="text-center d-none d-md-inline"><button class="btn rounded-circle border-0" id="sidebarToggle" type="button"></button></div>
                      </div>
                  </nav>
                  <div class="text-center d-none d-md-inline"></div>
              </div>
          </nav>
          <div class="d-flex flex-column" id="content-wrapper">
              <div id="content">
                  <nav class="navbar navbar-light navbar-expand shadow mb-4 topbar static-top">
                      <div class="container-fluid"><button class="btn btn-link d-md-none rounded-circle mr-3" id="sidebarToggleTop" type="button"><i class="fas fa-bars"></i></button>
                          <form class="form-inline d-none d-sm-inline-block mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                              <div class="input-group"><input class="bg-light form-control border-0 small" type="text" placeholder="Search for ..."/>
                                  <div class="input-group-append"><button class="btn btn-primary py-0" type="button"><i class="fas fa-search"></i></button></div>
                              </div>
                          </form>
                          <ul class="nav navbar-nav flex-nowrap ml-auto">
                              <li class="nav-item dropdown d-sm-none no-arrow"><a class="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="false" href="#"><i class="fas fa-search"></i></a>
                                  <div class="dropdown-menu dropdown-menu-right p-3 animated--grow-in" role="menu" aria-labelledby="searchDropdown">
                                      <form class="form-inline mr-auto navbar-search w-100">
                                          <div class="input-group"><input class="bg-light form-control border-0 small" type="text" placeholder="Search for ..."/>
                                              <div class="input-group-append"><button class="btn btn-primary py-0" type="button"><i class="fas fa-search"></i></button></div>
                                          </div>
                                      </form>
                                  </div>
                              </li>
                              <li class="nav-item dropdown no-arrow mx-1" role="presentation">
                                  <div class="nav-item dropdown no-arrow"><a class="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="false" href="#"><span class="badge badge-danger badge-counter">3+</span><i class="fas fa-bell fa-fw"></i></a>
                                      <div class="dropdown-menu dropdown-menu-right dropdown-list dropdown-menu-right animated--grow-in"
                                          role="menu">
                                          <h6 class="dropdown-header">alerts center</h6>
                                          <a class="d-flex align-items-center dropdown-item" href="#">
                                              <div class="mr-3">
                                                  <div class="bg-primary icon-circle"><i class="fas fa-file-alt text-white"></i></div>
                                              </div>
                                              <div><span class="small text-gray-500">December 12, 2019</span>
                                                  <p>A new monthly report is ready to download!</p>
                                              </div>
                                          </a>
                                          <a class="d-flex align-items-center dropdown-item" href="#">
                                              <div class="mr-3">
                                                  <div class="bg-success icon-circle"><i class="fas fa-donate text-white"></i></div>
                                              </div>
                                              <div><span class="small text-gray-500">December 7, 2019</span>
                                                  <p>$290.29 has been deposited into your account!</p>
                                              </div>
                                          </a>
                                          <a class="d-flex align-items-center dropdown-item" href="#">
                                              <div class="mr-3">
                                                  <div class="bg-warning icon-circle"><i class="fas fa-exclamation-triangle text-white"></i></div>
                                              </div>
                                              <div><span class="small text-gray-500">December 2, 2019</span>
                                                  <p>Spending Alert: We've noticed unusually high spending for your account.</p>
                                              </div>
                                          </a><a class="text-center dropdown-item small text-gray-500" href="#">Show All Alerts</a></div>
                                  </div>
                              </li>
                              <li class="nav-item dropdown no-arrow mx-1" role="presentation">
                                  <div class="nav-item dropdown no-arrow"><a class="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="false" href="#"><i class="fas fa-envelope fa-fw"></i><span class="badge badge-danger badge-counter">7</span></a>
                                      <div class="dropdown-menu dropdown-menu-right dropdown-list dropdown-menu-right animated--grow-in"
                                          role="menu">
                                          <h6 class="dropdown-header">alerts center</h6>
                                          <a class="d-flex align-items-center dropdown-item" href="#">
                                              <div class="dropdown-list-image mr-3"><img class="rounded-circle" src="assets/img/avatars/avatar4.jpeg"/>
                                                  <div class="bg-success status-indicator"></div>
                                              </div>
                                              <div class="font-weight-bold">
                                                  <div class="text-truncate"><span>Hi there! I am wondering if you can help me with a problem I've been having.</span></div>
                                                  <p class="small text-gray-500 mb-0">Emily Fowler - 58m</p>
                                              </div>
                                          </a>
                                          <a class="d-flex align-items-center dropdown-item" href="#">
                                              <div class="dropdown-list-image mr-3"><img class="rounded-circle" src="assets/img/avatars/avatar2.jpeg"/>
                                                  <div class="status-indicator"></div>
                                              </div>
                                              <div class="font-weight-bold">
                                                  <div class="text-truncate"><span>I have the photos that you ordered last month!</span></div>
                                                  <p class="small text-gray-500 mb-0">Jae Chun - 1d</p>
                                              </div>
                                          </a>
                                          <a class="d-flex align-items-center dropdown-item" href="#">
                                              <div class="dropdown-list-image mr-3"><img class="rounded-circle" src="assets/img/avatars/avatar3.jpeg"/>
                                                  <div class="bg-warning status-indicator"></div>
                                              </div>
                                              <div class="font-weight-bold">
                                                  <div class="text-truncate"><span>Last month's report looks great, I am very happy with the progress so far, keep up the good work!</span></div>
                                                  <p class="small text-gray-500 mb-0">Morgan Alvarez - 2d</p>
                                              </div>
                                          </a>
                                          <a class="d-flex align-items-center dropdown-item" href="#">
                                              <div class="dropdown-list-image mr-3"><img class="rounded-circle" src="assets/img/avatars/avatar5.jpeg"/>
                                                  <div class="bg-success status-indicator"></div>
                                              </div>
                                              <div class="font-weight-bold">
                                                  <div class="text-truncate"><span>Am I a good boy? The reason I ask is because someone told me that people say this to all dogs, even if they aren't good...</span></div>
                                                  <p class="small text-gray-500 mb-0">Chicken the Dog · 2w</p>
                                              </div>
                                          </a><a class="text-center dropdown-item small text-gray-500" href="#">Show All Alerts</a></div>
                                  </div>
                                  <div class="shadow dropdown-list dropdown-menu dropdown-menu-right" aria-labelledby="alertsDropdown"></div>
                              </li>
                              <div class="d-none d-sm-block topbar-divider"></div>
                              <li class="nav-item dropdown no-arrow" role="presentation">
                                  <div class="nav-item dropdown no-arrow"><a class="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="false" href="#"><span class="d-none d-lg-inline mr-2 text-gray-600 small">Valerie Luna</span><img class="border rounded-circle img-profile" src="assets/img/avatars/avatar1.jpeg"/></a>
                                      <div
                                          class="dropdown-menu shadow dropdown-menu-right animated--grow-in" role="menu"><a class="dropdown-item" role="presentation" href="#"><i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>&nbsp;Profile</a><a class="dropdown-item" role="presentation" href="#"><i class="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>&nbsp;Settings</a>
                                          <a
                                              class="dropdown-item" role="presentation" href="#"><i class="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>&nbsp;Activity log</a>
                                              <div class="dropdown-divider"></div><a class="dropdown-item" role="presentation" href="#"><i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>&nbsp;Logout</a></div>
                      </div>
                      </li>
                      </ul>
              </div>
              </nav>
              <div class="container-fluid">
                  <h3 class="text-dark mb-4">Kevin Li</h3>
                  <div class="row mb-3">
                      <div class="col-lg-4">
                          <div class="card mb-3">
                              <div class="card-body text-center shadow-none"><img class="rounded-circle mb-3 mt-4" src="assets/img/dogs/image2.jpeg" width="160" height="160"/>
                                  <p>Greatness is coming</p>
                              </div>
                          </div>
                          <div class="card shadow mb-4">
                              <div class="card-header py-3">
                                  <h6 class="text-primary font-weight-bold m-0">Projects</h6>
                              </div>
                              <div class="card-body">
                                  <h4 class="small font-weight-bold">Google<span class="float-right">20%</span></h4>
                                  <div class="progress progress-sm mb-3">
                                      <div class="progress-bar bg-danger" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style={ {width: '20%'} }><span class="sr-only">20%</span></div>
                                  </div>
                                  <h4 class="small font-weight-bold">Amazon<span class="float-right">40%</span></h4>
                                  <div class="progress progress-sm mb-3">
                                      <div class="progress-bar bg-info" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={ {width: '40%'} }><span class="sr-only">40%</span></div>
                                  </div>
                                  <h4 class="small font-weight-bold">Tesla<span class="float-right">15%</span></h4>
                                  <div class="progress progress-sm mb-3">
                                      <div class="progress-bar bg-warning" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100" style={ {width: '15%'} }><span class="sr-only">15%</span></div>
                                  </div>
                                  <h4 class="small font-weight-bold">SpaceX<span class="float-right">25%</span></h4>
                                  <div class="progress progress-sm mb-3">
                                      <div class="progress-bar bg-success" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={ {width: '25%'} }><span class="sr-only">25%</span></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="col-lg-8">
                          <div class="row mb-3 d-none">
                              <div class="col">
                                  <div class="card text-white bg-primary shadow">
                                      <div class="card-body">
                                          <div class="row mb-2">
                                              <div class="col">
                                                  <p class="m-0">Peformance</p>
                                                  <p class="m-0"><strong>65.2%</strong></p>
                                              </div>
                                              <div class="col-auto"><i class="fas fa-rocket fa-2x"></i></div>
                                          </div>
                                          <p class="text-white-50 small m-0"><i class="fas fa-arrow-up"></i>&nbsp;5% since last month</p>
                                      </div>
                                  </div>
                              </div>
                              <div class="col">
                                  <div class="card text-white bg-success shadow">
                                      <div class="card-body">
                                          <div class="row mb-2">
                                              <div class="col">
                                                  <p class="m-0">Peformance</p>
                                                  <p class="m-0"><strong>65.2%</strong></p>
                                              </div>
                                              <div class="col-auto"><i class="fas fa-rocket fa-2x"></i></div>
                                          </div>
                                          <p class="text-white-50 small m-0"><i class="fas fa-arrow-up"></i>&nbsp;5% since last month</p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div class="row">
                              <div class="col">
                                  <div class="card shadow mb-3">
                                      <div class="card-header py-3">
                                          <p class="text-primary m-0 font-weight-bold">Contact information</p>
                                      </div>
                                      <div class="card-body">
                                          <form>
                                              <div class="form-row">
                                                  <div class="col">
                                                      <div class="form-group"><label for="username"><strong>Location</strong></label><input class="form-control" type="text" placeholder="Columbus, Ohio" name="Location" disabled="" readonly=""/></div>
                                                  </div>
                                                  <div class="col">
                                                      <div class="form-group"><label for="email"><strong>Email Address</strong></label><input class="form-control" type="email" placeholder="kevinli29033@gmail.com" name="email" disabled="" readonly=""/></div>
                                                  </div>
                                              </div>
                                              <div class="form-row">
                                                  <div class="col">
                                                      <div class="form-group"><label for="first_name"><strong>Website</strong></label><input class="form-control" type="text" placeholder="thasianX.github.io" name="first_name" readonly="" disabled=""/></div>
                                                  </div>
                                                  <div class="col">
                                                      <div class="form-group"><label for="last_name"><strong>Headline</strong><br/></label><input class="form-control" type="text" placeholder="Mobile Engineer" name="last_name" readonly="" disabled=""/></div>
                                                  </div>
                                              </div>
                                          </form>
                                      </div>
                                  </div>
                                  <div class="card shadow">
                                      <div class="card-header py-3">
                                          <p class="text-primary m-0 font-weight-bold">Project Progress</p>
                                      </div>
                                      <div class="card-body">
                                          <form>
                                              <div class="form-row">
                                                  <div class="col">
                                                      <div class="form-group"><label for="city"><strong>User Rating</strong></label><input class="form-control" type="text" placeholder="7.5/10" name="user_rating" readonly="" disabled=""/></div>
                                                  </div>
                                                  <div class="col">
                                                      <div class="form-group"><label for="country"><strong>User Karma</strong></label><input class="form-control" type="text" placeholder="7550" name="user_karma" disabled="" readonly=""/></div>
                                                  </div>
                                              </div>
                                          </form>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="card shadow mb-5"></div>
              </div>
          </div>
      </div>
    </div>

        <Switch>
        <Route path="/project-listings">
            <ProjectListings />
        </Route>
        </Switch>
    </Router>

      // <script src="assets/js/jquery.min.js"></script>
      // <script src="assets/bootstrap/js/bootstrap.min.js"></script>
      // <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.js"></script>
      // <script src="assets/js/theme.js"></script>
    );
  }
}

export default UserProfile;
