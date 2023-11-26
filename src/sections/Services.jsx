import { services } from "../constants";
import ServiceCard from "../Components/ServiceCard";
const Services = () => {
  return (
    <>
      <h2 className="text-4xl font-palanquin font-bold mb-10">
        <span className="text-coral-red">Our </span> Services
      </h2>
      <section className="max-container flex justify-center flex-wrap gap-9">
        {services.map((serivice) => (
          <ServiceCard key={serivice.label} {...serivice} />
        ))}
      </section>
    </>
  );
};

export default Services;
