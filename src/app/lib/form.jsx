/** @format */
'use client';
import React from 'react';

const EnquiryForm = () => {
  const serviceOptions = [
    { value: 'digital-marketing', label: 'Digital Marketing' },
    { value: 'web-development', label: 'Web Development' },
    { value: 'mobile-development', label: 'Mobile Development' },
    { value: 'ui-ux-design', label: 'UI/UX Design' },
    { value: 'cloud-services', label: 'Cloud Services' },
    { value: 'seo', label: 'SEO' },
    { value: 'social-media', label: 'Social Media' },
    { value: 'performance-marketing', label: 'Performance Marketing' },
    { value: 'graphic-design', label: 'Graphic Design' },
    { value: 'photoshoot', label: 'Photoshoot' },
    { value: 'video-shoot', label: 'Video Shoot' },
  ];

  const budgetOptions = [
    { value: '', label: 'Select a budget range' },
    { value: 'under-5k', label: 'Under $5,000' },
    { value: '5k-10k', label: '$5,000 - $10,000' },
    { value: '10k-20k', label: '$10,000 - $20,000' },
    { value: '20k-50k', label: '$20,000 - $50,000' },
    { value: 'above-50k', label: 'Above $50,000' },
  ];

  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    requirements: '',
  });

  const [errors, setErrors] = React.useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }

    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.company) {
      newErrors.company = 'Company name is required';
    }

    if (!formData.service) {
      newErrors.service = 'Please select a service';
    }

    if (!formData.budget) {
      newErrors.budget = 'Please select a budget range';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      const response = await fetch('/sendmail.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData).toString(),
      });

      if (response.ok) {
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          budget: '',
          requirements: '',
        });
        alert('Form submitted successfully! We will get back to you soon.');
      } else {
        console.error('Error submitting form:', response.status);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const inputClasses =
    'w-full bg-yellow-300 border-b border-gray-600 focus:outline-none focus:border-gray-900 px-0 py-2 placeholder-gray-600';
  const labelClasses = 'text-gray-600 text-sm';
  const selectClasses = `${inputClasses} appearance-none bg-transparent`;

  return (
    <div className='w-full max-w-2xl mx-auto p-6 bg-yellow-300'>
      <form onSubmit={handleSubmit} className='flex flex-col gap-6'>
        <div className='flex flex-col gap-1'>
          <label className={labelClasses}>Your Name *</label>
          <input
            type='text'
            name='name'
            value={formData.name}
            onChange={handleChange}
            className={inputClasses}
          />
          {errors.name && (
            <span className='text-red-600 text-sm'>{errors.name}</span>
          )}
        </div>

        <div className='flex flex-col gap-1'>
          <label className={labelClasses}>Email Id *</label>
          <input
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            className={inputClasses}
          />
          {errors.email && (
            <span className='text-red-600 text-sm'>{errors.email}</span>
          )}
        </div>

        <div className='flex flex-col gap-1'>
          <label className={labelClasses}>Phone Number *</label>
          <input
            type='tel'
            name='phone'
            value={formData.phone}
            onChange={handleChange}
            className={inputClasses}
          />
          {errors.phone && (
            <span className='text-red-600 text-sm'>{errors.phone}</span>
          )}
        </div>

        <div className='flex flex-col gap-1'>
          <label className={labelClasses}>Company Name *</label>
          <input
            type='text'
            name='company'
            value={formData.company}
            onChange={handleChange}
            className={inputClasses}
          />
          {errors.company && (
            <span className='text-red-600 text-sm'>{errors.company}</span>
          )}
        </div>

        <div className='flex flex-col gap-1 relative'>
          <label className={labelClasses}>Choose Service *</label>
          <div className='relative'>
            <select
              name='service'
              value={formData.service}
              onChange={handleChange}
              className={selectClasses}>
              {serviceOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center text-gray-600'>
              <svg className='h-4 w-4 fill-current' viewBox='0 0 20 20'>
                <path d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' />
              </svg>
            </div>
          </div>
          {errors.service && (
            <span className='text-red-600 text-sm'>{errors.service}</span>
          )}
        </div>

        <div className='flex flex-col gap-1 relative'>
          <label className={labelClasses}>Estimated Budget Monthly *</label>
          <div className='relative'>
            <select
              name='budget'
              value={formData.budget}
              onChange={handleChange}
              className={selectClasses}>
              {budgetOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center text-gray-600'>
              <svg className='h-4 w-4 fill-current' viewBox='0 0 20 20'>
                <path d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' />
              </svg>
            </div>
          </div>
          {errors.budget && (
            <span className='text-red-600 text-sm'>{errors.budget}</span>
          )}
        </div>

        <div className='flex flex-col gap-1'>
          <label className={labelClasses}>
            Please leave us a brief of your requirements and services you are
            interested in*
          </label>
          <textarea
            name='requirements'
            value={formData.requirements}
            onChange={handleChange}
            rows='4'
            className={`${inputClasses} resize-none`}
          />
        </div>

        <button
          type='submit'
          className='px-6 py-3 bg-gray-900 text-white rounded hover:bg-gray-800 mt-4'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default EnquiryForm;
