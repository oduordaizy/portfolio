'use client';

import React, { useState, FormEvent, ChangeEvent } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import { Mail, Phone, MapPin, Linkedin, Github, Loader2 } from 'lucide-react';

type FormData = {
  name: string;
  email: string;
  message: string;
  _gotcha?: string;
};

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  }>({
    success: false,
    message: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ success: false, message: '' });

    try {
      const response = await fetch('https://formsubmit.co/ajax/your-email@example.com', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          _subject: 'New Contact Form Submission',
          _template: 'table',
          _captcha: 'false'
        })
      });

      const data = await response.json();

      if (data.success === "true") {
        setFormData({ name: '', email: '', message: '' });
        setSubmitStatus({
          success: true,
          message: 'Message sent successfully! I&apos;ll get back to you soon.'
        });
      } else {
        throw new Error(data.message || 'Failed to send message');
      }
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: error instanceof Error ? error.message : 'Something went wrong. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Let&apos;s Connect</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? Drop me a message below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-white rounded-lg shadow-xs">
                  <Mail className="text-indigo-600" size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Email</h3>
                  <a href="mailto:oduordaizy@gmail.com" className="text-lg text-gray-800 hover:text-indigo-600 transition-colors">
                    oduordaizy@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 bg-white rounded-lg shadow-xs">
                  <Phone className="text-indigo-600" size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Phone</h3>
                  <span className="text-lg text-gray-800">+254 797967839</span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 bg-white rounded-lg shadow-xs">
                  <MapPin className="text-indigo-600" size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Location</h3>
                  <span className="text-lg text-gray-800">Nairobi, Kenya</span>
                </div>
              </div>

              <div className="pt-4">
                <h3 className="text-sm font-medium text-gray-500 mb-3">Social Profiles</h3>
                <div className="flex gap-4">
                  <a
                    href="https://linkedin.com/in/yourprofile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white rounded-lg shadow-xs hover:bg-indigo-50 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="text-indigo-600" size={20} />
                  </a>
                  <a
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white rounded-lg shadow-xs hover:bg-indigo-50 transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="text-indigo-600" size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Send Me a Message</h2>
            <form 
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div className="space-y-1">
                <label htmlFor="name" className="text-sm font-medium text-gray-700">Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none"
                />
              </div>

              <input type="text" name="_gotcha" className="hidden" />

              {submitStatus.message && (
                <div className={`p-4 rounded-lg ${submitStatus.success ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                  {submitStatus.success ? (
                    <p>Message sent successfully! I&apos;ll get back to you soon.</p>
                  ) : (
                    <p>{submitStatus.message}</p>
                  )}
                </div>
              )}
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white py-3 px-6 rounded-lg font-medium transition-all disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin" size={18} />
                    Sending...
                  </>
                ) : (
                  <>
                    <Mail className="mr-1" size={18} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}