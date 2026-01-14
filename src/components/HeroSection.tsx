import { Download, Coffee } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="section-container min-h-[80vh] flex flex-col justify-center">
      <div className="space-y-6">
        {/* Name */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
          John Doe
        </h1>

        {/* Role */}
        <p className="text-xl md:text-2xl text-primary font-medium">
          Frontend Engineer (React)
        </p>

        {/* Description */}
        <p className="text-lg text-muted-foreground max-w-xl">
          Crafting clean, responsive interfaces with a focus on user experience 
          and modern web standards. Open to remote opportunities.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 pt-4">
          {/* TODO: Update href to your actual CV file URL */}
          <a
            href="#"
            className="btn-primary gap-2"
            aria-label="Download CV"
          >
            <Download className="w-4 h-4" />
            Download CV
          </a>

          {/* TODO: Update href to your Buy Me a Coffee link */}
          <a
            href="#"
            className="btn-secondary gap-2"
            aria-label="Buy Me a Coffee"
          >
            <Coffee className="w-4 h-4" />
            Buy Me a Coffee
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
