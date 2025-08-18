import { useState } from "react";
<<<<<<< HEAD
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
=======
import MedicalForm from "@/components/MedicalForm.tsx";
import MedicalPredictionResult from "@/components/MedicalPredictionResult.tsx";
import { toast } from "@/hooks/use-toast";

interface MedicalData {
  age: string;
  sex: string;
  bmi: string;
  children: string;
  smoker: string;
  region: string;
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
>>>>>>> 49dc6356 (Init MCP repo)
}

const Index = () => {
  const [isLoading, setIsLoading] = useState(false);
<<<<<<< HEAD
  const [prediction, setPrediction] = useState<PredictionData | null>(null);

  // Mock prediction API call
  const handlePredict = async (data: PropertyData) => {
=======
  const [prediction, setPrediction] = useState<MedicalPredictionData | null>(null);

  const handlePredict = async (data: MedicalData) => {
>>>>>>> 49dc6356 (Init MCP repo)
    setIsLoading(true);
    setPrediction(null);

    try {
<<<<<<< HEAD
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
=======
      // Send POST request to FastAPI backend
      const response = await fetch("http://localhost:8000/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Failed to fetch prediction");

      const result: MedicalPredictionData = await response.json();
      setPrediction(result);

      toast({
        title: "Prediction Complete!",
        description: `Estimated medical cost: ${new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        }).format(result.cost)}`,
      });
    } catch (error) {
      toast({
        title: "Prediction Failed",
        description: "Unable to calculate medical cost prediction. Please try again.",
        variant: "destructive",
      });
      console.error(error);
>>>>>>> 49dc6356 (Init MCP repo)
    } finally {
      setIsLoading(false);
    }
  };

<<<<<<< HEAD
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

=======
>>>>>>> 49dc6356 (Init MCP repo)
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/30">
      {/* Header */}
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
<<<<<<< HEAD
            Cairo Real Estate
            <span className="block text-primary">Price Predictor</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get accurate property price estimates using advanced machine learning 
            algorithms trained on Cairo's real estate market data.
=======
            <span className="block text-primary">Medical Cost Predictor</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get personalized medical cost estimates using machine learning.
>>>>>>> 49dc6356 (Init MCP repo)
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
<<<<<<< HEAD
          <PropertyForm onPredict={handlePredict} isLoading={isLoading} />
          <PredictionResult prediction={prediction} />
=======
          <MedicalForm onPredict={handlePredict} isLoading={isLoading} />
          <MedicalPredictionResult prediction={prediction} />
>>>>>>> 49dc6356 (Init MCP repo)
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
<<<<<<< HEAD
            © 2024 Cairo Property Predictor. Estimates based on market analysis and trends.
=======
            © 2025 Health Cost Predictor. Estimates are based on machine learning analysis and may vary.
>>>>>>> 49dc6356 (Init MCP repo)
          </p>
        </div>
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default Index;
=======
export default Index;
>>>>>>> 49dc6356 (Init MCP repo)
