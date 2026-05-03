export default function PrivacyPolicy() {
  const sections = [
    {
      title: "Information We Collect",
      points: [
        "We collect personal information such as name, phone number, email address, and delivery address.",
        "We may collect payment-related details through secure payment gateways.",
        "We also collect non-personal data such as browser type, IP address, and usage data.",
      ],
    },
    {
      title: "How We Use Your Information",
      points: [
        "To process and deliver your orders.",
        "To communicate order updates and customer support.",
        "To improve our website, products, and services.",
        "To send promotional offers (only if you opt-in).",
      ],
    },
    {
      title: "Sharing of Information",
      points: [
        "We do not sell or rent your personal information.",
        "We may share data with trusted third-party services (payment gateways, delivery partners).",
        "We may disclose information if required by law.",
      ],
    },
    {
      title: "Data Security",
      points: [
        "We take reasonable measures to protect your personal data.",
        "Secure payment gateways are used for transactions.",
        "However, no online transmission is 100% secure.",
      ],
    },
    {
      title: "Cookies",
      points: [
        "We use cookies to enhance user experience.",
        "Cookies help us understand website usage and improve performance.",
        "You can disable cookies through your browser settings.",
      ],
    },
    {
      title: "User Rights",
      points: [
        "You can request access to your personal data.",
        "You can request correction or deletion of your data.",
        "You can opt-out of marketing communications anytime.",
      ],
    },
    {
      title: "Third-Party Links",
      points: [
        "Our website may contain links to external websites.",
        "We are not responsible for the privacy practices of those sites.",
      ],
    },
    {
      title: "Changes to This Policy",
      points: [
        "We may update this Privacy Policy from time to time.",
        "Changes will be posted on this page with an updated date.",
      ],
    },
    {
      title: "Contact Us",
      points: [
        "Email: devap677@gmail.com",
        "Phone: 8610297625",
      ],
    },
  ];

  return (
    <section className="bg-emerald-50 min-h-screen px-4 py-8 flex justify-center">
      <div className="w-full max-w-5xl bg-white shadow-md rounded-2xl p-6 md:p-10 space-y-6">
        
        {/* Header */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-emerald-900">
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-600 mt-2">
            Welcome to <span className="font-semibold">Sakthi Agri Seeds</span>. 
            Your privacy is important to us. This policy explains how we collect and use your data.
          </p>
        </div>

        <hr className="border-gray-200" />

        {/* Sections */}
        <div className="space-y-6">
          {sections.map((section, index) => (
            <div key={index}>
              <h2 className="text-lg font-semibold text-emerald-800 mb-2">
                {section.title}
              </h2>
              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                {section.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

       

      </div>
    </section>
  );
}