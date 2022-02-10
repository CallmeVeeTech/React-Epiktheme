import React from 'react'
import './App.css'
import {IoMdFlower} from 'react-icons/io'
import {FaLock} from 'react-icons/fa'
import {AiOutlineLine} from 'react-icons/ai'
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'
import {FaHeart} from 'react-icons/fa'
import {IoIosRocket} from 'react-icons/io'
import {FaQuestion} from 'react-icons/fa'

const App = ()=>{
  return(
    <div className="project">
      <div className="hero">
        <div className="hero-hold">
        <header>
          <div className="logo">Apkly.</div>
          <div className="menu">
            <span>Home</span>
            <span>Overview</span>
            <span>Feature</span>
            <span>Contact</span>
            <button className="signup-btn">Sign Up</button>
          </div>
        </header>
        <div className="heropage">
          <div className="hero-text">
            <h1>AWESOME</h1>
            <h2>App Of The Year</h2>
            <div className="lorem-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit Ad doloribus
             laborum omnis obcaecati sit dolore</div>
            <button className="get-btn">Get It Now</button>
          </div>
          <div className="hero-img">
            <div className="circle"></div>
            <img className="img2"src={require('./gallery/ch1.png')} alt=""/>
          </div>
        </div>
        </div>
      </div>
      <div className="main-top"> <p>O V E R V I E W</p></div>
      <div className="card-hold">
      <div className="card1">
        <button className="icon-hold"><FaLock color="#fc5335" size="70px"/></button>
        <div className="card-text">
          <div className="first-text">Secure Lock</div>
          <AiOutlineLine color="#fc5335" height="5px" size="80"/>
          <div className="card-lorem">Lorem ipsum dolor sit amet, consectetur adipisicing elit Ad doloribus
             laborum omnis obcaecati sit dolor</div>
          <div className="read-icon">
            <div className="read">Read More</div>
            <HiOutlineArrowNarrowRight color="#fc5335" size="50px"/>
          </div>
        </div>
      </div>
      <div className="card">
        <button className="icon-hold"><FaHeart color="#fc5335" size="70px"/></button>
        <div className="card-text">
          <div className="first-text">Free Use</div>
          <AiOutlineLine color="#fc5335" height="5px" size="80"/>
          <div className="card-lorem">Lorem ipsum dolor sit amet, consectetur adipisicing elit Ad doloribus
             laborum omnis obcaecati sit dolor</div>
          <div className="read-icon">
            <div className="read">Read More</div>
            <HiOutlineArrowNarrowRight color="#fc5335" size="50px"/>
          </div>
        </div>
      </div>
      </div>
      <div className="main-top"> <p>F E A T U R E</p></div>
      <div className="feature-content">
        <div className="circle-hold">
          <div className="circle2"></div>
          <img className="imgfone" src={require('./gallery/fone.png')} alt=""/>
        </div>
        <div className="unlock-hold">
          <div className="unlock">UNLOCK THE BEST,</div>
          <div className="app-features">App Features Here</div>
          <div className="features-lorem">Lorem ipsum dolor sit amet, consectetur
           adipisicing elit Iste
           laboriosam facilis dolorem, adipisci quis perspiciatis!</div>
           <div className="icon-text">
             <button className="icon-hold-btn"><IoIosRocket color="white" size="30px"/></button>
             <h5> Light weight & super fast</h5>
           </div>
           <div className="icon-text">
             <button className="icon-hold-btn"><FaLock color="white" size="30px"/></button>
             <h5>  Strong security With privacy Care</h5>
           </div>
           <div className="icon-text">
             <button className="icon-hold-btn"><FaQuestion color="white" size="30px"/></button>
             <h5>Best support from our big community</h5>
           </div>
           <div className="icon-text">
             <button className="icon-hold-btn"><IoMdFlower color="white" size="30px"/></button>
             <h5> Latest updates on every week and stress free</h5>
           </div>
        </div>
      </div>
      <div className="ratings">
        <div className="people"><img src={require('./gallery/count.jpg')} alt=""/></div>
      </div>
      <div className="main-top"> <p>PRICE PLAN</p></div>
      <div className="plan-hold">
      <div className="price-box">
      <div className="price-box2">
        <div className="bundle">Basic</div>
        <div className="duration">$10/month</div>
        <div className="subscription-plan">25 GB Backup <br/>Limited support <br/> Fastest load speed</div>
        <button className="plan-btn1">Buy Now</button>
      </div>
      </div>
      <div className="price-box1">
      <div className="price-box2">
        <div className="bundle">Free</div>
        <div className="duration">$0/month</div>
        <div className="subscription-plan">5 GB Backup <br/>Limited support <br/> Medium load speed</div>
        <button className="plan-btn">Download</button>
      </div>
      </div>
      <div className="price-box1">
      <div className="price-box2">
        <div className="bundle">Advance</div>
        <div className="duration">$35/month</div>
        <div className="subscription-plan">150 GB Backup<br/>unlimited support <br/> Fastest load speed</div>
        <button className="plan-btn1">Buy Now</button>
      </div>
      </div>
      </div>
      <div className="solution-hold">
      <div className="main-top1"><h6>SOLUTION</h6></div>
      <div className="solution-content">
        <div className="solution-text">NEED MORE INFORMATION?</div>
        <div className="circle-hold">
          <div className="circle2"></div>
          <img className="imgfone2" src={require('./gallery/fone.png')} alt=""/>
        </div>
      </div>
      </div>
    </div>
  )
}
export default App;       