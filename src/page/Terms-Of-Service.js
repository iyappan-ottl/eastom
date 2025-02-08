import React from "react";
import { Link } from 'react-router-dom';
import PageTitle from '../components/PageTitle';
import SEO from "../components/SEO";

const TermsOfService = () => {
  return (
    <>
      <SEO
        title='Terms of service'
        description='Beginner friendly page for learning React Helmet.'
        name='Company name.'
        type='article' />
      <PageTitle title="Terms of Service" />
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Terms of Service for {process.env.REACT_APP_NAME}</h1>
        <p className="text-sm text-gray-500 mb-4">Last Updated: {process.env.REACT_APP_LAST_MODIFIED_ON}</p>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">1. Eligibility</h2>
          <p className="text-gray-600">
            To use our Services, you must:</p>
          <ul className="list-disc text-gray-600 ml-6 mt-2">
            <li>Be at least 18 years old or have the consent of a parent or guardian.</li>
            <li>Have the legal capacity to enter into a binding agreement.</li>
            <li>Provide accurate and complete information during registration.</li>
            <li>Comply with all applicable laws and regulations.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">2. Account Registration</h2>
          <p className="text-gray-600">
            You must create an account to access certain features of our Services. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">3. Course Enrollment & Payment</h2>
          <p className="text-gray-600">
            <strong>Enrollment:</strong> By enrolling in a course, you agree to pay the applicable fees. Course prices are subject to change without notice.
          </p>
          <p className="text-gray-600">
            <strong>Payment Methods:</strong> We accept various payment methods, including credit/debit cards and other online payment systems. All payments are processed through secure third-party payment processors.
          </p>
          <p className="text-gray-600">
            <strong>Refunds:</strong> Refund policies vary depending on the course type. Please refer to our{' '}
            <Link to="/refund-policy" className="text-blue-500 hover:underline">Refund Policy</Link> for detailed information.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">4. Access to Courses</h2>
          <p className="text-gray-600">
            <strong>Online Courses:</strong> Once enrolled, you will have access to the course materials for the duration specified in the course description.
          </p>
          <p className="text-gray-600">
            <strong>Live Courses:</strong> Live courses are conducted at scheduled times. Recordings may be available for a limited time after the session ends.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">5. Intellectual Property</h2>
          <p className="text-gray-600">
            All content provided through our Services is the property of {process.env.REACT_APP_NAME} or its licensors and is protected by copyright and other intellectual property laws.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">6. User Conduct</h2>
          <p className="text-gray-600">
            You agree to use our Services only for lawful purposes and in accordance with these Terms. Prohibited activities include sharing login credentials, downloading or distributing course materials without permission, and engaging in harassment or discrimination.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">7. Termination</h2>
          <p className="text-gray-600">
            We reserve the right to terminate or suspend your account and access to our Services at any time, with or without cause.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">8. Limitation of Liability</h2>
          <p className="text-gray-600">
            To the fullest extent permitted by law, {process.env.REACT_APP_NAME} shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of our Services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">9. Disclaimer of Warranties</h2>
          <p className="text-gray-600">
            Our Services are provided "as is" and "as available" without warranties of any kind, either express or implied.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">10. Indemnification</h2>
          <p className="text-gray-600">
            You agree to indemnify and hold harmless {process.env.REACT_APP_NAME}, its affiliates, officers, agents, and employees from any claims arising out of your use of our Services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">11. Governing Law & Dispute Resolution</h2>
          <p className="text-gray-600">
            These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction]. Any disputes shall be resolved through binding arbitration.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">12. Changes to Terms</h2>
          <p className="text-gray-600">
            We reserve the right to modify these Terms at any time. Your continued use of our Services constitutes your acceptance of the updated Terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">13. Contact Us</h2>
          <p className="text-gray-600">
            If you have any questions about these Terms or our Services, please contact us at:
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

export default TermsOfService;
