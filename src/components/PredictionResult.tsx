import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, MapPin, Home, Bed, Bath, Square } from "lucide-react";

interface PredictionData {
  price: number;
  confidence: number;
  propertyType: string;
  location: string;
  bedrooms: string;
  bathrooms: string;
  size: string;
}

interface PredictionResultProps {
  prediction: PredictionData | null;
}

const PredictionResult = ({ prediction }: PredictionResultProps) => {
  if (!prediction) return null;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-EG', {
      style: 'currency',
      currency: 'EGP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
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
            Price Prediction
          </CardTitle>
        </div>
        <Badge className={`${getConfidenceColor(prediction.confidence)} text-sm px-3 py-1`}>
          {getConfidenceText(prediction.confidence)} ({prediction.confidence}%)
        </Badge>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Price Display */}
        <div className="text-center py-6 px-4 rounded-lg bg-gradient-to-br from-success/5 to-primary/5 border border-success/20">
          <p className="text-muted-foreground text-sm mb-2">Estimated Price</p>
          <p className="text-4xl md:text-5xl font-bold text-success mb-2">
            {formatPrice(prediction.price)}
          </p>
          <p className="text-muted-foreground text-sm">
            Based on current market trends in Cairo
          </p>
        </div>

        {/* Property Summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-muted/30 rounded-lg">
          <h3 className="text-lg font-semibold text-foreground mb-3 md:col-span-2">
            Property Summary
          </h3>
          
          <div className="flex items-center gap-3">
            <Home className="h-4 w-4 text-primary" />
            <span className="text-sm text-muted-foreground">Type:</span>
            <span className="font-medium text-foreground">{prediction.propertyType}</span>
          </div>
          
          <div className="flex items-center gap-3">
            <MapPin className="h-4 w-4 text-primary" />
            <span className="text-sm text-muted-foreground">Location:</span>
            <span className="font-medium text-foreground">{prediction.location}</span>
          </div>
          
          <div className="flex items-center gap-3">
            <Bed className="h-4 w-4 text-primary" />
            <span className="text-sm text-muted-foreground">Bedrooms:</span>
            <span className="font-medium text-foreground">{prediction.bedrooms}</span>
          </div>
          
          <div className="flex items-center gap-3">
            <Bath className="h-4 w-4 text-primary" />
            <span className="text-sm text-muted-foreground">Bathrooms:</span>
            <span className="font-medium text-foreground">{prediction.bathrooms}</span>
          </div>
          
          <div className="flex items-center gap-3 md:col-span-2">
            <Square className="h-4 w-4 text-primary" />
            <span className="text-sm text-muted-foreground">Size:</span>
            <span className="font-medium text-foreground">{prediction.size} m²</span>
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center text-sm text-muted-foreground p-4 bg-muted/20 rounded-lg">
          <p>
            This prediction is based on machine learning analysis of recent property sales 
            and market trends in Cairo. Results may vary based on specific property conditions 
            and market fluctuations.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default PredictionResult;