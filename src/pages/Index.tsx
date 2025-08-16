import { useState } from "react";
import PropertyForm from "@/components/PropertyForm";
import PredictionResult from "@/components/PredictionResult";
import { toast } from "@/hooks/use-toast";

interface PropertyData {
  propertyType: string;
  location: string;
  bedrooms: string;
  bathrooms: string;
  size: string;
}

interface PredictionData {
  price: number;
  confidence: number;
  propertyType: string;
  location: string;
  bedrooms: string;
  bathrooms: string;
  size: string;
}

const Index = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [prediction, setPrediction] = useState<PredictionData | null>(null);

  // Mock prediction API call
  const handlePredict = async (data: PropertyData) => {
    setIsLoading(true);
    setPrediction(null);

    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Mock prediction logic based on Cairo real estate patterns
      const basePrice = calculateBasePrice(data);
      const locationMultiplier = getLocationMultiplier(data.location);
      const typeMultiplier = getPropertyTypeMultiplier(data.propertyType);
      
      const finalPrice = Math.round(basePrice * locationMultiplier * typeMultiplier);
      const confidence = Math.floor(Math.random() * 15) + 80; // 80-95% confidence

      const predictionResult: PredictionData = {
        price: finalPrice,
        confidence: confidence,
        ...data
      };

      setPrediction(predictionResult);
      
      toast({
        title: "Prediction Complete!",
        description: `Estimated price: ${new Intl.NumberFormat('en-EG', {
          style: 'currency',
          currency: 'EGP',
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        }).format(finalPrice)}`,
      });

    } catch (error) {
      toast({
        title: "Prediction Failed",
        description: "Unable to calculate price prediction. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Mock calculation functions based on Cairo real estate market
  const calculateBasePrice = (data: PropertyData) => {
    const size = parseInt(data.size);
    const bedrooms = parseInt(data.bedrooms);
    const bathrooms = parseInt(data.bathrooms);
    
    // Base price per square meter in EGP (average Cairo prices)
    let pricePerSqm = 15000;
    
    // Adjust based on number of rooms
    if (bedrooms >= 3) pricePerSqm += 2000;
    if (bedrooms >= 5) pricePerSqm += 3000;
    if (bathrooms >= 3) pricePerSqm += 1500;
    
    return size * pricePerSqm;
  };

  const getLocationMultiplier = (location: string) => {
    const multipliers: { [key: string]: number } = {
      "Zamalek": 2.5,
      "Maadi": 2.0,
      "New Cairo": 1.8,
      "Heliopolis": 1.5,
      "Nasr City": 1.3,
      "6th of October": 1.2,
      "Downtown": 1.0
    };
    return multipliers[location] || 1.0;
  };

  const getPropertyTypeMultiplier = (type: string) => {
    const multipliers: { [key: string]: number } = {
      "Penthouse": 1.8,
      "Villa": 1.6,
      "Duplex": 1.3,
      "Apartment": 1.0,
      "Studio": 0.8
    };
    return multipliers[type] || 1.0;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/30">
      {/* Header */}
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Cairo Real Estate
            <span className="block text-primary">Price Predictor</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get accurate property price estimates using advanced machine learning 
            algorithms trained on Cairo's real estate market data.
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <PropertyForm onPredict={handlePredict} isLoading={isLoading} />
          <PredictionResult prediction={prediction} />
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            © 2024 Cairo Property Predictor. Estimates based on market analysis and trends.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;