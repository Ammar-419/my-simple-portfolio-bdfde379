import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

// 1. Define Form Types
type ContactFields = {
  name: string;
  email: string;
  message: string;
};

const ContactSection = () => {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  // 2. Initialize React Hook Form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFields>();

  // 3. The Submit Logic
  const onSubmit: SubmitHandler<ContactFields> = async (data) => {
    setStatus("submitting");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          access_key: "0fbb5919-c80a-45ea-ae0c-2bbf48f4dc9f", // <--- PASTE YOUR KEY HERE
          // access_key: process.env.VITE_WEB3FORM_KEY, // <--- PASTE YOUR KEY HERE
          name: data.name,
          email: data.email,
          message: data.message,
          from_name: "Portfolio Contact Form", // Helps you identify the email
          subject: `New Message from ${data.name}`
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        reset(); // Clears the form fields
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="section-container">
      <h2 className="section-title">Get in Touch</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl space-y-5">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium mb-2 text-foreground">Name</label>
          <input
            {...register("name", { required: "Name is required" })}
            className={`input-base ${errors.name ? 'border-red-500 ring-1 ring-red-500' : ''}`}
            placeholder="Your name"
            disabled={status === "submitting"}
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium mb-2 text-foreground">Email</label>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Please enter a valid email"
              }
            })}
            className={`input-base ${errors.email ? 'border-red-500 ring-1 ring-red-500' : ''}`}
            placeholder="you@example.com"
            disabled={status === "submitting"}
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium mb-2 text-foreground">Message</label>
          <textarea
            {...register("message", { required: "Please enter a message" })}
            rows={5}
            className={`input-base resize-none ${errors.message ? 'border-red-500 ring-1 ring-red-500' : ''}`}
            placeholder="Your message..."
            disabled={status === "submitting"}
          />
          {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
        </div>

        {/* Status Messages */}
        {status === "success" && (
          <div className="flex items-center gap-2 text-green-400 bg-green-400/10 px-4 py-3 rounded-md">
            <CheckCircle className="w-5 h-5" />
            <span>Message sent! Check your inbox soon.</span>
          </div>
        )}

        {status === "error" && (
          <div className="flex items-center gap-2 text-red-400 bg-red-400/10 px-4 py-3 rounded-md">
            <AlertCircle className="w-5 h-5" />
            <span>Oops! Something went wrong. Please try again.</span>
          </div>
        )}

        <button
          type="submit"
          className="btn-primary gap-2 w-full"
          disabled={status === "submitting"}
        >
          {status === "submitting" ? (
            <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</>
          ) : (
            <><Send className="w-4 h-4" /> Send Message</>
          )}
        </button>
      </form>
    </section>
  );
};

export default ContactSection;