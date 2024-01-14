import "./CompaniesSection.scss";
import Wrapper from "../wrapper/Wrapper";
import Company1 from "../../assets/company-1.svg";
import Company2 from "../../assets/company-2.svg";
import Company3 from "../../assets/company-3.svg";
import Company4 from "../../assets/company-4.svg";
import Company5 from "../../assets/company-5.svg";

const CompaniesSection = () => {
  return (
    <section className="companies">
        <Wrapper>
            <h2>TRUSTED BY COMPANIES ALL OVER THE WORLD</h2>
            <div className="companies__container">
                <img src={Company1} alt="" />
                <img src={Company2} alt="" />
                <img src={Company3} alt="" />
                <img src={Company4} alt="" />
                <img src={Company5} alt="" />
            </div>
        </Wrapper>
    </section>
  )
}

export default CompaniesSection