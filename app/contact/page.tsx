'use client'
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Thank you for contacting us! We will get back to you soon.");
    // Here you would typically send data to your API
  };

  return (
    <>
      <Navbar />
      <section className="min-h-screen flex flex-col items-center justify-center bg-gray-50 pt-24 pb-12">
        <div className="max-w-2xl mx-auto p-8 bg-white rounded-2xl shadow-lg">
          <h1 className="text-4xl font-bold text-accent mb-4">Contact Us</h1>
          <p className="text-lg text-gray-700 mb-6">
            We're here to help you plan your perfect trip to Nepal. Reach out to us for flight quotes, travel advice, or any questions!
          </p>
          <form onSubmit={handleSubmit} className="space-y-6 mb-8">
            <input
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full px-4 py-3 rounded-lg border border-gray-300"
              required
            />
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email address"
              className="w-full px-4 py-3 rounded-lg border border-gray-300"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message"
              className="w-full px-4 py-3 rounded-lg border border-gray-300"
              rows={4}
              required
            />
            <button type="submit" className="w-full bg-primary text-white py-4 rounded-lg font-semibold hover:bg-accent transition-all">
              Send Message
            </button>
          </form>
          <div className="space-y-4">
            <div>
              <span className="font-semibold text-accent">Call Us:</span> <span className="text-gray-700">+1 (555) 123-4567</span>
            </div>
            <div>
              <span className="font-semibold text-accent">Email Us:</span> <span className="text-gray-700">info@wisenepaltravel.com</span>
            </div>
            <div>
              <span className="font-semibold text-accent">Visit Us:</span> <span className="text-gray-700">123 Travel Street, USA</span>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
