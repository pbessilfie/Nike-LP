import { reviews } from "../constants";
import ReviewCard from "../Components/ReviewCard";
const CustomerReview = () => {
  return (
    <section className="max-container">
      <h3 className="font-palanquin text-center text-4xl font-bold dark:text-white">
        What Our <span className="text-coral-red">Customers </span>
        Say?
      </h3>
      <p className="text-slate-grey info-text m-auto max-w-lg text-center">
        Hear genuine stories from our satisfied customers about their
        exceptional experience with us.
      </p>
      <div className="flex max-lg:flex-col justify-evenly items-center gap-14 mt-24">
       {reviews.map((review) =>(
        <ReviewCard key={review.customerName}
          imgURL={review.imgURL}
          customerName={review.customerName}
          rating={review.rating}
          feedback={review.feedback}
        />
       ))}
        </div>
    </section>
  );
};

export default CustomerReview;
