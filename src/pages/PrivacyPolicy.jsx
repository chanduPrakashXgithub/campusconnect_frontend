import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="container mt-5 p-4 border rounded shadow-sm bg-light">
      <h1 className="mb-4 text-center text-primary">Privacy Policy for CampusConnect Hub</h1>

      <p className="text-muted text-center"><strong>Last Updated:</strong> October 26, 2023</p>

      <p className="lead">Welcome to CampusConnect Hub! This Privacy Policy explains how CampusConnect Hub ("we," "us," or "our") collects, uses, and discloses information about you when you use our MERN stack application, CampusConnect Hub (the "Service").</p>

      <section className="my-4 p-3 border rounded bg-white">
        <h2 className="text-secondary">1. Information We Collect</h2>
        <p>We collect information directly from you when you provide it to us, automatically as you navigate through the Service, and from third-party sources.</p>

        <h3 className="text-info">Information You Provide to Us:</h3>
        <ul>
          <li><strong>Google Account Information:</strong> When you log in using Google OAuth 2.0, we collect your email address and basic profile information (such as your name and profile picture) as permitted by Google and your privacy settings. We do not collect your Google password.</li>
        </ul>

        <h3 className="text-info">Information We Collect Automatically:</h3>
        <ul>
          <li><strong>Usage Information:</strong> We collect information about your activity on the Service, such as the pages you view, the features you use, and the time and date of your visits.</li>
          <li><strong>Device Information:</strong> We may collect information about the device you use to access the Service, including the hardware model, operating system and version, unique device identifiers, and mobile network information.</li>
        </ul>
      </section>

      <section className="my-4 p-3 border rounded bg-white">
        <h2 className="text-secondary">2. How We Use Your Information</h2>
        <p>We use the information we collect for various purposes, including to:</p>
        <ul>
          <li>Provide, maintain, and improve our Service;</li>
          <li>Personalize your experience on the Service;</li>
          <li>Communicate with you, including sending you technical notices, updates, security alerts, and support and administrative messages;</li>
          <li>Monitor and analyze trends, usage, and activities in connection with our Service;</li>
          <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities and protect the rights and property of CampusConnect Hub and others;</li>
          <li>Comply with our legal and regulatory obligations.</li>
        </ul>
      </section>

      <section className="my-4 p-3 border rounded bg-white">
        <h2 className="text-secondary">3. Sharing of Your Information</h2>
        <p>We do not share your personal information with third parties except as described in this Privacy Policy:</p>
        <ul>
          <li><strong>With Your Consent:</strong> We may share your information with your consent or at your direction.</li>
          <li><strong>Compliance with Laws:</strong> We may disclose your information if we believe it is necessary to comply with any applicable law, regulation, legal process, or governmental request.</li>
          <li><strong>To Protect Our Rights:</strong> We may disclose your information to enforce our agreements, policies, and terms of service, or to protect the rights, property, and safety of CampusConnect Hub, our users, or others.</li>
        </ul>
      </section>

      <section className="my-4 p-3 border rounded bg-white">
        <h2 className="text-secondary">4. Data Security</h2>
        <p>We take reasonable measures to help protect information about you from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction.</p>
      </section>

      <section className="my-4 p-3 border rounded bg-white">
        <h2 className="text-secondary">5. Your Choices</h2>
        <ul>
          <li><strong>Google Account Information:</strong> You can control the information we receive from Google by adjusting your privacy settings on your Google account.</li>
          <li><strong>Cookies:</strong> Most web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove or reject browser cookies.</li>
        </ul>
      </section>

      <section className="my-4 p-3 border rounded bg-white">
        <h2 className="text-secondary">6. Changes to This Privacy Policy</h2>
        <p>We may change this Privacy Policy from time to time. If we make changes, we will notify you by revising the "Last Updated" date at the top of this policy and, in some cases, we may provide you with additional notice (such as adding a statement to our homepage or sending you a notification).</p>
      </section>

      <section className="my-4 p-3 border rounded bg-white">
        <h2 className="text-secondary">7. Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, please contact us at [Your Contact Email Here].</p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
