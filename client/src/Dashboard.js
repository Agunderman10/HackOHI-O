import React from 'react';
import './Dashboard.css';

function Dashboard() {
    // const style= {width:window.innerWidth,height:window.innerHeight}
  return (
      <div className="dashboard main">
       <table className="table">
      <div className="text">
      <tr>
      <th>Sr.No</th>
      <th>Names</th>
      <th>Email</th>
      <th>Location</th>
      </tr>
      <tr>
      <td>1</td>
      <td>Simon</td>
      <td>simon.proj12@gmail.com</td>
      <td>Ohio Union</td>
      </tr>
      <tr>
      <td>2</td>
      <td>Andrew</td>
      <td>andrew.proj23@gmail.com</td>
      <td>Table No.</td>
      </tr>
      <tr>
      <td>3</td>
      <td>Kevin</td>
      <td>kevin.proj34@gmail.com</td>
      <td>454</td>
      </tr>
      <tr>
      <td>4</td>
      <td>Salil</td>
      <td>salil.proj40@gmail.com</td>
      <td>Columbus</td>
      </tr>
      </div>
      </table>
      </div>
  );
}    
export default Dashboard;