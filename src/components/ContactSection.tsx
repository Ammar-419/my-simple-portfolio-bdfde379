import { useState, FormEvent } from "react";
import { Send } from "lucide-react";

/*
 * Contact Form Component
 * 
 * Currently this is a UI-only form without backend integration.
 * 
 * TODO: Integrate with Jotform API
 * - Create a form on Jotform (https://www.jotform.com)
 * - Get your form's API endpoint
 * - Replace the handleSubmit function with actual API call
 * 
 * Example integration:
 * const response = await fetch('https://api.jotform.com/form/{YOUR_FORM_ID}/submissions', {
 *   method: 'POST',
 *   headers: { 'Content-Type': 'application/json' },
 *   body: JSON.stringify(formData),
 * });
 */

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // TODO: Replace with Jotform API integration
    console.log("Form submitted:", formData);
    alert("Form submission placeholder. Integrate Jotform API here.");
  };

  return (
    <section id="contact" className="section-container">
      <h2 className="section-title">Get in Touch</h2>
      <p className="section-subtitle mb-10">
        Have a project in mind or just want to say hello? I'd love to hear from you.
      </p>

      <form onSubmit={handleSubmit} className="max-w-xl space-y-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="input-base"
            placeholder="Your name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="input-base"
            placeholder="you@example.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="input-base resize-none"
            placeholder="Your message..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
        </div>

        <button type="submit" className="btn-primary gap-2">
          <Send className="w-4 h-4" />
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactSection;
