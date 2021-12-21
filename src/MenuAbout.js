import {BrowserRouter as Router, Link , Switch, Route} from "react-router-dom"
import './menuAbout.css'
import Projects from "./Projects";
import Technologies from "./Technologies"
import Perfil from "./img/1.jpg"

function MenuAbout() {
    return (
      <div className='menu_info'>
        <div className="menu_info_width">
          <p>Lic. Arturo López<br/><br/>
            Programmer<br/><br/>
            32 years old<br/><br/>
            Universidad De Sonora
            </p>
            <img src={Perfil}></img>
            
        <div className='line'></div>
        </div>
      <div className="menu_about">
        <div className="menu_about_1">
          <ul>
            <li><Link to="/about/technologies">Technologies</Link></li><br/>
            <li><Link to="/about/projects">Projects</Link></li>
          </ul>
          </div>
          <div className="menu_about_2">
          <Switch>
            <Route exact path="/about/technologies"component={Technologies}/>
            <Route path="/about/projects"component={Projects}/>
            
          </Switch>
          </div>
      </div>
      </div>
    );
  }

  export default MenuAbout