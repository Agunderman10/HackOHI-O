import React, { Component } from 'react';
import "./assets/bootstrap/css/bootstrap.min.css";
import "./assets/fonts/fontawesome-all.min.css";
import "./assets/fonts/font-awesome.min.css";
import "./assets/fonts/fontawesome5-overrides.min.css";
import "./assets/fonts/ionicons.min.css";
import "./font.css"

class SubmissionsForProject extends Component {
  //
  // componentDidMount(){
  //   postScribe('#','copy + paste amazon code here');
  // }

  render(){
    return (
      <div id="wrapper">
          <nav class="navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0">
              <div class="container-fluid d-flex flex-column p-0">
                  <a class="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0" href="#">
                      <div class="sidebar-brand-icon rotate-n-15"><i class="fa fa-group"></i></div>
                      <div class="sidebar-brand-text mx-3"><span>CrowdCode</span></div>
                  </a>
                  <hr class="sidebar-divider my-0"/>
                  <ul class="nav navbar-nav text-light" id="accordionSidebar"></ul>
                  <div class="text-center d-none d-md-inline"></div>
                  <ul class="nav navbar-nav text-light" id="accordionSidebar">
                      <li class="nav-item" role="presentation"><a class="nav-link" href="index.html"><i class="fas fa-tachometer-alt"></i><span>&nbsp;Dashboard</span></a></li>
                      <hr class="sidebar-divider"/>
                      <div class="sidebar-heading">
                          <p class="mb-0">Main Features</p>
                      </div>
                      <li class="nav-item" role="presentation">
                          <div><a class="btn btn-link nav-link" data-toggle="collapse" aria-expanded="false" aria-controls="collapse-1" href="#collapse-1" role="button"><i class="fas fa-pencil-alt"></i>&nbsp;<span>Grade Projects</span></a>
                              <div class="collapse"
                                  id="collapse-1">
                                  <div class="bg-white border rounded py-2 collapse-inner">
                                      <h6 class="collapse-header">CUSTOM COMPONENTS:</h6><a class="collapse-item" href="buttons.html">Buttons</a><a class="collapse-item" href="cards.html">Cards</a></div>
                              </div>
                          </div>
                      </li>
                      <li class="nav-item" role="presentation">
                          <div><a class="btn btn-link nav-link" data-toggle="collapse" aria-expanded="false" aria-controls="collapse-2" href="#collapse-2" role="button"><i class="far fa-edit"></i>&nbsp;<span>Edit Projects</span></a>
                              <div class="collapse" id="collapse-2">
                                  <div class="bg-white border rounded py-2 collapse-inner">
                                      <h6 class="collapse-header">CUSTOM UTILITIES:</h6><a class="collapse-item" href="utilities-color.html">Colors</a><a class="collapse-item" href="utilities-border.html">Borders</a><a class="collapse-item" href="utilities-animation.html">Animations</a>
                                      <a
                                          class="collapse-item" href="utilities-other.html">Other</a>
                                  </div>
                              </div>
                          </div>
                          <div><a class="btn btn-link nav-link" data-toggle="collapse" aria-expanded="false" aria-controls="collapse-2" href="#collapse-2" role="button"><i class="icon ion-document-text"></i>&nbsp;<span>My Statistics</span></a>
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
                      <hr class="sidebar-divider"/>
                      <div class="sidebar-heading">
                          <p class="mb-0">ADDITIONAL features</p>
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
                      <hr class="sidebar-divider"/>
                  </ul>
                  <button class="btn rounded-circle border-0" id="sidebarToggle" type="button">
                    </button>
                </div>
          </nav>
          <div class="d-flex flex-column" id="content-wrapper">
              <div id="content">
                  <nav class="navbar navbar-light navbar-expand bg-white shadow mb-4 topbar static-top">
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
                                          <a class="dropdown-item" role="presentation" href="#"><i class="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>&nbsp;Activity log</a>
                                              <div class="dropdown-divider"></div><a class="dropdown-item" role="presentation" href="#"><i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>&nbsp;Logout</a></div>
                      </div>
                      </li>
                      </ul>
              </div>
              </nav>
              <div class="container-fluid">
                  <h3 class="text-dark mb-4">Submissions - Build REST API</h3>
                  <div class="card shadow">
                      <div class="card-header py-3">
                          <p class="text-primary m-0 font-weight-bold">Participants</p>
                      </div>
                      <div class="card-body">
                          <div class="row">
                              <div class="col-md-6 text-nowrap">
                                  <div id="dataTable_length" class="dataTables_length" aria-controls="dataTable"><label>Show&nbsp;<select class="form-control form-control-sm custom-select custom-select-sm"><option value="10" selected="">10</option><option value="25">25</option><option value="50">50</option><option value="100">100</option></select>&nbsp;</label></div>
                              </div>
                              <div class="col-md-6">
                                  <div class="text-md-right dataTables_filter" id="dataTable_filter"><label><input type="search" class="form-control form-control-sm" aria-controls="dataTable" placeholder="Search"/></label></div>
                              </div>
                          </div>
                          <div class="table-responsive table mt-2" id="dataTable" role="grid" aria-describedby="dataTable_info">
                              <table class="table dataTable my-0" id="dataTable">
                                  <thead>
                                      <tr>
                                          <th>Name</th>
                                          <th>Headline</th>
                                          <th>Location</th>
                                          <th>User Rating</th>
                                          <th>User Karma</th>
                                          <th>Ungraded</th>
                                      </tr>
                                  </thead>
                                  <tbody>
                                      <tr>
                                          <td><img class="rounded-circle mr-2" width="30" height="30" src="assets/img/avatars/avatar1.jpeg"/>Destiny Hills</td>
                                          <td>Mobile Engineer</td>
                                          <td>Columbus</td>
                                          <td>7.5/10</td>
                                          <td>53465</td>
                                          <td><button class="btn btn-primary" type="button">Grade</button></td>
                                      </tr>
                                      <tr>
                                          <td><img class="rounded-circle mr-2" width="30" height="30" src="assets/img/avatars/avatar2.jpeg"/>Angelica Ramos</td>
                                          <td>Front End Developer</td>
                                          <td>London</td>
                                          <td>7/10<br/></td>
                                          <td>23211</td>
                                          <td><button class="btn btn-primary" type="button">Grade</button></td>
                                      </tr>
                                      <tr>
                                          <td><img class="rounded-circle mr-2" width="30" height="30" src="assets/img/avatars/avatar3.jpeg"/>Ashton Cox</td>
                                          <td>Junior Developer</td>
                                          <td>San Francisco</td>
                                          <td>9/10<br/></td>
                                          <td>43265</td>
                                          <td><button class="btn btn-primary" type="button">Grade</button></td>
                                      </tr>
                                      <tr>
                                          <td><img class="rounded-circle mr-2" width="30" height="30" src="assets/img/avatars/avatar4.jpeg"/>Bradley Greer</td>
                                          <td>Software Engineer</td>
                                          <td>London</td>
                                          <td>6.5/10<br/></td>
                                          <td>52223</td>
                                          <td><button class="btn btn-primary" type="button">Grade</button></td>
                                      </tr>
                                      <tr>
                                          <td><img class="rounded-circle mr-2" width="30" height="30" src="assets/img/avatars/avatar5.jpeg"/>Brenden Wagner</td>
                                          <td>Software Engineer</td>
                                          <td>San Francisco</td>
                                          <td>4.5/10<br/></td>
                                          <td>2222</td>
                                          <td><button class="btn btn-primary" type="button">Grade</button></td>
                                      </tr>
                                      <tr>
                                          <td><img class="rounded-circle mr-2" width="30" height="30" src="assets/img/avatars/avatar1.jpeg"/>Brielle Williamson</td>
                                          <td>Full Stack Developer</td>
                                          <td>New York</td>
                                          <td>7.5/10<br/></td>
                                          <td>32414</td>
                                          <td><button class="btn btn-primary" type="button">Grade</button></td>
                                      </tr>
                                      <tr>
                                          <td><img class="rounded-circle mr-2" width="30" height="30" src="assets/img/avatars/avatar2.jpeg"/>Bruno Nash<br/></td>
                                          <td>Software Engineer</td>
                                          <td>London</td>
                                          <td>8.5/10<br/></td>
                                          <td>43433</td>
                                          <td><button class="btn btn-primary" type="button">Grade</button></td>
                                      </tr>
                                      <tr>
                                          <td><img class="rounded-circle mr-2" width="30" height="30" src="assets/img/avatars/avatar3.jpeg"/>Caesar Vance</td>
                                          <td>Pre-Sales Support</td>
                                          <td>New York</td>
                                          <td>7.5/10<br/></td>
                                          <td>1544</td>
                                          <td><button class="btn btn-primary" type="button">Grade</button></td>
                                      </tr>
                                      <tr>
                                          <td><img class="rounded-circle mr-2" width="30" height="30" src="assets/img/avatars/avatar4.jpeg"/>Cara Stevens</td>
                                          <td>Game Developer</td>
                                          <td>New York</td>
                                          <td>8.5/10<br/></td>
                                          <td>24786</td>
                                          <td><button class="btn btn-primary" type="button">Grade</button></td>
                                      </tr>
                                      <tr>
                                          <td><img class="rounded-circle mr-2" width="30" height="30" src="assets/img/avatars/avatar5.jpeg"/>Cedric Kelly</td>
                                          <td>Senior JavaScript Developer</td>
                                          <td>Edinburgh</td>
                                          <td>9/10<br/></td>
                                          <td>96858</td>
                                          <td><button class="btn btn-primary" type="button">Grade</button></td>
                                      </tr>
                                  </tbody>
                                  <tfoot>
                                      <tr></tr>
                                  </tfoot>
                              </table>
                          </div>
                          <div class="row">
                              <div class="col-md-6 align-self-center">
                                  <p id="dataTable_info" class="dataTables_info" role="status" aria-live="polite">Showing 1 to 10 of 27</p>
                              </div>
                              <div class="col-md-6">
                                  <nav class="d-lg-flex justify-content-lg-end dataTables_paginate paging_simple_numbers">
                                      <ul class="pagination">
                                          <li class="page-item disabled"><a class="page-link" href="#" aria-label="Previous"><span aria-hidden="true">«</span></a></li>
                                          <li class="page-item active"><a class="page-link" href="#">1</a></li>
                                          <li class="page-item"><a class="page-link" href="#">2</a></li>
                                          <li class="page-item"><a class="page-link" href="#">3</a></li>
                                          <li class="page-item"><a class="page-link" href="#" aria-label="Next"><span aria-hidden="true">»</span></a></li>
                                      </ul>
                                  </nav>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div>

      // <script src="assets/js/jquery.min.js"></script>
      // <script src="assets/bootstrap/js/bootstrap.min.js"></script>
      // <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.js"></script>
      // <script src="assets/js/theme.js"></script>
    );
  }
}

export default SubmissionsForProject;
