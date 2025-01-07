import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PaymentMethodSelection from "./PaymentMethodSelection";

export default function CheckoutPage() {
  const location = useLocation();
  const navigate = useNavigate();

  // State for selected plan
  const [selectedPlan, setSelectedPlan] = useState(null);

  // Payment methods state
  const [paymentMethod, setPaymentMethod] = useState("");

  // Form state with validation
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  // Form validation errors
  const [errors, setErrors] = useState({});

  // Effect to check for passed plan details
  useEffect(() => {
    // Check if plan was passed through navigation state
    if (location.state && location.state.selectedPlan) {
      setSelectedPlan(location.state.selectedPlan);
    } else {
      // If no plan was selected, redirect back to pricing
      navigate("/pricing");
    }
  }, [location.state, navigate]);

  // Validate form inputs
  const validateForm = () => {
    const newErrors = {};

    // First Name validation
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    // Last Name validation
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    // Phone validation (basic)
    const phoneRegex = /^[0-9]{10,14}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!phoneRegex.test(formData.phone.replace(/[^\d]/g, ""))) {
      newErrors.phone = "Invalid phone number";
    }

    // Payment method validation
    if (!paymentMethod) {
      newErrors.paymentMethod = "Please select a payment method";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Prepare order details
      const orderDetails = {
        plan: selectedPlan,
        personalInfo: formData,
        paymentMethod: paymentMethod,
      };

      // TODO: Implement actual payment/order processing
      console.log("Order submitted:", orderDetails);

      // Show success modal or redirect
      alert("Order processed successfully!");
      navigate("/confirmation", { state: { orderDetails } });
    }
  };

  // If no plan is selected, show loading or redirect
  if (!selectedPlan) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 lg:grid-cols-2 gap-8"
      >
        {/* Checkout Details Section */}
        <div className="bg-white rounded-lg p-6 md:p-8 border border-slate-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Checkout Details
          </h2>

          {/* Personal Information Form */}
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 
                    ${
                      errors.firstName
                        ? "border-red-500 focus:ring-red-500"
                        : "border-gray-300 focus:ring-blue-500"
                    }`}
                  placeholder="Enter first name"
                />
                {errors.firstName && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.firstName}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 
                    ${
                      errors.lastName
                        ? "border-red-500 focus:ring-red-500"
                        : "border-gray-300 focus:ring-blue-500"
                    }`}
                  placeholder="Enter last name"
                />
                {errors.lastName && (
                  <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 
                  ${
                    errors.email
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:ring-blue-500"
                  }`}
                placeholder="Enter email address"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 
                  ${
                    errors.phone
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:ring-blue-500"
                  }`}
                placeholder="Enter phone number"
              />
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
              )}
            </div>

            {/* Payment Methods */}
            <PaymentMethodSelection
              paymentMethod={paymentMethod}
              setPaymentMethod={setPaymentMethod}
              errors={errors}
              setErrors={setErrors}
            />
          </div>
        </div>

        {/* Order Summary Section */}
        <div className="bg-white rounded-lg p-6 md:p-8 border border-slate-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Order Summary
          </h2>

          {/* Selected Plan Card */}
          <div className="border border-slate-200 rounded-lg p-6 mb-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-4">
              {selectedPlan.title} Plan
            </h4>
            <div className="mb-4">
              <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600">
                {selectedPlan.price.includes("$") ? "$" : ""}
                {selectedPlan.price.replace("$", "")}
              </span>
              <p className="mt-2 text-sm text-gray-500">
                {selectedPlan.description}
              </p>
            </div>
            <ul className="space-y-2 text-sm">
              {selectedPlan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-x-2 text-gray-700">
                  <svg
                    className="shrink-0 w-4 h-4 text-blue-600"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Price Breakdown */}
          <div className="space-y-3 mb-6">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-medium">{selectedPlan.price}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Tax (0%)</span>
              <span className="font-medium">$0</span>
            </div>
            <hr className="border-dashed" />
            <div className="flex justify-between font-semibold">
              <span>Total</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600">
                {selectedPlan.price}
              </span>
            </div>
          </div>

          {/* Checkout Button */}
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold rounded-lg 
            hover:from-blue-700 hover:to-violet-700 transition-all duration-300 
            disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Complete Checkout
          </button>
        </div>
      </form>
    </div>
  );
}
