export default function Terms() {
  const sections = [
    {
      title: "General",
      points: [
        "This website is owned and operated by Sakthi Agri Seeds.",
        "By using this site, you confirm that you are at least 18 years old or using it under supervision.",
        "We reserve the right to update or modify these terms at any time without prior notice.",
      ],
    },
    {
      title: "Products and Services",
      points: [
        "We sell agricultural products including seeds, plants, fertilizers, and related items.",
        "All products are intended for agricultural and gardening purposes only.",
        "Product images are for reference; actual products may vary slightly.",
      ],
    },
    {
      title: "Germination and Growth Disclaimer",
      points: [
        "Results depend on soil quality, watering, farming practices, and climate conditions.",
        "We do not guarantee 100% germination or yield.",
        "Sakthi Agri Seeds is not responsible for crop failure or low yield.",
      ],
    },
    {
      title: "Pricing and Availability",
      points: [
        "All prices are listed in INR (₹) and are subject to change without notice.",
        "Product availability may change at any time.",
        "We reserve the right to cancel orders due to stock unavailability.",
      ],
    },
    {
      title: "Orders and Payments",
      points: [
        "Orders are confirmed only after successful payment.",
        "We accept payments via approved online payment methods.",
        "We reserve the right to refuse or cancel any order at our discretion.",
      ],
    },
    {
      title: "Shipping and Delivery",
      points: [
        "Delivery timelines may vary based on location and logistics.",
        "Delays may occur due to weather conditions, transport issues, or remote locations.",
        "Customers must provide accurate delivery details.",
      ],
    },
    {
      title: "Cancellation Policy",
      points: [
        "Orders cannot be cancelled once they are dispatched.",
        "Cancellation requests before dispatch may be accepted at our discretion.",
      ],
    },
    {
      title: "Return and Refund Policy",
      points: [
        "Due to the nature of agricultural products, returns are generally not accepted.",
        "Refunds or replacements are only provided if the wrong or damaged product is delivered (proof required within 24 hours).",
      ],
    },
    {
      title: "User Responsibilities",
      points: [
        "Users must provide correct and complete information.",
        "Users agree not to misuse the website for illegal or harmful activities.",
      ],
    },
    {
      title: "Limitation of Liability",
      points: [
        "Sakthi Agri Seeds shall not be liable for crop loss, environmental damage, or improper product usage.",
        "Our liability is limited to the value of the purchased product.",
      ],
    },
    {
      title: "Intellectual Property",
      points: [
        "All content on this website (text, images, logo) is the property of Sakthi Agri Seeds.",
        "Unauthorized use or reproduction is strictly prohibited.",
      ],
    },
    {
      title: "Privacy",
      points: [
        "User data is collected and used as per our Privacy Policy.",
        "We ensure reasonable protection of user information.",
      ],
    },
    {
      title: "Governing Law",
      points: [
        "These Terms and Conditions are governed by the laws of India.",
        "Any disputes shall be subject to the jurisdiction of local courts.",
      ],
    },
    {
      title: "Contact Information",
      points: [
        "Email: devap677@gmail.com | Phone: 8610297625",
      ],
    },
    {
      title: "Acceptance of Terms",
      points: [
        "By using this website, you confirm that you have read, understood, and agreed to these Terms and Conditions.",
      ],
    },
  ];

  return (
    <section className="bg-emerald-50 min-h-screen px-4 py-8 flex justify-center">
      <div className="w-full max-w-5xl bg-white shadow-md rounded-2xl p-6 md:p-10 space-y-6">
        
        {/* Header */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-emerald-900">
            Terms and Conditions
          </h1>
          <p className="text-sm text-gray-600 mt-2">
            Welcome to <span className="font-semibold">Sakthi Agri Seeds</span>. 
            By accessing or using our website, you agree to these terms.
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