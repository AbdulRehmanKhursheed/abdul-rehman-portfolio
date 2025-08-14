import {
  ArrowLeft,
  Smartphone,
  Code,
  Users,
  ShoppingCart,
  UserCheck,
} from "lucide-react";
import Link from "next/link";

const MobileProjectsPage = () => {
  const mobileApps = [
    {
      title: "Bazaar Customer App",
      description:
        "A comprehensive B2B & B2C shopping experience for Bazaar customers. Features product browsing, cart management, secure checkout, payment integration, and order tracking. Built with React Native for cross-platform compatibility.",
      image: "/images/bazaar-customer-app.png",
      technologies: [
        "Kotlin/Java",
        "Coroutines",
        "MVVM",
        "Jetpack Compose",
        "Kotlin Multiplatform - KMP",
        "Material Design",
        "Payment Gateway",
        "Push Notifications",
      ],
      features: [
        "Product Catalog",
        "Shopping Cart",
        "Payment Integration",
        "Order Tracking",
        "User Profiles",
      ],
      platform: "iOS & Android",
    },
    {
      title: "Bazaar Agent App",
      description:
        "Empowering Bazaar agents with tools for daily operations, customer management, and order processing. Streamlines agent workflows and enhances customer service capabilities.",
      image: "/images/bazaar-agent-image.png",
      technologies: ["Kotlin/Java", "Coroutines", "MVVM", "Material Design"],
      features: [
        "Agent Management",
        "Order Processing",
        "Inventory Tracking",
        "Performance Analytics",
      ],
      platform: "Android",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6 transition-colors duration-200"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Portfolio
          </Link>

          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Smartphone className="w-8 h-8 text-blue-600 mr-3" />
              <h1 className="text-4xl lg:text-5xl font-bold">
                Mobile{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Applications
                </span>
              </h1>
            </div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Enterprise-grade mobile applications built with React Native,
              focusing on user experience, performance, and scalability. These
              apps serve thousands of users daily in production environments.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {mobileApps.map((app, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 bg-white rounded-2xl shadow-lg flex items-center justify-center">
                    <Smartphone className="w-12 h-12 text-blue-600" />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-800">
                    {app.title}
                  </h3>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                    {app.platform}
                  </span>
                </div>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {app.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center">
                    <Code className="w-4 h-4 mr-2" />
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {app.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center">
                    <Users className="w-4 h-4 mr-2" />
                    Key Features
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {app.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Development Approach
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Code className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">
                Cross-Platform
              </h3>
              <p className="text-gray-600 text-sm">
                Built with kotlin multiplatform - KMP for seamless iOS and
                Android deployment
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <ShoppingCart className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">
                Enterprise Ready
              </h3>
              <p className="text-gray-600 text-sm">
                Production-grade apps serving thousands of users daily
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <UserCheck className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">User-Centric</h3>
              <p className="text-gray-600 text-sm">
                Focused on intuitive UX and performance optimization
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileProjectsPage;
