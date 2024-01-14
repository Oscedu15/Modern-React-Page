import "./Hero.scss"
import Wrapper from "../wrapper/Wrapper";
import AppStore from "../../assets/app-store.svg";
import PlayStore from "../../assets/play-store.svg";
import HeroPhones from "../../assets/hero-phones.png";

const Hero = () => {
  return (
    <section className="hero">
      <Wrapper>
        <div className="hero__text">
          <h1>Stress Less <br /> Sleep Better</h1>
          <p>
            Download now and you'll be up and 
            running in just minutes
          </p>

          <div className="hero__btns">
            <a href="#">
              <img src={AppStore} alt="" />
            </a>
            <a href="#">
              <img src={PlayStore} alt="" />
            </a>
          </div>
        </div>

        <div className="hero__img-container">
          <img src={HeroPhones} alt="" />
        </div>
      </Wrapper>
    </section>
  )
}

export default Hero