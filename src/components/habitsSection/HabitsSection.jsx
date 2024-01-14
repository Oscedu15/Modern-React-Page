import "./HabitsSection.scss";
import Wrapper from "../wrapper/Wrapper";
import PhoneImg from "../../assets/habit-phone.png"
import Bg from "../../assets/habit-bg.svg"

const HabitsSection = () => {
  return (
    <section className="habits">
        <Wrapper className="habits__container">
            <div className="habits__img-container">
                <img className="img-1"  src={PhoneImg} alt="" />
                <img src={Bg} alt="" />
            </div>

            <div className="habits__text">
                <h2>Fight Your Bad Habits!</h2>
                <p>Amet minim mollit non deserunt
                    ullamco est sit aliqua dolor do amet
                    sint. Velit officia consequat duis
                    enim velit mollit. Exercitation veniam
                    consequat sunt nostrud amet.
                </p>
            </div>
        </Wrapper>
    </section>
  )
}

export default HabitsSection