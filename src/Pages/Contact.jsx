import React from 'react'
import { Formik} from "formik";
import contactSchema from '@/Contact-validation-schema/contactSchema';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Contact = () => {
  return (
   <>
<div class="bg-white">
    
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
      
      <div class="   sm:w-1/2 w-full  p-5 ">
        <h2 class="text-2xl font-bold text-center">Send Us A Message</h2>
        <Formik
         initialValues={{
          name:"",
          email: "",
       message:"",
      
          number: "",
        }}
        onSubmit={(values, { resetForm }) => {
          console.log("Submitted:", values);
          toast.success("🎉 Form submitted !", {
            position: "top-center",
          });
          resetForm(); 
        }}
        validationSchema={contactSchema}
      >
        {({
          handleChange,
          handleSubmit,
          errors,
          touched,
         
          values,
        }) => (
        <form onSubmit={handleSubmit} class=" sm:max-w-2xl w-full ">
          <div>
            <label htmlFor="name" class="block text-gray-700 font-bold">Name</label>
            <input type="text" name="name"  value={values.name}  onChange={handleChange}  class="w-full mt-2 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition" />
            {errors.name && touched.name ? (
    <p className="text-red-500 text-sm">{errors.name}</p>
  ) : null}
          </div>
          <div>
            <label htmlFor="email" class="block text-gray-700 font-bold">Email</label>
            <input type="email" name="email" value={values.email} onChange={handleChange}  class="w-full mt-2 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition" />
            {errors.email && touched.email ? (
    <p className="text-red-500 text-sm">{errors.email}</p>
  ) : null}
          </div>
          <div>
  <label htmlFor="phone" className="block text-gray-700 font-bold">Phone</label>
  <input
    type="tel"
    name="number"
    id="phone"
    value={values.number}
    onChange={handleChange}
    className="w-full mt-2 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition"
  />
  {errors.number && touched.number ? (
    <p className="text-red-500 text-sm">{errors.number}</p>
  ) : null}
</div>

          <div>
            <label htmlFor="message" class="block text-gray-700 font-bold">Message</label>
            <textarea name="message" rows="5"  value={values.message}  onChange={handleChange} class="w-full mt-2 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition"></textarea>
            {errors.message && touched.message ? (
    <p className="text-red-500 text-sm">{errors.message}</p>
  ) : null}
          </div>
          <button type="submit" class="w-full bg-green-700 text-white py-3 rounded-lg shadow-lg hover:bg-green-600 transition-colors">Send Message</button>
        </form>
        )}
        </Formik>
      </div>

     </div>
    </div>
   </>
  )
}

export default Contact
