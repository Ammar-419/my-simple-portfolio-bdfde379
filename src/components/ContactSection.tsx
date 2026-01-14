import { useState, FormEvent } from "react";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

/*
 * Contact Form Component with Jotform Integration
 * 
 * This form sends messages directly to: Amarhussaini72@gmail.com
 * via Jotform's submission API.
 * 
 * IMPORTANT: You need to create a Jotform form and get your Form ID.
 * 1. Go to https://www.jotform.com and create a form
 * 2. Add fields: Name, Email, Message
 * 3. Set up email notifications to Amarhussaini72@gmail.com
 * 4. Get your Form ID from the form URL
 * 5. Replace JOTFORM_FORM_ID below with your actual form ID
 */

// TODO: Replace with your actual Jotform Form ID
const JOTFORM_FORM_ID = "YOUR_FORM_ID";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      // Jotform API submission
      // The field names (q3_name, q4_email, q5_message) need to match your Jotform form fields
      // You can find these in your Jotform form builder
      const formDataToSend = new FormData();
      formDataToSend.append("q3_name", formData.name);
      formDataToSend.append("q4_email", formData.email);
      formDataToSend.append("q5_message", formData.message);

      const response = await fetch(
        `https://submit.jotform.com/submit/${JOTFORM_FORM_ID}/`,
        {
          method: "POST",
          body: formDataToSend,
        }
      );

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        // Reset success message after 5 seconds
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("Failed to send message. Please try again or email directly.");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="section-container">
      <h2 className="section-title">Get in Touch</h2>
      <p className="section-subtitle mb-10">
        Have a project in mind or just want to say hello? I'd love to hear from you.
        <span className="block mt-2 text-sm">
          Or email me directly at{" "}
          <a href="mailto:Amarhussaini72@gmail.com" className="link-accent">
            Amarhussaini72@gmail.com
          </a>
        </span>
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
            disabled={status === "loading"}
            className="input-base disabled:opacity-50"
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
            disabled={status === "loading"}
            className="input-base disabled:opacity-50"
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
            disabled={status === "loading"}
            className="input-base resize-none disabled:opacity-50"
            placeholder="Your message..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
        </div>

        {/* Status Messages */}
        {status === "success" && (
          <div className="flex items-center gap-2 text-green-400 bg-green-400/10 px-4 py-3 rounded-md">
            <CheckCircle className="w-5 h-5" />
            <span>Message sent successfully! I'll get back to you soon.</span>
          </div>
        )}

        {status === "error" && (
          <div className="flex items-center gap-2 text-red-400 bg-red-400/10 px-4 py-3 rounded-md">
            <AlertCircle className="w-5 h-5" />
            <span>{errorMessage}</span>
          </div>
        )}

        <button 
          type="submit" 
          className="btn-primary gap-2"
          disabled={status === "loading"}
        >
          {status === "loading" ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              Send Message
            </>
          )}
        </button>
      </form>
    </section>
  );
};

export default ContactSection;
