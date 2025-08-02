import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Clock, Users, Shield } from "lucide-react";
import energeticWoman from "@/assets/energetic-woman-50s.jpg";
import focusedMan from "@/assets/focused-man-40s.jpg";

const AFFILIATE_LINK = "https://truebalancelife.store/mitolynofficial";

const MitolynLandingPage = () => {
  const headlines = [
    "Unlock Your Metabolic Power at 40+",
    "Feel 20 Years Younger Again",
    "Beat Brain Fog & Low Energy Forever", 
    "The Energy Secret Doctors Won't Tell You",
    "Transform Your Body's Power Source",
    "Reignite Your Youthful Energy",
    "Break Free From Aging Fatigue",
    "Metabolic Revolution for 40+ Adults",
    "Your Energy Crisis Ends Here",
    "Reclaim Your Prime Energy Years"
  ];

  const subheadlines = [
    "Discover how thousands of adults 40+ are burning more calories, boosting focus, and feeling decades younger with this breakthrough metabolic formula.",
    "The proprietary blend that's helping busy professionals overcome afternoon crashes and maintain all-day energy without jitters or side effects.",
    "See why health experts are calling this the missing piece in healthy aging and why your metabolism has been working against you until now.",
    "Learn the scientific secret behind turning your body into a 24/7 calorie-burning machine while improving mental clarity and mood.",
    "Find out how this doctor-formulated solution tackles the root cause of age-related energy decline and metabolic slowdown."
  ];

  const oldWayPain = [
    "You wake up tired, struggle through afternoon crashes, and feel like your body is working against you. Every year, it gets harder to maintain energy, focus, and the vitality you once had.",
    "Brain fog clouds your thinking, low energy drains your motivation, and your metabolism seems to have hit the brakes. You're tired of feeling older than your years and missing out on life's best moments.",
    "The mirror shows the effects of aging, but worse is how you FEEL - sluggish, unfocused, and frustrated. Traditional solutions haven't worked, and you're running out of hope for real change.",
    "Your energy tanks by 3 PM, your mind feels foggy, and simple tasks feel overwhelming. You've tried everything but nothing addresses why your body's energy systems are failing you.",
    "Each day feels like an uphill battle against fatigue, mental fog, and a metabolism that seems broken. You know you're capable of more but your body won't cooperate."
  ];

  const newWayBenefits = [
    "Imagine waking up refreshed, maintaining steady energy all day, and feeling mentally sharp and focused. Your metabolism works FOR you, burning calories efficiently while you feel decades younger.",
    "Picture having the energy to tackle your day with enthusiasm, the mental clarity to excel at work, and the vitality to enjoy evenings with loved ones - all while your body naturally supports healthy aging.",
    "Envision feeling confident, energetic, and mentally sharp again. Your body becomes a efficient, calorie-burning machine while you experience the focus and drive you had in your prime.",
    "See yourself with sustained energy from morning to night, crystal-clear thinking, and a metabolism that supports your goals. No more afternoon crashes or foggy thinking - just consistent vitality.",
    "Experience the transformation thousands have discovered: boundless energy, laser focus, and a body that feels 20 years younger. Your metabolism becomes your ally in healthy, vibrant aging."
  ];

  const testimonials = [
    {
      name: "Sarah M., 52",
      text: "After just 3 weeks, I have energy all day and my mind is sharper than it's been in years. I feel like I've got my life back!",
      rating: 5
    },
    {
      name: "Mike D., 47", 
      text: "The afternoon crashes are gone and I'm sleeping better too. My wife says I seem 10 years younger - I feel it too!",
      rating: 5
    }
  ];

  const ctaTexts = [
    "Discover Your Energy Solution",
    "Unlock My Metabolic Power", 
    "Get My Energy Back Now",
    "Start My Transformation",
    "Claim My Vitality Today"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-mitolyn-purple/10 to-mitolyn-pink/10" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center space-y-8">
            <Badge className="bg-mitolyn-orange text-white px-6 py-2 text-lg">
              <Clock className="w-4 h-4 mr-2" />
              Limited Time Discovery
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-mitolyn-purple to-mitolyn-pink bg-clip-text text-transparent leading-tight">
              Unlock Your Metabolic Power at 40+
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Discover how thousands of adults 40+ are burning more calories, boosting focus, and feeling decades younger with this breakthrough metabolic formula.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button variant="hero" size="lg" asChild>
                <a href={AFFILIATE_LINK} className="no-underline">
                  Discover Your Energy Solution
                </a>
              </Button>
              <p className="text-sm text-muted-foreground">*See the science behind the transformation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section - Old Way */}
      <section className="py-16 px-4 bg-muted/20">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-8">
            <h2 className="text-4xl font-bold text-foreground">
              The Hidden Energy Crisis Affecting Millions Over 40
            </h2>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-destructive">
              <p className="text-lg text-muted-foreground leading-relaxed">
                You wake up tired, struggle through afternoon crashes, and feel like your body is working against you. Every year, it gets harder to maintain energy, focus, and the vitality you once had. Brain fog clouds your thinking, low energy drains your motivation, and your metabolism seems to have hit the brakes.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 pt-8">
              <Card className="p-6 border-destructive/20">
                <CardContent className="space-y-4">
                  <h3 className="text-xl font-semibold text-destructive">Energy Crashes</h3>
                  <p className="text-muted-foreground">That 3 PM wall hits harder each year, leaving you drained and unproductive.</p>
                </CardContent>
              </Card>
              
              <Card className="p-6 border-destructive/20">
                <CardContent className="space-y-4">
                  <h3 className="text-xl font-semibold text-destructive">Brain Fog</h3>
                  <p className="text-muted-foreground">Mental clarity becomes a luxury as focus and memory start to decline.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section - New Way */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-12">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-mitolyn-blue to-mitolyn-orange bg-clip-text text-transparent">
              What If You Could Feel 20 Years Younger?
            </h2>
            
            <div className="bg-gradient-to-r from-mitolyn-pink/10 to-mitolyn-blue/10 rounded-3xl p-8">
              <p className="text-xl text-foreground leading-relaxed max-w-4xl mx-auto">
                Imagine waking up refreshed, maintaining steady energy all day, and feeling mentally sharp and focused. Your metabolism works FOR you, burning calories efficiently while you feel decades younger. This isn't wishful thinking – it's what thousands of adults 40+ are experiencing right now.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 pt-8">
              <div className="flex items-center space-x-6">
                <img 
                  src={energeticWoman} 
                  alt="Energetic woman in her 50s looking vibrant and healthy"
                  className="w-24 h-24 rounded-full object-cover shadow-lg"
                />
                <div className="text-left">
                  <h3 className="text-xl font-semibold text-mitolyn-pink">Sustained Energy</h3>
                  <p className="text-muted-foreground">All-day vitality without crashes or jitters</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-6">
                <img 
                  src={focusedMan} 
                  alt="Focused man in his 40s looking confident and energetic"
                  className="w-24 h-24 rounded-full object-cover shadow-lg"
                />
                <div className="text-left">
                  <h3 className="text-xl font-semibold text-mitolyn-blue">Mental Clarity</h3>
                  <p className="text-muted-foreground">Sharp focus and improved cognitive function</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-gradient-to-r from-mitolyn-purple/5 to-mitolyn-pink/5">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-12">
            <h2 className="text-4xl font-bold text-foreground">
              Real Results From Real People
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="p-6 bg-white shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="space-y-4">
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-mitolyn-yellow text-mitolyn-yellow" />
                      ))}
                    </div>
                    <p className="text-lg text-muted-foreground italic">"{testimonial.text}"</p>
                    <p className="font-semibold text-mitolyn-pink">- {testimonial.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Urgency Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-mitolyn-orange/10 to-mitolyn-pink/10">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="space-y-8">
            <Badge className="bg-destructive text-white px-6 py-3 text-lg">
              <Users className="w-5 h-5 mr-2" />
              Supply Running Low
            </Badge>
            
            <h2 className="text-4xl font-bold text-foreground">
              Don't Wait - Limited Supply Available
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Due to overwhelming demand and the time-intensive process of sourcing our premium ingredients, 
              supplies are limited. Thousands are already experiencing the transformation - secure your opportunity today.
            </p>

            <div className="flex justify-center items-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-mitolyn-orange">15,000+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-mitolyn-pink">94%</div>
                <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-mitolyn-blue">30 Days</div>
                <div className="text-sm text-muted-foreground">To See Results</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-mitolyn-purple to-mitolyn-pink">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="space-y-8 text-white">
            <h2 className="text-4xl md:text-5xl font-bold">
              Your Energy Transformation Starts Now
            </h2>
            
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Join thousands who've already discovered the secret to sustained energy, mental clarity, 
              and feeling decades younger. See why this breakthrough is changing lives for adults 40+.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
              <Button variant="hero" size="lg" className="bg-white text-mitolyn-purple hover:bg-white/90" asChild>
                <a href={AFFILIATE_LINK} className="no-underline">
                  Unlock My Metabolic Power
                </a>
              </Button>
              
              <div className="flex items-center space-x-2 text-white/80">
                <Shield className="w-5 h-5" />
                <span className="text-sm">Science-backed formula</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MitolynLandingPage;