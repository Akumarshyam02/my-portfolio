import React, { useState } from 'react';
import axios from 'axios';
import { Mail, Phone, MapPin } from "lucide-react";

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('https://sheetdb.io/api/v1/357oqoehl2kfs', {
        data: formData
      });
      if (res.status === 201 || res.status === 200) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setError(null);
      }
    } catch (err) {
      setError('Submission failed. Please try again.');
    }
  };

  return (
    <section id="contact" className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-12">Contact Me</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 dark:text-gray-300">
              I'd love to hear from you! Whether you have a question or just want to say hi,
              feel free to drop a message.
            </p>

            <div className="flex items-center gap-4">
              <Mail className="w-6 h-6 text-indigo-500" />
              <span className="text-gray-800 dark:text-white">sk5859915@gmail.com</span>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="w-6 h-6 text-indigo-500" />
              <span className="text-gray-800 dark:text-white">+91 9905158261</span>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="w-6 h-6 text-indigo-500" />
              <span className="text-gray-800 dark:text-white">Sitamarhi, Bihar, India</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md space-y-6">
            {submitted && <p className="text-green-500">Thanks for your message!</p>}
            {error && <p className="text-red-500">{error}</p>}

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 p-2 text-gray-900 dark:text-white focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Your Name"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 p-2 text-gray-900 dark:text-white focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="you@example.com"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="mt-1 block w-full rounded-md bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 p-2 text-gray-900 dark:text-white focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Write your message..."
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-all"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
