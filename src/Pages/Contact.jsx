import React from 'react';
import { Formik } from 'formik';
import contactSchema from '@/Contact-validation-schema/contactSchema';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;
const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const Contact = () => {
  const sendEmail = async (values) => {
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID, 
        {
          name: values.name,
          email: values.email,
          message: values.message,
          number: values.number,
        },
        {
          publicKey: PUBLIC_KEY,
        }
      );
      toast.success('🎉 Email sent successfully!', { position: 'top-right' });
    } catch (error) {
      console.error('Email sending failed:', error);
      toast.error('❌ Failed to send email.', { position: 'top-right' });
    }
  };

  return (
    <div className="bg-white">
       <section class="text-center py-12 px-4">
        <h2 class="text-2xl font-bold">Get In Touch</h2>
        <p class="mt-4 text-gray-700 max-w-2xl mx-auto">We are here to help you. Reach out to us via any of the following methods.</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8 animate-fadeIn">
          <div class="p-4 shadow-lg rounded-lg bg-green-100 hover:bg-green-200 transition-colors">
     
            <h3 class="text-xl font-bold">Call Us</h3>
            <p class="text-gray-700 mt-2">+977 9807409596</p>
          </div>
          <div class="p-4 shadow-lg rounded-lg bg-green-100 hover:bg-green-200 transition-colors">
            <h3 class="text-xl font-bold">Email Us</h3>
            <p class="text-gray-700 mt-2">acidicsameer008@gmail.com</p>
          </div>
          <div class="p-4 shadow-lg rounded-lg bg-green-100 hover:bg-green-200 transition-colors">
            <h3 class="text-xl font-bold">Visit Us</h3>
            <p class="text-gray-700 mt-2">Tilottama-17-Barawaliya</p>
          </div>
        </div>
      </section>
      <div className='flex sm:flex-row flex-col flex-wrap   w-full   '>
      
<div className='sm:w-1/2 w-full  sm:p-10 p-3'>
  <iframe  className='sm:w-[450px] h-[450px] w-full  ' src="https://www.openstreetmap.org/export/embed.html?bbox=83.4100914001465%2C27.526235925505144%2C83.57076644897462%2C27.623619404371826&layer=mapnik" /><br /><small>
  <a href="https://www.openstreetmap.org/?#map=13/27.57494/83.49043">View Larger Map</a></small>
</div>
      
      <div className="sm:w-1/2 w-full p-5">
        <h2 className="text-2xl font-bold text-center">Send Us A Message</h2>
        <Formik
          initialValues={{
            name: '',
            email: '',
            message: '',
            number: '',
          }}
          validationSchema={contactSchema}
          onSubmit={async (values, { resetForm }) => {
            await sendEmail(values);
            resetForm();
          }}
        >
          {({
            handleChange,
            handleSubmit,
            errors,
            touched,
            values,
          }) => (
            <form onSubmit={handleSubmit} className="sm:max-w-2xl w-full">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-bold">Name</label>
                <input
                  type="text"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  className="w-full mt-2 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                />
                {errors.name && touched.name && (
                  <p className="text-red-500 text-sm">{errors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 font-bold">Email</label>
                <input
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  className="w-full mt-2 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                />
                {errors.email && touched.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="number" className="block text-gray-700 font-bold">Phone</label>
                <input
                  type="tel"
                  name="number"
                  value={values.number}
                  onChange={handleChange}
                  className="w-full mt-2 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                />
                {errors.number && touched.number && (
                  <p className="text-red-500 text-sm">{errors.number}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 font-bold">Message</label>
                <textarea
                  name="message"
                  rows="5"
                  value={values.message}
                  onChange={handleChange}
                  className="w-full mt-2 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                ></textarea>
                {errors.message && touched.message && (
                  <p className="text-red-500 text-sm">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-green-700 text-white py-3 rounded-lg shadow-lg hover:bg-green-600 transition-colors mt-4"
              >
                Send Message
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
    </div>
  );
};

export default Contact;
