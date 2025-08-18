import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, User, Activity, Users,MapPin} from "lucide-react";


function Smoke(props: { className: string }) {
  return null;
}

interface MedicalPredictionData {
  cost: number;
  confidence: number;
  age: string;
  sex: string;
  bmi: string;
  children: string;
  smoker: string;
  region: string;
}

interface MedicalPredictionResultProps {
  prediction: MedicalPredictionData | null;
}

const MedicalPredictionResult = ({ prediction }: MedicalPredictionResultProps) => {
  if (!prediction) return null;

  const formatCost = (cost: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(cost);
  };

  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 85) return "bg-success text-success-foreground";
    if (confidence >= 70) return "bg-primary text-primary-foreground";
    return "bg-muted text-muted-foreground";
  };

  const getConfidenceText = (confidence: number) => {
    if (confidence >= 85) return "High Confidence";
    if (confidence >= 70) return "Medium Confidence";
    return "Low Confidence";
  };

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-[var(--shadow-elevated)] border-0 bg-card mt-8">
      <CardHeader className="text-center pb-4">
        <div className="flex items-center justify-center gap-3 mb-3">
          <div className="p-3 rounded-full bg-success/10">
            <TrendingUp className="h-6 w-6 text-success" />
          </div>
          <CardTitle className="text-2xl font-bold text-foreground">
            Medical Cost Prediction
          </CardTitle>
        </div>
        <Badge className={`${getConfidenceColor(prediction.confidence)} text-sm px-3 py-1`}>
          {getConfidenceText(prediction.confidence)} ({prediction.confidence}%)
        </Badge>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Cost Display */}
        <div className="text-center py-6 px-4 rounded-lg bg-gradient-to-br from-success/5 to-primary/5 border border-success/20">
          <p className="text-muted-foreground text-sm mb-2">Estimated Medical Cost</p>
          <p className="text-4xl md:text-5xl font-bold text-success mb-2">
            {formatCost(prediction.cost)}
          </p>
          <p className="text-muted-foreground text-sm">
            Based on your personal and health details
          </p>
        </div>

        {/* Medical Summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-muted/30 rounded-lg">
          <h3 className="text-lg font-semibold text-foreground mb-3 md:col-span-2">
            Your Details
          </h3>

          <div className="flex items-center gap-3">
            <User className="h-4 w-4 text-primary" />
            <span className="text-sm text-muted-foreground">Age:</span>
            <span className="font-medium text-foreground">{prediction.age}</span>
          </div>

          <div className="flex items-center gap-3">
            <User className="h-4 w-4 text-primary" />
            <span className="text-sm text-muted-foreground">Sex:</span>
            <span className="font-medium text-foreground">{prediction.sex}</span>
          </div>

          <div className="flex items-center gap-3">
            <Activity className="h-4 w-4 text-primary" />
            <span className="text-sm text-muted-foreground">BMI:</span>
            <span className="font-medium text-foreground">{prediction.bmi}</span>
          </div>

          <div className="flex items-center gap-3">
            <Users className="h-4 w-4 text-primary" />
            <span className="text-sm text-muted-foreground">Children:</span>
            <span className="font-medium text-foreground">{prediction.children}</span>
          </div>

          <div className="flex items-center gap-3">
            <Smoke className="h-4 w-4 text-primary" />
            <span className="text-sm text-muted-foreground">Smoker:</span>
            <span className="font-medium text-foreground">{prediction.smoker}</span>
          </div>

          <div className="flex items-center gap-3">
            <MapPin className="h-4 w-4 text-primary" />
            <span className="text-sm text-muted-foreground">Region:</span>
            <span className="font-medium text-foreground">{prediction.region}</span>
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center text-sm text-muted-foreground p-4 bg-muted/20 rounded-lg">
          <p>
            This prediction is generated using a machine learning model analyzing health, lifestyle,
            and regional data. The result may vary based on other factors not included in this model.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default MedicalPredictionResult;
