import React, { useState } from 'react';
import { Menu, X, ArrowRight, CheckCircle, Star, Users, Zap } from 'lucide-react';

export default function LandingPage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white">
      {/* Navbar */}
      <nav className="bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <span className="text-white text-2xl font-bold">TechFlow</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-white hover:text-blue-200 transition">Features</a>
              <a href="#pricing" className="text-white hover:text-blue-200 transition">Pricing</a>
              <a href="#about" className="text-white hover:text-blue-200 transition">About</a>
            </div>
            <div className="hidden md:block">
              <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-blue-50 transition">
                Get Started
              </button>
            </div>
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="text-white">
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
          {isOpen && (
            <div className="md:hidden pb-4 space-y-2">
              <a href="#features" className="block text-white hover:bg-blue-700 px-3 py-2 rounded">Features</a>
              <a href="#pricing" className="block text-white hover:bg-blue-700 px-3 py-2 rounded">Pricing</a>
              <a href="#about" className="block text-white hover:bg-blue-700 px-3 py-2 rounded">About</a>
              <button className="w-full bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold">Get Started</button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-100 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Welcome to <span className="text-blue-600">TechFlow</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            The ultimate solution for streamlining your workflow. Boost productivity and transform the way you work.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center justify-center gap-2">
              Start Free Trial <ArrowRight size={20} />
            </button>
            <button className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
              Watch Demo
            </button>
          </div>
          <div className="mt-12 bg-white rounded-lg shadow-xl p-8">
            <div className="bg-gradient-to-r from-blue-200 to-indigo-200 h-64 rounded-lg flex items-center justify-center">
              <span className="text-gray-600">Product Preview</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Powerful Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Zap className="text-blue-600" size={32} />, title: "Lightning Fast", desc: "Optimized for speed and performance" },
              { icon: <Users className="text-blue-600" size={32} />, title: "Collaborate", desc: "Work together seamlessly with your team" },
              { icon: <Star className="text-blue-600" size={32} />, title: "Premium Quality", desc: "Enterprise-grade features and support" }
            ].map((feature, i) => (
              <div key={i} className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition transform hover:scale-105">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="about" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Why Choose Us?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {["24/7 Customer Support", "99.9% Uptime Guarantee", "Advanced Analytics", "Easy Integration"].map((benefit, i) => (
              <div key={i} className="flex items-center gap-4">
                <CheckCircle className="text-green-500" size={28} />
                <span className="text-lg text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Simple Pricing</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Starter", price: "$29", features: ["Up to 5 users", "Basic support", "10GB storage"] },
              { name: "Pro", price: "$79", features: ["Up to 50 users", "Priority support", "500GB storage"], highlighted: true },
              { name: "Enterprise", price: "Custom", features: ["Unlimited users", "24/7 support", "Unlimited storage"] }
            ].map((plan, i) => (
              <div key={i} className={`rounded-lg p-8 transition transform hover:scale-105 ${plan.highlighted ? 'bg-blue-600 text-white shadow-xl' : 'bg-gray-50 border-2 border-gray-200'}`}>
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className={`text-3xl font-bold mb-6 ${plan.highlighted ? 'text-white' : 'text-blue-600'}`}>{plan.price}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2">
                      <CheckCircle size={20} /> {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-2 rounded-lg font-semibold transition ${plan.highlighted ? 'bg-white text-blue-600 hover:bg-gray-100' : 'bg-blue-600 text-white hover:bg-blue-700'}`}>
                  Choose Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8">Join thousands of happy customers today</p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
            Start Your Free Trial Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div><h4 className="text-white font-bold mb-4">TechFlow</h4><p className="text-sm">The future of workflow management</p></div>
            <div><h4 className="text-white font-bold mb-4">Product</h4><ul className="space-y-2 text-sm"><li><a href="#" className="hover:text-white">Features</a></li><li><a href="#" className="hover:text-white">Pricing</a></li></ul></div>
            <div><h4 className="text-white font-bold mb-4">Company</h4><ul className="space-y-2 text-sm"><li><a href="#" className="hover:text-white">About</a></li><li><a href="#" className="hover:text-white">Blog</a></li></ul></div>
            <div><h4 className="text-white font-bold mb-4">Legal</h4><ul className="space-y-2 text-sm"><li><a href="#" className="hover:text-white">Privacy</a></li><li><a href="#" className="hover:text-white">Terms</a></li></ul></div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-sm">
            <p>&copy; 2025 TechFlow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}