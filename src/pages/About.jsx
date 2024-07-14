import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">About Our Practice</h1>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <img src="/placeholder.svg" alt="Medical Practice Building" className="rounded-lg shadow-lg w-full h-[300px] object-cover" />
        </div>
        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-lg mb-4">
              At our medical practice, we are dedicated to providing high-quality, patient-centered healthcare. 
              Our mission is to improve the health and well-being of our community through compassionate care, 
              innovative treatments, and a focus on prevention.
            </p>
            <h3 className="text-xl font-semibold mb-2">Our Values</h3>
            <ul className="list-disc list-inside">
              <li>Excellence in patient care</li>
              <li>Integrity and professionalism</li>
              <li>Continuous learning and improvement</li>
              <li>Respect for all individuals</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;