import { Download, Coffee } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="section-container min-h-[80vh] flex flex-col justify-center">
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Profile Image */}
        <div className="relative">
          <div className="w-40 h-40 md:w-52 md:h-52 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 p-1">
            <div className="w-full h-full rounded-full bg-secondary flex items-center justify-center overflow-hidden border-2 border-border">
              {/* TODO: Replace with your actual profile image */}
              <img
                src="/IMG_2757.JPEG"
                alt="Amar Hussaini"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          {/* Decorative ring */}
          <div className="absolute inset-0 rounded-full border border-primary/20 animate-pulse" />
        </div>

        {/* Content */}
        <div className="flex-1 text-center md:text-left space-y-6">
          {/* Name */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            Amar Hussaini
          </h1>

          {/* Role */}
          <p className="text-xl md:text-2xl text-primary font-medium">
            Frontend Engineer (React , Next)
          </p>

          {/* Description */}
          <p className="text-lg text-muted-foreground max-w-xl">
            Full Stack Developer crafting exceptional web experiences with React,
            Next.js, and TypeScript.

            I transform complex problems into clean, scalable solutions. With hands-on
            experience in freelance development and a track record from HackJos 2025,
            I specialize in building responsive applications that users love.

            Final-year Computer Science student passionate about modern web technologies,
            clean architecture, and continuous learning. Ready to contribute to remote
            teams building the next generation of web applications.s.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
            {/* TODO: Update href to your actual CV file URL */}
            <a
              href="https://drive.google.com/file/d/1MME50T7n3Fxi4hkoeNo-1LB0uk1ZwfXB/view?usp=sharing"
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
              Buy Me some Coffee
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
