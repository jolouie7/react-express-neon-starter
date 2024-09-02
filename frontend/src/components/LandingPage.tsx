export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <div className="flex items-center justify-center bg-blue-50 px-8 py-16 text-gray-800">
        <div className="max-w-2xl text-left">
          <div className="mb-4 inline-block rounded-full bg-gray-800 px-3 py-1 text-sm text-gray-300">
            Certified Digital Marketing Professional
          </div>
          <h1 className="mb-4 text-5xl font-bold leading-tight">
            Start your project management with Neon
          </h1>
          <p className="mb-8 text-gray-400">
            Neon is a cloud-based project management tool designed to help you
            and your team stay organized and productive.
          </p>
          <div className="flex space-x-4">
            <button className="rounded-md bg-white px-6 py-3 font-semibold text-gray-900">
              Try for Free
            </button>
            <button className="rounded-md border border-gray-700 bg-gray-800 px-6 py-3 font-semibold text-white">
              Book Demo
            </button>
          </div>
        </div>
        <div className="hidden lg:block">
          <img
            src="https://placehold.co/700x500"
            alt="Neon Dashboard"
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      {/* Features Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-800">
            Key Features
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                title: "Task Management",
                description: "Organize and prioritize your tasks efficiently.",
              },
              {
                title: "Team Collaboration",
                description: "Work seamlessly with your team members.",
              },
              {
                title: "Progress Tracking",
                description: "Monitor project progress in real-time.",
              },
            ].map((feature, index) => (
              <div key={index} className="rounded-lg bg-white p-6 shadow-md">
                <h3 className="mb-2 text-xl font-semibold text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-blue-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-800">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {[
              {
                name: "John Doe",
                role: "Project Manager",
                quote:
                  "Neon has revolutionized how we manage our projects. It's intuitive and powerful.",
              },
              {
                name: "Jane Smith",
                role: "Team Lead",
                quote:
                  "The collaboration features in Neon have greatly improved our team's productivity.",
              },
            ].map((testimonial, index) => (
              <div key={index} className="rounded-lg bg-white p-6 shadow-md">
                <p className="mb-4 text-gray-600">"{testimonial.quote}"</p>
                <div className="font-semibold text-gray-800">
                  {testimonial.name}
                </div>
                <div className="text-sm text-gray-500">{testimonial.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-500 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold">Ready to Get Started?</h2>
          <p className="mb-8">
            Join thousands of teams already using Neon to boost their
            productivity.
          </p>
          <button className="rounded-md bg-white px-6 py-3 font-semibold text-indigo-600 transition duration-300 hover:bg-indigo-50">
            Start Your Free Trial
          </button>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="mt-auto bg-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div>
              <h2 className="mb-4 text-xl font-bold">Shadcn</h2>
              <p className="text-sm">
                Shadcn SaaS template is a powerful and versatile software
                application that provides a comprehensive framework for building
                and delivering cloud-based solutions.
              </p>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold">Products</h3>
              <ul className="space-y-2">
                {[
                  "Project Management",
                  "Multi-tenancy",
                  "Scalability",
                  "Customization",
                  "Integration",
                  "Mobile accessibility",
                  "Analytics and reporting",
                ].map((item) => (
                  <li key={item} className="text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold">Features</h3>
              <ul className="space-y-2">
                {[
                  "User management",
                  "Workflow automation",
                  "API access",
                  "Data visualization",
                  "Version control",
                  "Upgrades",
                  "Billing and invoicing",
                ].map((item) => (
                  <li key={item} className="text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold">Explore</h3>
              <ul className="space-y-2">
                {["Docs", "Pricing", "Integrations", "Blog", "About"].map(
                  (item) => (
                    <li key={item} className="text-sm">
                      {item}
                    </li>
                  ),
                )}
              </ul>
            </div>
          </div>
          <p className="mt-8 text-sm">Copyright © 2024. All rights reserved</p>
        </div>
      </footer>
    </div>
  );
}
