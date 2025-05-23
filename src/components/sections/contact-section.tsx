
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Send, ExternalLink } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";

export function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCaptcha = (token: string | null) => {
    setCaptchaToken(token);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!captchaToken) {
      toast({
        title: "CAPTCHA Required",
        description: "Please complete the CAPTCHA verification.",
      });
      return;
    }

    setIsSubmitting(true);

    const serviceID = "service_9o1feac"; // Replace with your EmailJS Service ID
    const templateID = "template_dh73pwa"; // Replace with your EmailJS Template ID
    const userID = "3yVBhQdaw3cImEt0t"; // Replace with your EmailJS User ID

    try {
      const response = await emailjs.send(
        serviceID,
        templateID,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          "g-recaptcha-response": captchaToken, // Optional for backend validation
        },
        userID
      );

      if (response.status === 200) {
        toast({
          title: "Message sent!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        setCaptchaToken(null); // Reset CAPTCHA token after success
      } else {
        toast({
          title: "Error",
          description: "Failed to send the message. Please try again later.",
        });
      }
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "Error",
        description: "Failed to send the message. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <section
      id="contact"
      className="py-20 min-h-screen relative"
    >
      {/* Tech-inspired background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Grid lines */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full border border-primary/20" style={{ backgroundImage: 'radial-gradient(circle, rgba(155, 135, 245, 0.1) 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        </div>
        
        {/* Circuit-like paths */}
        <svg className="absolute bottom-0 right-0 w-1/3 h-1/3 text-primary opacity-5" viewBox="0 0 100 100" fill="none">
          <path d="M10,10 L30,10 L30,30 L50,30 L50,50 L70,50 L70,70 L90,70" stroke="currentColor" strokeWidth="0.5" />
          <path d="M10,90 L30,90 L30,70 L50,70 L50,50 L70,50 L70,30 L90,30" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="30" cy="30" r="2" fill="currentColor" />
          <circle cx="50" cy="50" r="2" fill="currentColor" />
          <circle cx="70" cy="70" r="2" fill="currentColor" />
        </svg>
      </div>

      <div className="container z-10 relative">
        <div className="font-mono text-sm text-primary opacity-80 mb-2">
          &lt;section id="contact"&gt;
        </div>
        <h2 className="text-4xl md:text-5xl font-mono font-bold mb-2">
          Contact<span className="text-primary">_</span>
        </h2>
        <div className="max-w-md mb-12">
          <p className="font-light mb-4">
            Feel free to get in touch with me. Always open to new projects and ideas.
          </p>
          <div className="font-mono text-sm text-primary/70">&gt; awaiting_message...</div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="enigma-card rounded-lg p-6 group hover:border-primary/30 transition-all duration-300">
              <div className="flex items-start">
                <div className="h-12 w-12 rounded-md bg-primary/10 flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-mono tracking-wide mb-1">Email Me At</h3>
                  <a 
                    href="mailto:goyal.shubh0711@gmail.com" 
                    className="text-muted-foreground hover:text-primary transition-colors font-light flex items-center gap-1"
                  >
                    <span>goyal.shubh0711@gmail.com</span>
                    <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="enigma-card rounded-lg p-6 group hover:border-primary/30 transition-all duration-300">
              <div className="flex items-start">
                <div className="h-12 w-12 rounded-md bg-primary/10 flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-mono tracking-wide mb-1">WhatsApp Me</h3>
                  <a 
                    href="https://wa.me/8889722887" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors font-light flex items-center gap-1"
                  >
                    <span>+91 8889722887</span>
                    <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                </div>
              </div>
            </div>

            {/* Terminal-like decoration */}
            <div className="p-4 rounded-md border border-primary/20 bg-enigma-dark/60 font-mono text-sm">
              <div className="flex items-center gap-2 mb-2 text-muted-foreground">
                <div className="h-3 w-3 rounded-full bg-red-500/70"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500/70"></div>
                <div className="h-3 w-3 rounded-full bg-green-500/70"></div>
                <span className="text-xs ml-2">terminal</span>
              </div>
              <div className="space-y-1">
                <div><span className="text-primary">$</span> connect --with enigma</div>
                <div className="text-muted-foreground">Establishing secure connection...</div>
                <div className="text-green-400">Connection established!</div>
              </div>
            </div>
          </div>
          
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="font-mono text-xs text-primary/70 mb-4">&gt; compose_message:</div>
              
              <div>
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-enigma-dark/30 border-primary/20 focus-visible:border-primary/50 rounded-md placeholder:text-muted-foreground/50 font-light"
                />
              </div>
              <div>
                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-enigma-dark/30 border-primary/20 focus-visible:border-primary/50 rounded-md placeholder:text-muted-foreground/50 font-light"
                />
              </div>
              <div>
                <Input
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="bg-enigma-dark/30 border-primary/20 focus-visible:border-primary/50 rounded-md placeholder:text-muted-foreground/50 font-light"
                />
              </div>
              <div >
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="min-h-32 bg-enigma-dark/30 border-primary/20 focus-visible:border-primary/50 rounded-md placeholder:text-muted-foreground/50 resize-none font-light"
                />
              </div>
              <div className="flex flex-row justify-between gap-8">  
                <ReCAPTCHA
                  sitekey="6Lc9TzkrAAAAAP9Z9tFXZRap3NaErnB8tr0zCD9b" // Replace with your site key
                  onChange={handleCaptcha}
                  className="flex-1 border border-primary/30 rounded-md"
                />
                
                <Button 
                  type="submit" 
                  className="flex-1 bg-primary/10 text-primary hover:bg-primary/20 border border-primary/30 transition-all duration-300 font-mono rounded-md h-[78px]" // Match size and style
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="animate-pulse">Processing</span>
                      <span className="inline-block">...</span>
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <span>Send Message</span>
                      <Send className="h-4 w-4" />
                    </span>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
        
        <div className="font-mono text-sm text-primary opacity-80 mt-12">
          &lt;/section&gt;
        </div>
      </div>
    </section>
  );
};
