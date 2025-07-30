// src/components/MetricCard.jsx
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const MetricCard = ({ title, value, description, color }) => {
  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className={`text-2xl font-bold ${color}`}>{value}</p>
      </CardContent>
    </Card>
  );
};

export default MetricCard;
