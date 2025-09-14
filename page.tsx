"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Zap, Target, Users, ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageToggle } from "@/components/language-toggle"

const content = {
  en: {
    title: "Test-Me",
    nav: {
      features: "Features",
      howItWorks: "How It Works",
      startQuiz: "Start Quiz",
    },
    hero: {
      badge: "Powered by AI",
      title: "Master Any Subject with AI-Generated Quizzes",
      subtitle:
        "Experience personalized learning with intelligent quizzes that adapt to your knowledge level. Get instant feedback and detailed explanations powered by advanced AI.",
      startLearning: "Start Learning Now",
      viewDemo: "View Demo",
    },
    features: {
      title: "Why Choose Test-Me?",
      subtitle: "Harness the power of artificial intelligence to create engaging, personalized learning experiences",
      items: [
        {
          title: "AI-Powered Generation",
          description:
            "Advanced AI creates unique, contextually relevant questions tailored to your chosen topic and difficulty level",
        },
        {
          title: "Instant Feedback",
          description:
            "Get immediate, detailed explanations for every answer with personalized insights to accelerate learning",
        },
        {
          title: "Adaptive Difficulty",
          description:
            "Choose from easy, medium, or hard difficulty levels that match your current knowledge and learning goals",
        },
        {
          title: "Multiple Subjects",
          description:
            "Explore unlimited topics from science and math to history and literature - perfect for students and lifelong learners",
        },
        {
          title: "Smart Evaluation",
          description:
            "AI analyzes your responses and provides comprehensive scoring with actionable recommendations for improvement",
        },
        {
          title: "Progress Tracking",
          description:
            "Monitor your learning journey with detailed analytics and insights into your strengths and areas for growth",
        },
      ],
    },
    howItWorks: {
      title: "How It Works",
      subtitle: "Get started with AI-powered learning in just three simple steps",
      steps: [
        {
          title: "Choose Your Topic",
          description: "Select any subject you want to learn about and set your preferred difficulty level",
        },
        {
          title: "Take the Quiz",
          description: "Answer AI-generated questions designed specifically for your learning objectives",
        },
        {
          title: "Learn & Improve",
          description: "Review your results with detailed explanations and personalized feedback",
        },
      ],
      tryNow: "Try It Now",
    },
    footer: {
      tagline: "Empowering learners with AI-driven educational experiences",
      built: "Built with Next.js, Tailwind CSS, and AI",
    },
  },
  hi: {
    title: "टेस्ट-मी",
    nav: {
      features: "विशेषताएं",
      howItWorks: "यह कैसे काम करता है",
      startQuiz: "क्विज़ शुरू करें",
    },
    hero: {
      badge: "AI द्वारा संचालित",
      title: "AI-जनरेटेड क्विज़ के साथ किसी भी विषय में महारत हासिल करें",
      subtitle:
        "बुद्धिमान क्विज़ के साथ व्यक्तिगत शिक्षा का अनुभव करें जो आपके ज्ञान स्तर के अनुकूल होती है। उन्नत AI द्वारा संचालित तत्काल फीडबैक और विस्तृत स्पष्टीकरण प्राप्त करें।",
      startLearning: "अभी सीखना शुरू करें",
      viewDemo: "डेमो देखें",
    },
    features: {
      title: "टेस्ट-मी क्यों चुनें?",
      subtitle: "आकर्षक, व्यक्तिगत शिक्षा अनुभव बनाने के लिए कृत्रिम बुद्धिमत्ता की शक्ति का उपयोग करें",
      items: [
        {
          title: "AI-संचालित जनरेशन",
          description: "उन्नत AI आपके चुने गए विषय और कठिनाई स्तर के अनुकूल अनूठे, प्रासंगिक प्रश्न बनाता है",
        },
        {
          title: "तत्काल फीडबैक",
          description: "सीखने को तेज़ करने के लिए व्यक्तिगत अंतर्दृष्टि के साथ हर उत्तर के लिए तत्काल, विस्तृत स्पष्टीकरण प्राप्त करें",
        },
        {
          title: "अनुकूली कठिनाई",
          description: "आसान, मध्यम या कठिन कठिनाई स्तर चुनें जो आपके वर्तमान ज्ञान और सीखने के लक्ष्यों से मेल खाते हैं",
        },
        {
          title: "कई विषय",
          description:
            "विज्ञान और गणित से लेकर इतिहास और साहित्य तक असीमित विषयों का अन्वेषण करें - छात्रों और आजीवन शिक्षार्थियों के लिए बिल्कुल सही",
        },
        {
          title: "स्मार्ट मूल्यांकन",
          description:
            "AI आपकी प्रतिक्रियाओं का विश्लेषण करता है और सुधार के लिए कार्यात्मक सिफारिशों के साथ व्यापक स्कोरिंग प्रदान करता है",
        },
        {
          title: "प्रगति ट्रैकिंग",
          description: "अपनी शक्तियों और विकास के क्षेत्रों में विस्तृत विश्लेषण और अंतर्दृष्टि के साथ अपनी सीखने की यात्रा की निगरानी करें",
        },
      ],
    },
    howItWorks: {
      title: "यह कैसे काम करता है",
      subtitle: "केवल तीन सरल चरणों में AI-संचालित शिक्षा के साथ शुरुआत करें",
      steps: [
        {
          title: "अपना विषय चुनें",
          description: "कोई भी विषय चुनें जिसके बारे में आप सीखना चाहते हैं और अपना पसंदीदा कठिनाई स्तर सेट करें",
        },
        {
          title: "क्विज़ लें",
          description: "विशेष रूप से आपके सीखने के उद्देश्यों के लिए डिज़ाइन किए गए AI-जनरेटेड प्रश्नों के उत्तर दें",
        },
        {
          title: "सीखें और सुधारें",
          description: "विस्तृत स्पष्टीकरण और व्यक्तिगत फीडबैक के साथ अपने परिणामों की समीक्षा करें",
        },
      ],
      tryNow: "अभी कोशिश करें",
    },
    footer: {
      tagline: "AI-संचालित शैक्षिक अनुभवों के साथ शिक्षार्थियों को सशक्त बनाना",
      built: "Next.js, Tailwind CSS, और AI के साथ निर्मित",
    },
  },
}

