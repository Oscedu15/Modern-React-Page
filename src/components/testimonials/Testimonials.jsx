import "./Testimonials.scss";
import Wrapper from "../wrapper/Wrapper";
import Bg1 from "../../assets/bg-price-2.svg";
import Bg2 from "../../assets/bg-footer.svg";
import Img1 from "../../assets/testimonial-1.png";
import Img2 from "../../assets/testimonial-2.png";
import Img3 from "../../assets/testimonial-3.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Testimonials = () => {
  return (
    <section className="testimonials">
      <Wrapper>
        <div className="testimonials__text">
          <h2>We Help Our Users</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel sunt
            beatae esse provident culpa maxime praesentium id quae repellat
            dolorem, possimus earum perspiciatis odio facilis?
          </p>
        </div>
        <div className="testimonials__carousel">
            <Carousel autoPlay={true}
            infiniteLoop={true}
            showArrows={false}
            showStatus={false}>
                <article className="testimonials__card">
                    <blockquote className="testimonials__quote">
                        You know you are in love when you can't fall
                        asleep because reality is finally better than 
                        your dreams.
                    </blockquote>
                    <div>
                        <img src={Img1} alt="" />
                        <p>Full Name</p>
                        <span>Position @ Company</span>
                    </div>
                </article>
                <article className="testimonials__card">
                    <blockquote className="testimonials__quote">
                        You know you are in love when you can't fall
                        asleep because reality is finally better than 
                        your dreams.
                    </blockquote>
                    <div>
                        <img src={Img2} alt="" />
                        <p>Full Name</p>
                        <span>Position @ Company</span>
                    </div>
                </article>
                <article className="testimonials__card">
                    <blockquote className="testimonials__quote">
                        You know you are in love when you can't fall
                        asleep because reality is finally better than 
                        your dreams.
                    </blockquote>
                    <div>
                        <img src={Img3} alt="" />
                        <p>Full Name</p>
                        <span>Position @ Company</span>
                    </div>
                </article>
            </Carousel>
        </div>
      </Wrapper>
      <img className="testimonials__bg-1" src={Bg1} alt="" />
      <img className="testimonials__bg-2" src={Bg2} alt="" />
    </section>
  );
};

export default Testimonials;
