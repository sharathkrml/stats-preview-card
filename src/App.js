import "./App.css";
import headerImg from "./assets/images/image-header-mobile.jpg";
function App() {
  return (
    <div className="App">
      <div className="card">
        <div className="card-img">
          <img src={headerImg} alt="headerImage" />
        </div>
        <div className="card-body">
          <div className="main-heading">
            Get <span>insights</span> that help your business grow.
          </div>
          <div className="main-paragraph">
            Discover the benefits of data analytics and make better decisions
            regarding revenue, customer experience, and overall efficiency.
          </div>
          <div className="stats">
            <div className="stats-body">
              <div className="stats-main">10k+</div>
              <div className="stats-desc">COMPANIES</div>
            </div>
            <div className="stats-body">
              <div className="stats-main">314</div>
              <div className="stats-desc">TEMPLATES</div>
            </div>
            <div className="stats-body">
              <div className="stats-main">12M+</div>
              <div className="stats-desc">QUERIES</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
