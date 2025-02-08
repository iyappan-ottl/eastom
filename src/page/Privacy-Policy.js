import React from "react";
import PageTitle from '../components/PageTitle';
import SEO from "../components/SEO";

const PrivacyPolicy = () => {
  return (
    <>
      <SEO
        title='Privacy Policy'
        description='Beginner friendly page for learning React Helmet.'
        name='Company name.'
        type='article' />
      <PageTitle title="Privacy Policy" />
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Privacy Policy for {process.env.REACT_APP_NAME}</h1>
        <p className="text-sm text-gray-500 mb-4">Last Updated: {process.env.REACT_APP_LAST_MODIFIED_ON}</p>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">1. Information We Collect</h2>
          <p className="text-gray-600">
            We may collect the following types of information:
          </p>
          <ul className="text-gray-600 list-disc ml-6 mt-2">
            <li><strong>Personal Information:</strong> Name, email address, phone number, payment information.</li>
            <li><strong>Usage Data:</strong> IP address, browser type, device information, pages visited.</li>
            <li><strong>Cookies and Tracking Technologies:</strong> Used to enhance your experience and collect usage data.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">2. How We Use Your Information</h2>
          <p className="text-gray-600">
            We use your information to:
          </p>
          <ul className="list-disc text-gray-600 ml-6 mt-2">
            <li>Provide and maintain our Services.</li>
            <li>Process payments and verify transactions.</li>
            <li>Personalize your learning experience.</li>
            <li>Communicate with you about your account and updates.</li>
            <li>Improve our platform and develop new features.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">3. Sharing Your Information</h2>
          <p className="text-gray-600">
            We may share your information with:
          </p>
          <ul className="list-disc text-gray-600 ml-6 mt-2">
            <li><strong>Service Providers:</strong> Third-party vendors who assist us.</li>
            <li><strong>Legal Requirements:</strong> When required by law.</li>
            <li><strong>Business Transfers:</strong> In the event of a merger or acquisition.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">4. Data Security</h2>
          <p className="text-gray-600">
            We implement reasonable security measures to protect your information. However, no method of transmission over the internet is 100% secure.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">5. Your Rights</h2>
          <p className="text-gray-600">
            Depending on your location, you may have the right to:
          </p>
          <ul className="list-disc text-gray-600 ml-6 mt-2">
            <li>Access your personal data.</li>
            <li>Correct inaccurate information.</li>
            <li>Delete your personal data.</li>
            <li>Opt out of marketing communications.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">6. Cookies and Tracking</h2>
          <p className="text-gray-600">
            We use cookies to enhance your experience. You can manage your cookie preferences through your browser settings.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">7. Third-Party Links</h2>
          <p className="text-gray-600">
            Our Services may contain links to third-party websites. We are not responsible for their privacy practices.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">8. Children's Privacy</h2>
          <p className="text-gray-600">
            Our Services are not intended for children under 13. We do not knowingly collect personal information from children.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">9. Changes to This Privacy Policy</h2>
          <p className="text-gray-600">
            We may update this Privacy Policy from time to time. Significant changes will be communicated via email or through our platform.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">10. Contact Us</h2>
          <p className="text-gray-600">
            If you have any questions, please contact us at:
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

export default PrivacyPolicy;
