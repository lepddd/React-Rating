import reactLogo from "../../assets/illustration-thank-you.svg";
import useRating from "../../store/store";
import "./FinishCard.css";

export const FinishCard = () => {
  const answer = useRating((state) => state.answer);

  return (
    <div className="finish_box">
      <img src={reactLogo} alt="" />

      <p className="rating">Your selected {answer} out of 5</p>

      <h1 className="finish_title">Thank you!</h1>

      <p className="finish_description">
        We appreciated you taking time to give a rating. if you ever need
        support, don't hesitate to get in touch!
      </p>
    </div>
  );
};
