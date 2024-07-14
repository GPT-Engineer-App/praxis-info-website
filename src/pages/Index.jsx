import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full bg-gradient-to-r from-blue-500 to-teal-500 text-white py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Our Medical Practice</h1>
          <p className="text-xl mb-8">Providing quality healthcare for you and your family</p>
          <Button asChild size="lg">
            <Link to="/contact">Book an Appointment</Link>
          </Button>
        </div>
      </div>
      <div className="container mx-auto py-12 px-4">
        <h2 className="text-3xl font-semibold mb-6 text-center">About Our Practice</h2>
        <p className="text-lg text-center max-w-2xl mx-auto">
          We are committed to providing comprehensive and compassionate healthcare services. 
          Our team of experienced professionals is dedicated to ensuring your well-being and offering 
          personalized care tailored to your needs.
        </p>
      </div>
    </div>
  );
};

export default Index;