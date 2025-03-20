import React, { useState } from "react";
import StaticButtons from "@components/Buttons/StaticButtons";

const InputField = ({ type, placeholder, value, onChange }) => (
  <div className="mt-5">
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="bg-inherit outline-none w-full h-[50px] text-white border-b border-b-white"
      required
    />
  </div>
);

const TextAreaField = ({ placeholder, value, onChange }) => (
  <div className="mt-5">
    <textarea
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="bg-inherit outline-none w-full h-[150px] text-white border-b border-b-white"
      required
    ></textarea>
  </div>
);

function Contacts() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="flex justify-center items-center min-h-screen">
      <div className="text-center">
        <h2 className="text-[64px] font-[ZenDots] text-white">Have a Question?</h2>
        <p className="opacity-70 w-[550px] text-white mx-auto">
          For more information, feel free to contact us at hello@inkyy.com or visit our website www.inkyy.com
        </p>
        <form className="w-[576px] mt-5 mx-auto" onSubmit={handleSubmit}>
          <InputField
            type="text"
            placeholder="FULL NAME"
            value={formData.fullName}
            onChange={handleChange}
            name="fullName"
          />
          <InputField
            type="email"
            placeholder="EMAIL"
            value={formData.email}
            onChange={handleChange}
            name="email"
          />
          <InputField
            type="text"
            placeholder="SERVICE"
            value={formData.service}
            onChange={handleChange}
            name="service"
          />
          <TextAreaField
            placeholder="MESSAGE"
            value={formData.message}
            onChange={handleChange}
            name="message"
          />
          <div className="mt-5 font-[ZenDots]">
            <StaticButtons
              textButton="say Hello!"
              bgColor="#FFCF4E"
              textColor="#000000"
              paddingY="20px"
              paddingX="52px"
              aria-label="Say Hello"
            />
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contacts;
