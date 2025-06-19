import React from 'react';

const TermsOfService = () => {
  return (
    <div className="container mt-5">
      <h2>Terms of Service</h2>
      <p>
        By using CampusConnect Hub, you agree to these terms of service. This application is intended to help students access
        their Gmail inbox and stay updated with college news.
      </p>
      <p>
        We reserve the right to update or modify these terms at any time without prior notice. Continued use of the app after
        changes means you accept the updated terms.
      </p>
      <p>
        Users are responsible for maintaining the confidentiality of their accounts. We do not store sensitive data and only
        access your Gmail with your permission through Google OAuth.
      </p>
      <p>
        Abuse of the service, including attempts to hack, misuse, or spam, may result in termination of access.
      </p>
      <p>
        This app is provided "as-is" without any warranties. We are not liable for any data loss or issues caused by third-party
        services like Gmail or news APIs.
      </p>
      <p>
        Contact us at <a href="mailto:championchandu333@gmail.com">championchandu333@gmail.com</a> with questions.
      </p>
    </div>
  );
};

export default TermsOfService;
