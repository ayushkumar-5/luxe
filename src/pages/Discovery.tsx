import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Compass, Sparkles, Heart, Clock } from "lucide-react";

const Discovery = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const scentFamilies = [
    {
      name: "Floral",
      description: "Romantic and feminine with rose, jasmine, and lily notes",
      icon: "🌸",
      traits: ["Romantic", "Elegant", "Soft"]
    },
    {
      name: "Woody", 
      description: "Warm and sophisticated with cedar, sandalwood, and oak",
      icon: "🌲",
      traits: ["Sophisticated", "Warm", "Grounding"]
    },
    {
      name: "Oriental",
      description: "Rich and exotic with spices, amber, and vanilla", 
      icon: "✨",
      traits: ["Exotic", "Rich", "Sensual"]
    },
    {
      name: "Citrus",
      description: "Fresh and energizing with lemon, bergamot, and orange",
      icon: "🍊", 
      traits: ["Fresh", "Energizing", "Clean"]
    }
  ];

  const quizSteps = [
    {
      question: "What time of day do you prefer to wear fragrance?",
      options: ["Morning & Afternoon", "Evening & Night", "All Day", "Special Occasions Only"]
    },
    {
      question: "Which environment describes you best?",
      options: ["Urban & Modern", "Natural & Outdoors", "Cozy & Intimate", "Glamorous & Luxe"]
    },
    {
      question: "What's your ideal fragrance strength?",
      options: ["Light & Subtle", "Moderate", "Strong & Bold", "Varies by Mood"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-hero">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            <div className="space-y-4">
              <Badge className="bg-primary/20 text-primary border-primary/30">
                Scent Discovery
              </Badge>
              <h1 className="font-serif text-5xl lg:text-6xl font-bold text-foreground">
                Find Your Perfect
                <span className="block bg-gradient-gold bg-clip-text text-transparent">
                  Fragrance Match
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Let us guide you through a personalized journey to discover fragrances 
                that perfectly complement your style, personality, and preferences.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                <Compass className="h-5 w-5 mr-2" />
                Start Scent Finder
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-card/50 backdrop-blur-sm">
                <Sparkles className="h-5 w-5 mr-2" />
                Browse by Mood
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Scent Families Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="font-serif text-3xl font-bold text-foreground">
                Explore Scent Families
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Understanding fragrance families is the first step to finding your signature scent
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {scentFamilies.map((family) => (
                <Card key={family.name} className="group hover:shadow-luxury transition-luxury border-border cursor-pointer">
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="text-4xl mb-2">{family.icon}</div>
                    <h3 className="font-serif text-xl font-bold text-foreground">
                      {family.name}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {family.description}
                    </p>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {family.traits.map((trait) => (
                        <Badge key={trait} variant="outline" className="text-xs">
                          {trait}
                        </Badge>
                      ))}
                    </div>
                    <Button variant="outline" size="sm" className="w-full group-hover:bg-primary/10 transition-luxury">
                      Explore {family.name}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Scent Finder Quiz Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="font-serif text-3xl font-bold text-foreground">
                Scent Finder Quiz
              </h2>
              <p className="text-muted-foreground">
                Answer a few questions to get personalized fragrance recommendations
              </p>
              <div className="flex justify-center">
                <Badge variant="outline">
                  Step {currentStep} of {quizSteps.length}
                </Badge>
              </div>
            </div>

            <Card className="border-border">
              <CardContent className="p-8">
                <div className="space-y-8">
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-foreground mb-6">
                      {quizSteps[currentStep - 1]?.question}
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {quizSteps[currentStep - 1]?.options.map((option, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        className="h-16 text-left justify-start hover:bg-primary/10 transition-luxury"
                        onClick={() => {
                          if (currentStep < quizSteps.length) {
                            setCurrentStep(currentStep + 1);
                          }
                        }}
                      >
                        {option}
                      </Button>
                    ))}
                  </div>

                  <Separator />

                  <div className="flex justify-between items-center">
                    <Button 
                      variant="ghost" 
                      disabled={currentStep === 1}
                      onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                    >
                      Previous
                    </Button>
                    
                    <div className="flex gap-2">
                      {quizSteps.map((_, index) => (
                        <div
                          key={index}
                          className={`h-2 w-8 rounded-full transition-colors ${
                            index < currentStep ? 'bg-primary' : 'bg-muted'
                          }`}
                        />
                      ))}
                    </div>

                    {currentStep === quizSteps.length ? (
                      <Button variant="hero">
                        Get My Recommendations
                      </Button>
                    ) : (
                      <Button 
                        variant="outline"
                        onClick={() => setCurrentStep(Math.min(quizSteps.length, currentStep + 1))}
                      >
                        Next
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Discovery Features */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-border">
              <CardContent className="p-8 space-y-4">
                <Heart className="h-12 w-12 text-primary mx-auto" />
                <h3 className="font-serif text-xl font-bold text-foreground">
                  Personal Preferences
                </h3>
                <p className="text-muted-foreground">
                  Our algorithm learns your unique taste to suggest perfect matches
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-border">
              <CardContent className="p-8 space-y-4">
                <Clock className="h-12 w-12 text-primary mx-auto" />
                <h3 className="font-serif text-xl font-bold text-foreground">
                  Occasion Matching
                </h3>
                <p className="text-muted-foreground">
                  Find the right fragrance for every moment and mood
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-border">
              <CardContent className="p-8 space-y-4">
                <Sparkles className="h-12 w-12 text-primary mx-auto" />
                <h3 className="font-serif text-xl font-bold text-foreground">
                  Expert Curation
                </h3>
                <p className="text-muted-foreground">
                  Handpicked selections from master perfumers worldwide
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Discovery;