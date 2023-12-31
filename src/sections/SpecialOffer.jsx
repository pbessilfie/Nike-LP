import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../Components/button";

const SpecialOffer = ({ darkMode }) => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className=" flex-1">
        <img
          src={offer}
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg dark:text-white">
          <span className="text-coral-red">Special </span>
          Offer
        </h2>
        <p className="mt-4 info-text lg:max-w-lg">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Navigate a realm of possiblitlities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional{" "}
        </p>
        <div className="flex flex-wrap mt-11 gap-4">
          <Button label="View details" iconUrl={arrowRight} />
          <Button
            label="Learn more"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor={!darkMode && "text-white"}
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
