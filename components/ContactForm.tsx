
import React, { useState } from 'react';

interface ContactFormProps {
  content: {
    title: string;
    name: string;
    email: string;
    phone: string;
    message: string;
    submit: string;
    success: string;
    error: string;
  };
}

const ContactForm: React.FC<ContactFormProps> = ({ content }) => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      // Randomly succeed or fail for demo purposes
      if (Math.random() > 0.2) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    }, 1500);
  };

  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-800 mb-6">{content.title}</h2>
      {status === 'success' ? (
        <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded-md" role="alert">
          <p className="font-bold">{content.success}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">{content.name}</label>
            <input type="text" id="name" required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">{content.email}</label>
            <input type="email" id="email" required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">{content.phone}</label>
            <input type="tel" id="phone" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">{content.message}</label>
            <textarea id="message" rows={4} required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"></textarea>
          </div>
          <div>
            <button type="submit" disabled={status === 'submitting'} className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-blue-300 transition-colors">
              {status === 'submitting' ? 'Отправка...' : content.submit}
            </button>
          </div>
          {status === 'error' && (
            <p className="text-sm text-red-600">{content.error}</p>
          )}
        </form>
      )}
    </div>
  );
};

export default ContactForm;
