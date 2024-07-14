import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Brain, Stethoscope, Activity } from "lucide-react";

const services = [
  { title: "Cardiology", icon: Heart, description: "Comprehensive heart health services" },
  { title: "Neurology", icon: Brain, description: "Expert care for neurological conditions" },
  { title: "Pulmonology", icon: Activity, description: "Specialized respiratory treatments" },
  { title: "General Medicine", icon: Stethoscope, description: "Routine check-ups and preventive care" },
];

const Services = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Services</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <service.icon className="h-6 w-6" />
                {service.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Services;