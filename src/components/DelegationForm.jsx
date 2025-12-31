import React, { useState } from "react";

export default function DubaiDelegationForm() {
  const [step, setStep] = useState(1);

  return (
    <section className="w-full bg-[#f4f6f4] py-20 px-4">
      <div className="mx-auto max-w-xl md:max-w-5xl bg-white rounded-3xl shadow-xl overflow-hidden">
        {/* ================= HEADER ================= */}
        <div className="px-8 py-10 border-b text-center">
          <h1 className="text-3xl md:text-4xl font-semibold">
            #11th Dubai Delegation
          </h1>
          <p className="text-gray-600 mt-2">
            Registration Form · 10–13 February, 2025
          </p>

          {/* Progress */}
          <div className="flex justify-center gap-3 mt-6">
            <StepDot active={step === 1} />
            <StepDot active={step === 2} />
          </div>
        </div>

        {/* ================= BODY ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3">
          {/* ===== LEFT INFO PANEL (DESKTOP) ===== */}
          <aside className="hidden md:block md:col-span-1 bg-[#0f1f14] text-white p-8">
            <h3 className="text-xl font-semibold mb-4">
              Why Join the Delegation?
            </h3>

            <ul className="space-y-3 text-sm text-white/90">
              <li>✓ Access to GITEX & Expand Northstar</li>
              <li>✓ 1-on-1 with Dubai Investors</li>
              <li>✓ 30-Day UAE VISA</li>
              <li>✓ 6D / 5N Stay</li>
              <li>✓ Fundraising & Partnerships</li>
            </ul>

            <div className="mt-8 text-sm text-white/70">
              Limited seats. Shortlisted founders only.
            </div>
          </aside>

          {/* ===== FORM ===== */}
          <div className="md:col-span-2 px-8 md:px-12 py-10">
            {/* ================= STEP 1 ================= */}
            {step === 1 && (
              <div className="animate-fadeIn">
                <h3 className="text-green-600 font-semibold uppercase tracking-wide mb-6">
                  Your Details
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input label="Name" placeholder="Your Full Name" required />
                  <Input
                    label="Phone Number"
                    placeholder="Your Phone Number"
                    required
                  />

                  <Input
                    label="Email ID"
                    placeholder="Your Official Email ID"
                    required
                  />
                  <Input label="Company Name" placeholder="Your Company Name" />

                  <Input label="Company Website" placeholder="Website URL" />
                  <Input
                    label="Travelling From (City)"
                    placeholder="Your City"
                    required
                  />

                  <div className="md:col-span-2">
                    <Select
                      label="How did you hear about us?"
                      options={[
                        "Instagram",
                        "LinkedIn",
                        "Referral",
                        "Google",
                        "WhatsApp",
                        "Other",
                      ]}
                    />
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="mt-8 w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-semibold transition"
                >
                  Continue →
                </button>
              </div>
            )}

            {/* ================= STEP 2 ================= */}
            {step === 2 && (
              <div className="animate-fadeIn">
                <h3 className="text-green-600 font-semibold uppercase tracking-wide mb-6">
                  Final Details
                </h3>

                <label className="block font-medium mb-3">
                  Do you want to register your company in Dubai?
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                  <Radio label="Yes" />
                  <Radio label="No" />
                  <Radio label="Maybe" />
                </div>

                <Input label="Referred By" placeholder="Name (Optional)" />

                {/* Inclusions */}
                <div className="bg-[#f0f5f0] rounded-2xl p-6 mt-8">
                  <h4 className="font-semibold text-green-700 mb-4">
                    What’s Included
                  </h4>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
                    {[
                      "GITEX & Expand Northstar Access",
                      "Dubai Konnect Access",
                      "Investor Meetings",
                      "Return Airfare (Ex-Delhi)",
                      "30-Day UAE VISA",
                      "6D / 5N Stay",
                    ].map((item, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-green-600 font-bold">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-4 mt-8">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="w-1/3 border border-gray-300 rounded-xl py-4 font-medium"
                  >
                    ← Back
                  </button>

                  <button
                    type="submit"
                    className="w-2/3 bg-green-600 hover:bg-green-700 text-white rounded-xl py-4 font-semibold"
                  >
                    Submit Registration
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= SMALL COMPONENTS ================= */

function StepDot({ active }) {
  return (
    <div
      className={`h-2.5 w-2.5 rounded-full transition ${
        active ? "bg-green-600 scale-110" : "bg-gray-300"
      }`}
    />
  );
}

function Input({ label, placeholder, required }) {
  return (
    <div>
      <label className="block font-medium mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        placeholder={placeholder}
        className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-green-500 focus:outline-none transition"
      />
    </div>
  );
}

function Select({ label, options }) {
  return (
    <div>
      <label className="block font-medium mb-2">{label}</label>
      <select className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-white focus:ring-2 focus:ring-green-500">
        <option value="">Select an option</option>
        {options.map((o, i) => (
          <option key={i}>{o}</option>
        ))}
      </select>
    </div>
  );
}

function Radio({ label }) {
  return (
    <label className="border rounded-xl px-4 py-4 cursor-pointer hover:border-green-500 transition flex gap-3 items-center">
      <input
        type="radio"
        name="company-register"
        className="accent-green-600"
      />
      <span className="text-sm">{label}</span>
    </label>
  );
}