export default function HomePage() {
  const [language, setLanguage] = useState<"en" | "hi">("en")
  const [isTranslating, setIsTranslating] = useState(false)

  const handleLanguageChange = async (newLanguage: string) => {
    if (newLanguage === language) return

    setIsTranslating(true)
    setLanguage(newLanguage as "en" | "hi")
    setIsTranslating(false)
  }

  const t = content[language]

  return (
    <div
      className={`min-h-screen bg-background transition-opacity duration-300 ${isTranslating ? "opacity-50" : "opacity-100"}`}
    >
      {/* Header */}
      <header className="border-b border-border bg-card/90 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="relative animate-float">
              <Brain className="h-8 w-8 text-primary animate-glow" />
              <div className="absolute inset-0 h-8 w-8 bg-gradient-to-br from-primary to-secondary opacity-20 rounded-full blur-sm"></div>
            </div>
            <h1 className="text-2xl font-bold text-primary bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text">
              {t.title}
            </h1>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="#features"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-105 transform"
            >
              {t.nav.features}
            </Link>
            <Link
              href="#how-it-works"
              className="text-muted-foreground hover:text-secondary transition-colors duration-300 hover:scale-105 transform"
            >
              {t.nav.howItWorks}
            </Link>
            <LanguageToggle currentLanguage={language} onLanguageChange={handleLanguageChange} />
            <ThemeToggle />
            <Button
              asChild
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white"
            >
              <Link href="/quiz/setup">{t.nav.startQuiz}</Link>
            </Button>
          </nav>
          <div className="md:hidden flex items-center gap-2">
            <LanguageToggle currentLanguage={language} onLanguageChange={handleLanguageChange} />
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 animate-pulse-slow"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-accent/20 to-info/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div className="container mx-auto text-center max-w-4xl relative z-10">
          <Badge
            variant="secondary"
            className="mb-4 bg-secondary/80 text-secondary-foreground border-secondary animate-glow"
          >
            <Sparkles className="h-4 w-4 mr-1 text-secondary-foreground animate-pulse" />
            {t.hero.badge}
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold text-balance mb-6 animate-float text-foreground">
            {t.hero.title.split("AI-Generated")[0]}
            <span className="text-primary bg-gradient-to-r from-primary via-secondary via-accent to-info bg-clip-text animate-glow">
              AI-Generated
            </span>
            {t.hero.title.split("AI-Generated")[1]}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground text-balance mb-8 max-w-3xl mx-auto leading-relaxed">
            {t.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              asChild
              className="text-lg px-10 py-4 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-lg hover:shadow-xl transition-all text-white"
            >
              <Link href="/quiz/setup">
                {t.hero.startLearning}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-10 py-4 bg-background border-primary/50 hover:bg-primary/10 hover:border-primary hover:scale-105 transform transition-all duration-300 shadow-lg text-foreground"
            >
              {t.hero.viewDemo}
              <Sparkles className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="py-20 px-4 bg-gradient-to-br from-muted/30 via-accent/5 to-secondary/5 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 animate-pulse-slow"></div>
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary bg-gradient-to-r from-primary to-secondary bg-clip-text">
              {t.features.title}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t.features.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.features.items.map((feature, index) => (
              <Card
                key={index}
                className="border-border/50 hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-card to-primary/5 animate-float group"
              >
                <CardHeader>
                  <div className="relative mb-4 group-hover:scale-110 transition-transform duration-300">
                    {index === 0 && <Brain className="h-12 w-12 text-primary group-hover:animate-pulse" />}
                    {index === 1 && <Zap className="h-12 w-12 text-accent group-hover:animate-pulse" />}
                    {index === 2 && <Target className="h-12 w-12 text-secondary group-hover:animate-pulse" />}
                    {index === 3 && <Users className="h-12 w-12 text-success group-hover:animate-pulse" />}
                    {index === 4 && <Sparkles className="h-12 w-12 text-warning group-hover:animate-pulse" />}
                    {index === 5 && <ArrowRight className="h-12 w-12 text-info group-hover:animate-pulse" />}
                    <div className="absolute inset-0 h-12 w-12 bg-gradient-to-br from-primary to-secondary opacity-20 rounded-full blur-md group-hover:opacity-50 transition-opacity"></div>
                  </div>
                  <CardTitle
                    className={
                      index === 0
                        ? "text-primary"
                        : index === 1
                          ? "text-accent"
                          : index === 2
                            ? "text-secondary"
                            : index === 3
                              ? "text-success"
                              : index === 4
                                ? "text-warning"
                                : "text-info"
                    }
                  >
                    {feature.title}
                  </CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 via-transparent to-primary/5 animate-pulse-slow"></div>
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-secondary bg-gradient-to-r from-secondary to-accent bg-clip-text">
              {t.howItWorks.title}
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t.howItWorks.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {t.howItWorks.steps.map((step, index) => (
              <div key={index} className="text-center group">
                <div
                  className={`w-20 h-20 ${index === 0 ? "bg-gradient-to-br from-primary to-secondary text-primary-foreground" : index === 1 ? "bg-gradient-to-br from-secondary to-accent text-accent-foreground" : "bg-gradient-to-br from-accent to-success text-success-foreground"} rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-2xl group-hover:scale-110 transform transition-all duration-300 animate-glow`}
                >
                  {index + 1}
                </div>
                <h3
                  className={`text-2xl font-semibold mb-4 ${index === 0 ? "text-primary group-hover:text-secondary" : index === 1 ? "text-accent group-hover:text-info" : "text-success group-hover:text-accent"} transition-colors`}
                >
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button
              size="lg"
              asChild
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white"
            >
              <Link href="/quiz/setup">
                {t.howItWorks.tryNow}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-gradient-to-br from-card/80 to-muted/50 py-12 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="relative animate-float">
              <Brain className="h-6 w-6 text-primary animate-glow" />
              <div className="absolute inset-0 h-6 w-6 bg-gradient-to-br from-primary to-secondary opacity-20 rounded-full blur-sm"></div>
            </div>
            <span className="text-lg font-semibold text-primary bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text">
              {t.title}
            </span>
          </div>
          <p className="text-muted-foreground mb-4 text-lg">{t.footer.tagline}</p>
          <p className="text-sm text-muted-foreground">{t.footer.built}</p>
        </div>
      </footer>
    </div>
  )
}
