import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const teamMembers = [
  { name: "Dr. Jane Smith", position: "Cardiologist", image: "/placeholder.svg", description: "Specializing in heart health with over 15 years of experience." },
  { name: "Dr. John Doe", position: "Neurologist", image: "/placeholder.svg", description: "Expert in treating complex neurological disorders." },
  { name: "Dr. Emily Brown", position: "Pulmonologist", image: "/placeholder.svg", description: "Dedicated to respiratory health and innovative treatments." },
  { name: "Dr. Michael Lee", position: "General Practitioner", image: "/placeholder.svg", description: "Providing comprehensive primary care for all ages." },
];

const Team = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Team</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamMembers.map((member, index) => (
          <Card key={index}>
            <CardHeader>
              <Avatar className="w-24 h-24 mx-auto mb-4">
                <AvatarImage src={member.image} alt={member.name} />
                <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <CardTitle className="text-center">{member.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-muted-foreground mb-2">{member.position}</p>
              <p className="text-sm text-center">{member.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Team;