import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="App">
      <div className="sidebar">
    <div className="logo-details">
      <i className='bx bxl-c-plus-plus'></i>
      <span className="logo_name">data centers</span>
    </div>
      <ul className="nav-links">
        <li>
          <a href="C:\Users\hitesh\OneDrive\Desktop\datacenter1.html" className="active">
            <i className='bx bx-coin-stack' ></i>
            
                <Link to="/">Datacenter1</Link>
          </a>
        </li>
        <li>
          <a href="#">
            <i className='bx bx-coin-stack' ></i>
                <Link to="/">Datacenter2</Link>
          </a>
        </li>
        <li>
          <a href="#">
            <i className='bx bx-coin-stack' ></i>
            <span className="links_name">datacenter3</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i className='bx bx-coin-stack' ></i>
            <span className="links_name">Datacenters4</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i className='bx bx-coin-stack' ></i>
            <span className="links_name">datacenter5</span>
          </a>
        </li>
        <li className="log_out">
          <a href="#">
            <i className='bx bx-log-out'></i>
            <span className="links_name">Log out</span>
          </a>
        </li>
      
      </ul>
  </div>
  <section className="home-section">
    <nav>
      <div className="sidebar-button">
        <i className='bx bx-menu sidebarBtn'></i>
        <span className="dashboard">Dashboard</span>
      </div>
      <div className="search-box">
        <input type="text" placeholder="Search..."/>
        <i className='bx bx-search' ></i>
      </div>
      <div className="profile-details">
       <img src="https://th.bing.com/th/id/R.140ec9dc740d74f449a6c25f87e77eec?rik=jswFePEapVheBA&riu=http%3a%2f%2fgovernancenow.com%2ftemp%2findia_met_dept.jpg&ehk=sGzsQLLKKtIsMsPQJPcIClzUFRqnR%2f%2bLU8t8pMRxIwo%3d&risl=&pid=ImgRaw&r=0" alt=""/>
        <span className="admin_name">IMD</span>
        <i className='bx bx-chevron-down' ></i>
      </div>
    </nav>

    <div className="home-content">
      <div className="overview-boxes">
        <div className="box">
          <div className="right-side">
            <div className="box-topic">ALL PC'S STORAGE</div>
            <div className="number">40,876</div>
            <div className="indicator">
            </div>
          </div>
          <i className='bx bx-pie-chart-alt-2'></i>
        </div>
        <div className="box">
          <div className="right-side">
            <div className="box-topic"> total storage left</div>
            <div className="number">38,876</div>
            <div className="indicator">
              
              
            </div>
          </div>
          <i className='bx bx-pie-chart-alt-2'></i>
        </div>
        <div className="box">
          <div className="right-side">
            <div className="box-topic">total storage used</div>
            <div className="number">12,876</div>
            <div className="indicator">
              
              
            </div>
          </div>
          <i className='bx bx-pie-chart-alt-2' ></i>
        </div>
          </div>

      <div className="storage-box">
        <div className="seperate-storage-box">
          <div className="title">seperate storage</div>
          <div className="storage-details">
            <ul className="details">
              <li className="topic">Datacenters</li>
              <li><a href="#">datacenter1</a></li>
              <li><a href="#">datacenter2</a></li>
              <li><a href="#">datacenter3</a></li>
              <li><a href="#">datacenter4</a></li>
              <li><a href="#">datacenter5</a></li>
              
            </ul>
            <ul className="details">
            <li className="topic">total storage</li>
            <li><a href="#">123</a></li>
            <li><a href="#">123</a></li>
            <li><a href="#">123</a></li>
            <li><a href="#">123</a></li>
            <li><a href="#">123</a></li>
           </ul>
          <ul className="details">
            <li className="topic">free space</li>
            <li><a href="#">123</a></li>
            <li><a href="#">123</a></li>
            <li><a href="#">123</a></li>
            <li><a href="#">123</a></li>
            <li><a href="#">123</a></li>
          </ul>
          <ul className="details">
            <li className="topic">used storage </li>
            <li><a href="#">123</a></li>
            <li><a href="#">123</a></li>
            <li><a href="#">123</a></li>
            <li><a href="#">123</a></li>
            <li><a href="#">123</a></li>
          </ul>
          </div>
          <div className="button">
            <Link to="/graph">See All</Link>
          </div>
        </div>
        </div>
        </div>
       </section>
    </div>
  );
}

export default Home;
