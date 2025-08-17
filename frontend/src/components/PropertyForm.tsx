import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Home, MapPin, Bed, Bath, Square, Calculator } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface PropertyData {
  propertyType: string;
  location: string;
  bedrooms: string;
  bathrooms: string;
  size: string;
}

interface PropertyFormProps {
  onPredict: (data: PropertyData) => void;
  isLoading: boolean;
}

const PropertyForm = ({ onPredict, isLoading }: PropertyFormProps) => {
  const [formData, setFormData] = useState<PropertyData>({
    propertyType: "",
    location: "",
    bedrooms: "",
    bathrooms: "",
    size: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.propertyType || !formData.location || !formData.bedrooms || !formData.bathrooms || !formData.size) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields to get an accurate prediction.",
        variant: "destructive",
      });
      return;
    }

    if (parseInt(formData.bedrooms) < 0 || parseInt(formData.bathrooms) < 0 || parseInt(formData.size) < 1) {
      toast({
        title: "Invalid Values",
        description: "Please enter valid positive numbers for bedrooms, bathrooms, and size.",
        variant: "destructive",
      });
      return;
    }

    onPredict(formData);
  };

  const propertyTypes = [
    "Apartment",
    "Villa", 
    "Studio",
    "Duplex",
    "Penthouse"
  ];

  const locations = [
    "Zamalek",
    "Maadi",
    "New Cairo",
    "Nasr City",
    "6th of October",
    "Heliopolis",
    "Downtown"
  ];

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-[var(--shadow-card)] border-0 bg-card">
      <CardHeader className="text-center pb-6">
        <div className="flex items-center justify-center gap-3 mb-2">
          <div className="p-2 rounded-full bg-primary/10">
            <Home className="h-6 w-6 text-primary" />
          </div>
          <CardTitle className="text-2xl font-bold text-foreground">
            House Price Prediction
          </CardTitle>
        </div>
        <p className="text-muted-foreground">
          Enter your property details to get an estimated price in Cairo
        </p>
      </CardHeader>
      
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Property Type */}
            <div className="space-y-2">
              <Label htmlFor="propertyType" className="text-sm font-medium flex items-center gap-2">
                <Home className="h-4 w-4 text-primary" />
                Property Type
              </Label>
              <Select value={formData.propertyType} onValueChange={(value) => setFormData({...formData, propertyType: value})}>
                <SelectTrigger className="bg-background border-border">
                  <SelectValue placeholder="Select property type" />
                </SelectTrigger>
                <SelectContent>
                  {propertyTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Location */}
            <div className="space-y-2">
              <Label htmlFor="location" className="text-sm font-medium flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                Location
              </Label>
              <Select value={formData.location} onValueChange={(value) => setFormData({...formData, location: value})}>
                <SelectTrigger className="bg-background border-border">
                  <SelectValue placeholder="Select location" />
                </SelectTrigger>
                <SelectContent>
                  {locations.map((location) => (
                    <SelectItem key={location} value={location}>
                      {location}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Bedrooms */}
            <div className="space-y-2">
              <Label htmlFor="bedrooms" className="text-sm font-medium flex items-center gap-2">
                <Bed className="h-4 w-4 text-primary" />
                Bedrooms
              </Label>
              <Input
                id="bedrooms"
                type="number"
                min="0"
                max="10"
                placeholder="Number of bedrooms"
                value={formData.bedrooms}
                onChange={(e) => setFormData({...formData, bedrooms: e.target.value})}
                className="bg-background border-border"
              />
            </div>

            {/* Bathrooms */}
            <div className="space-y-2">
              <Label htmlFor="bathrooms" className="text-sm font-medium flex items-center gap-2">
                <Bath className="h-4 w-4 text-primary" />
                Bathrooms
              </Label>
              <Input
                id="bathrooms"
                type="number"
                min="0"
                max="10"
                placeholder="Number of bathrooms"
                value={formData.bathrooms}
                onChange={(e) => setFormData({...formData, bathrooms: e.target.value})}
                className="bg-background border-border"
              />
            </div>
          </div>

          {/* Size */}
          <div className="space-y-2">
            <Label htmlFor="size" className="text-sm font-medium flex items-center gap-2">
              <Square className="h-4 w-4 text-primary" />
              Size (Square Meters)
            </Label>
            <Input
              id="size"
              type="number"
              min="1"
              max="10000"
              placeholder="Property size in square meters"
              value={formData.size}
              onChange={(e) => setFormData({...formData, size: e.target.value})}
              className="bg-background border-border"
            />
          </div>

          <Button 
            type="submit" 
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-6 text-lg transition-all duration-300 hover:shadow-[var(--shadow-elevated)] disabled:opacity-50"
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="flex items-center gap-2">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary-foreground"></div>
                Calculating Price...
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Calculator className="h-5 w-5" />
                Predict Price
              </div>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default PropertyForm;