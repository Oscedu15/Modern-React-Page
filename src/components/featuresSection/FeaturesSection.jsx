import "./FeaturesSection.scss";
import Wrapper from "../wrapper/Wrapper";
import Img1 from "../../assets/feature-1.png";
import Img2 from "../../assets/feature-2.png";
import Img3 from "../../assets/feature-3.png";

const FeaturesSection = () => {
  return (
    <section className="feature">
        <Wrapper>
            <div className="feature__text">
                <h2>Improve Your Lifestile</h2>
                <p>Amet minim mollit non deserunt
                    ullamco est sit aliqua dolor do 
                    amet sint. Velit officia consequat
                    duis enim velit mollit. Exercitation
                    veniam consequat sunt nostrud amet
                </p>
            </div>

            <div className="feature__container">
                <div className="feature__card">
                    <img src={Img1} alt="" />
                    <h3>Better Sleep</h3>
                    <span>All night long</span>
                    <p>
                        Amet minim mollit non deserunt ullamco
                        est sit aliqua dolor do amet sint. Velit
                        officia consequat duis enim velit mollit.
                        Exercitation veniam consequat sunt nostrud amet.
                    </p>
                </div>

                <div className="feature__card">
                    <img src={Img2} alt="" />
                    <h3>Better Sleep</h3>
                    <span>All night long</span>
                    <p>
                        Amet minim mollit non deserunt ullamco
                        est sit aliqua dolor do amet sint. Velit
                        officia consequat duis enim velit mollit.
                        Exercitation veniam consequat sunt nostrud amet.
                    </p>
                </div>

                <div className="feature__card">
                    <img src={Img3} alt="" />
                    <h3>Better Sleep</h3>
                    <span>All night long</span>
                    <p>
                        Amet minim mollit non deserunt ullamco
                        est sit aliqua dolor do amet sint. Velit
                        officia consequat duis enim velit mollit.
                        Exercitation veniam consequat sunt nostrud amet.
                    </p>
                </div>
            </div>
        </Wrapper>
    </section>
  )
}

export default FeaturesSection