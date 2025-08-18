import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {MapPin,Calculator, Heart, User, Activity, Users} from "lucide-react";
import { toast } from "@/hooks/use-toast";


interface MedicalData {
  age: string;
  sex: string;
  bmi: string;
  children: string;
  smoker: string;
  region: string;
}

interface MedicalFormProps {
  onPredict: (data: MedicalData) => void;
  isLoading: boolean;
}

function Smoke(props: { className: string }) {
  return null;
}

const MedicalForm = ({ onPredict, isLoading }: MedicalFormProps) => {
  const [formData, setFormData] = useState<MedicalData>({
    age: "",
    sex: "",
    bmi: "",
    children: "",
    smoker: "",
    region: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.age || !formData.sex || !formData.bmi || !formData.children || !formData.smoker || !formData.region) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields to get an accurate prediction.",
        variant: "destructive",
      });
      return;
    }

    if (parseInt(formData.age) < 0 || parseFloat(formData.bmi) <= 0 || parseInt(formData.children) < 0) {
      toast({
        title: "Invalid Values",
        description: "Please enter valid positive numbers for age, BMI, and number of children.",
        variant: "destructive",
      });
      return;
    }

    onPredict(formData);
  };

  const sexes = ["Male", "Female"];
  const smokerOptions = ["Yes", "No"];
  const regions = ["Southeast", "Southwest", "Northeast", "Northwest"];

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-[var(--shadow-card)] border-0 bg-card">
      <CardHeader className="text-center pb-6">
        <div className="flex items-center justify-center gap-3 mb-2">
          <div className="p-2 rounded-full bg-primary/10">
            <Heart className="h-6 w-6 text-primary" />
          </div>
          <CardTitle className="text-2xl font-bold text-foreground">
            Medical Cost Prediction
          </CardTitle>
        </div>
        <p className="text-muted-foreground">
          Enter your personal and health details to estimate medical costs
        </p>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Age */}
            <div className="space-y-2">
              <Label htmlFor="age" className="text-sm font-medium flex items-center gap-2">
                <User className="h-4 w-4 text-primary" />
                Age
              </Label>
              <Input
                id="age"
                type="number"
                min="0"
                max="120"
                placeholder="Your age"
                value={formData.age}
                onChange={(e) => setFormData({...formData, age: e.target.value})}
                className="bg-background border-border"
              />
            </div>

            {/* Sex */}
            <div className="space-y-2">
              <Label htmlFor="sex" className="text-sm font-medium flex items-center gap-2">
                <User className="h-4 w-4 text-primary" />
                Sex
              </Label>
              <Select value={formData.sex} onValueChange={(value) => setFormData({...formData, sex: value})}>
                <SelectTrigger className="bg-background border-border">
                  <SelectValue placeholder="Select sex" />
                </SelectTrigger>
                <SelectContent>
                  {sexes.map((s) => (
                    <SelectItem key={s} value={s}>{s}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* BMI */}
            <div className="space-y-2">
              <Label htmlFor="bmi" className="text-sm font-medium flex items-center gap-2">
                <Activity className="h-4 w-4 text-primary" />
                BMI
              </Label>
              <Input
                id="bmi"
                type="number"
                min="0"
                step="0.1"
                placeholder="Body Mass Index"
                value={formData.bmi}
                onChange={(e) => setFormData({...formData, bmi: e.target.value})}
                className="bg-background border-border"
              />
            </div>

            {/* Children */}
            <div className="space-y-2">
              <Label htmlFor="children" className="text-sm font-medium flex items-center gap-2">
                <Users className="h-4 w-4 text-primary" />
                Number of Children
              </Label>
              <Input
                id="children"
                type="number"
                min="0"
                max="20"
                placeholder="Number of children"
                value={formData.children}
                onChange={(e) => setFormData({...formData, children: e.target.value})}
                className="bg-background border-border"
              />
            </div>

            {/* Smoker */}
            <div className="space-y-2">
              <Label htmlFor="smoker" className="text-sm font-medium flex items-center gap-2">
                <Smoke className="h-4 w-4 text-primary" />
                Smoker
              </Label>
              <Select value={formData.smoker} onValueChange={(value) => setFormData({...formData, smoker: value})}>
                <SelectTrigger className="bg-background border-border">
                  <SelectValue placeholder="Are you a smoker?" />
                </SelectTrigger>
                <SelectContent>
                  {smokerOptions.map((option) => (
                    <SelectItem key={option} value={option}>{option}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Region */}
            <div className="space-y-2">
              <Label htmlFor="region" className="text-sm font-medium flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                Region
              </Label>
              <Select value={formData.region} onValueChange={(value) => setFormData({...formData, region: value})}>
                <SelectTrigger className="bg-background border-border">
                  <SelectValue placeholder="Select region" />
                </SelectTrigger>
                <SelectContent>
                  {regions.map((region) => (
                    <SelectItem key={region} value={region}>{region}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-6 text-lg transition-all duration-300 hover:shadow-[var(--shadow-elevated)] disabled:opacity-50"
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="flex items-center gap-2">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary-foreground"></div>
                Calculating Cost...
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Calculator className="h-5 w-5" />
                Predict Cost
              </div>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default MedicalForm;