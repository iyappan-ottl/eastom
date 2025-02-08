import React from 'react';
import PageTitle from '../components/PageTitle';
import SEO from '../components/SEO';

const RefundPolicy = () => {
  return (
    <>
      <SEO
        title='Refund Policy'
        description='Beginner friendly page for learning React Helmet.'
        name='Company name.'
        type='article' />
      <PageTitle title='Refund Policy' />
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Refund Policy for {process.env.REACT_APP_NAME}</h1>
        <p className="text-sm text-gray-500 mb-4">Last Updated: {process.env.REACT_APP_LAST_MODIFIED_ON}</p>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">1. No Refunds</h2>
          <p className="text-gray-600">
            We do not offer refunds for any of our courses or services, including:
          </p>
          <ul className="list-disc text-gray-600 ml-6 mt-2">
            <li>Online courses</li>
            <li>Live courses</li>
            <li>Subscription plans</li>
            <li>Any other purchases made through our platform</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">2. Reasons for No Refunds</h2>
          <p className="text-gray-600">
            Due to the nature of our digital products and services, we cannot offer refunds for the following reasons:
          </p>
          <ul className="list-disc ml-6 mt-2 text-gray-600">
            <li>Immediate access to course materials upon enrollment.</li>
            <li>The non-returnable nature of digital content.</li>
            <li>The effort and resources invested in providing high-quality educational content.</li>
          </ul>
        </section>

        <section className="mb-8 text-gray-600">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">3. Exceptions</h2>
          <p className="text-gray-600">
            While we do not offer refunds, we may consider exceptions in rare circumstances, such as:
          </p>
          <ul className="list-disc ml-6 mt-2">
            <li>Technical issues preventing access to the course (subject to verification).</li>
            <li>Duplicate payments made by mistake.</li>
          </ul>
          To request an exception, please contact us at{' '}
          <strong>{process.env.REACT_APP_CONTACT_PHONE_NUMBER}</strong> within
          <strong> 7 days</strong> of your purchase.
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">4. Course Access</h2>
          <p className="text-gray-600">
            Once enrolled, you will have access to the course materials for the duration specified in the course description. It is your responsibility to ensure that the course meets your needs before enrolling.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">5. Contact Us</h2>
          <p className="text-gray-600">
            If you have any questions or concerns about this Refund Policy, please contact us at:
          </p>
          <ul className="list-disc text-gray-600 ml-6 mt-2">
            <li>Email: {process.env.REACT_APP_CONTACT_EMAIL}</li>
            <li>Phone: +91 {process.env.REACT_APP_CONTACT_PHONE_NUMBER}</li>
            <li>Address: {process.env.REACT_APP_ADDRESS}</li>
          </ul>
        </section>
      </div>
    </>

  );
};

export default RefundPolicy;