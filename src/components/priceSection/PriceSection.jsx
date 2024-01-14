import "./PriceSection.scss";
import Wrapper from "../wrapper/Wrapper";
import Button from "../button/Button";
import { AiOutlineCheck } from "react-icons/ai";

const data = [
    {
        id: 1,
        name: "Plan Basic",
        price: "Free",
        valid: "Forever",
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ullam adipisci nesciunt",
        listItem: "This is custom list item",
    },
    {
        id: 2,
        name: "Plan Regular",
        price: "$60",
        valid: "USD / mo Billed yearly ($720)",
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ullam adipisci nesciunt",
        listItem: "This is custom list item",
    },
    {
        id: 3,
        name: "Plan Full",
        price: "$90",
        valid: "USD / mo Billed yearly ($1000)",
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ullam adipisci nesciunt",
        listItem: "This is custom list item",
    },
];



const PriceSection = () => {
  return (
    <section className="price">
        <Wrapper>
            <div className="price__text">
                <h2>Choose Your Plan</h2>
                <p>
                    Amet minim mollit non deserunt
                    ullamco est sit aliqua dolor do
                    amet sint. Velit officia consequat duis
                    enim velit mollit. Exercitation veniam 
                    consequat sunt nostrud amet.
                </p>
            </div>

            <div className="price__container">
                {data.map((card) => (
                    <article key={card.id} className="price__card">
                        <h3>{card.name}</h3>
                        <div className="price__card-price">
                            <h3>{card.price}</h3>
                            <div className="price__card-valid">
                                {card.valid}
                            </div>
                        </div>
                        <p>{card.des}</p>
                        <div className="price__card-listContainer">
                            <div className="price__card-list">
                                <AiOutlineCheck/>
                                <p>{card.listItem}</p>
                            </div>
                            <div className="price__card-list">
                                <AiOutlineCheck/>
                                <p>{card.listItem}</p>
                            </div>
                            <div className="price__card-list">
                                <AiOutlineCheck/>
                                <p>{card.listItem}</p>
                            </div>
                            <div className="price__card-list">
                                <AiOutlineCheck/>
                                <p>{card.listItem}</p>
                            </div>
                        </div>
                        <Button className="price__btn">Select plan</Button>
                    </article>
                ))}
            </div>
        </Wrapper>
    </section>
  )
}

export default PriceSection