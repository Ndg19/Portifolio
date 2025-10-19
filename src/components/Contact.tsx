import { useState } from "react";
import { Mail, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:kingniguse81@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="py-14 bg-gray-800">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="text-yellow-500 font-medium tracking-widest uppercase text-sm mb-3">
            Contact
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-yellow-500 rounded-full mb-6"></div>
          <p className="text-gray-300 max-w-3xl">
            I'd love to hear from you! Contact me for inquiries, collaborations,
            or to discuss your web development needs.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-gray-900 p-10 rounded-2xl shadow-lg border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              Send Me a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-gray-400 mb-2">
                    Your Name
                  </label>
                  <div className="flex items-center bg-gray-800 border border-gray-700 rounded-lg focus-within:border-yellow-500 transition-colors">
                    <span className="px-3 text-yellow-500">
                      <Mail size={18} />
                    </span>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-800 text-white px-3 py-3 rounded-r-lg focus:outline-none"
                      placeholder="Write your name"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-gray-400 mb-2">
                    Your Email
                  </label>
                  <div className="flex items-center bg-gray-800 border border-gray-700 rounded-lg focus-within:border-yellow-500 transition-colors">
                    <span className="px-3 text-yellow-500">
                      <Mail size={18} />
                    </span>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-800 text-white px-3 py-3 rounded-r-lg focus:outline-none"
                      placeholder="Write your email"
                    />
                  </div>
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-gray-400 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-yellow-500 transition-colors"
                  placeholder="Project Inquiry"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-gray-400 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-yellow-500 transition-colors"
                  placeholder="I'd like to discuss a potential project..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-medium px-8 py-3 rounded-full transition-all inline-flex items-center space-x-2"
                >
                  <span>Send Message</span>
                  <Send size={18} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
