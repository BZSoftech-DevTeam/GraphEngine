import React from "react";
import QR_iMAGE from "../../Assets/qrcode.png";
import CREDIT_CARDS_IMAGE from "../../Assets/credit-cards.png";

const PaymentMethodSelection = ({
  paymentMethod,
  setPaymentMethod,
  errors,
  setErrors,
}) => {
  const bankDetails = {
    accountName: "Company Name",
    accountNumber: "1234567890",
    bankName: "Example Bank",
    branchCode: "ABCD1234",
  };

  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        Select Payment Method
      </h3>
      <div className="space-y-3">
        {/* Direct Bank Transfer Option */}
        <div
          className={`border rounded-lg p-4 cursor-pointer transition-all duration-300 
            ${
              paymentMethod === "direct-bank"
                ? "border-blue-500 bg-blue-50"
                : "border-gray-200 hover:border-gray-300"
            }`}
          onClick={() => {
            setPaymentMethod(
              paymentMethod === "direct-bank" ? "" : "direct-bank"
            );
            setErrors((prev) => ({ ...prev, paymentMethod: "" }));
          }}
        >
          <div className="flex items-center justify-between">
            <span className="font-medium text-gray-800">
              Direct Bank Transfer
            </span>
            {paymentMethod === "direct-bank" && (
              <svg
                className="w-5 h-5 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            )}
          </div>
        </div>

        {/* Bank Details Section */}
        {paymentMethod === "direct-bank" && (
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="text-lg font-semibold mb-3">
              Bank Transfer Details
            </h4>
            <div className="space-y-2">
              <p>
                <strong>Account Name:</strong> {bankDetails.accountName}
              </p>
              <p>
                <strong>Account Number:</strong> {bankDetails.accountNumber}
              </p>
              <p>
                <strong>Bank Name:</strong> {bankDetails.bankName}
              </p>
              <p>
                <strong>Branch Code:</strong> {bankDetails.branchCode}
              </p>
              <p className="text-sm text-gray-600 mt-2">
                Please use the above details for your bank transfer. Attach the
                payment receipt when submitting.
              </p>
            </div>
          </div>
        )}

        {/* E-Wallet Option */}
        <div
          className={`border rounded-lg p-4 cursor-pointer transition-all duration-300 
            ${
              paymentMethod === "e-wallet"
                ? "border-blue-500 bg-blue-50"
                : "border-gray-200 hover:border-gray-300"
            }`}
          onClick={() => {
            setPaymentMethod(paymentMethod === "e-wallet" ? "" : "e-wallet");
            setErrors((prev) => ({ ...prev, paymentMethod: "" }));
          }}
        >
          <div className="flex items-center justify-between">
            <span className="font-medium text-gray-800">
              E-Wallet (JazzCash/EasyPaisa)
            </span>
            {paymentMethod === "e-wallet" && (
              <svg
                className="w-5 h-5 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            )}
          </div>
        </div>

        {/* E-Wallet QR Code Section */}
        {paymentMethod === "e-wallet" && (
          <div className="bg-gray-50 p-4 rounded-lg text-center">
            <h4 className="text-lg font-semibold mb-3">Scan to Pay</h4>
            <div className="flex justify-center items-center">
              <img
                src={QR_iMAGE}
                alt="E-Wallet QR Code"
                className="w-64 h-64 object-cover rounded-lg"
              />
            </div>
            <p className="text-sm text-gray-600 mt-3">
              Scan this QR code with JazzCash or EasyPaisa app to complete
              payment
            </p>
          </div>
        )}

        {/* Disabled Credit Card Option */}
        <div className="border border-gray-200 rounded-lg p-4 opacity-50 cursor-not-allowed">
          <div className="flex items-center justify-between">
            <span className="font-medium text-gray-500">
              Credit Card (Not Available)
            </span>
          </div>
          <div className="mt-4">
            <img
              src={CREDIT_CARDS_IMAGE}
              alt="Credit Card Placeholder"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Error Message */}
      {errors.paymentMethod && (
        <p className="text-red-500 text-sm mt-1">{errors.paymentMethod}</p>
      )}
    </div>
  );
};

export default PaymentMethodSelection;
