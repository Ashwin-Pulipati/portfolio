// Contact.jsx

import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import React, { useCallback, useEffect, useState, useMemo } from "react";
import { BsPatchExclamationFill } from "react-icons/bs";
import { PiSealCheckFill } from "react-icons/pi";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createRipple } from "../layouts/RippleEffect";
import Title from "../layouts/Title";
import ContactBanner from "./components/ContactBanner";
import { groupedInputs } from "./Contact.constants";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    username: "",
    phoneNumber: "",
    email: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    const savedData = localStorage.getItem("contactFormData");
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("contactFormData", JSON.stringify(formData));
  }, [formData]);

  const [touched, setTouched] = useState({});

  const validateField = useCallback((name, value) => {
    if (!value.trim() && name !== "phoneNumber") {
      return "This is a required field.";
    }
    if (name === "email") {
      return !value.match(/(@gmail\.com|\.edu)$/i)
        ? "Use Gmail or student email."
        : "";
    }
    if (name === "phoneNumber") {
      if (!value.trim()) return "";
      if (value.includes("+")) return "Please avoid country codes";
      return /^\d{10}$/.test(value) ? "" : "Phone number must be exactly 10 digits";
    }
    return "";
  }, []);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setTouched((prev) => ({ ...prev, [name]: true }));
  }, []);

  const handleSend = useCallback(
    async (e) => {
      e.preventDefault();
      const { username, phoneNumber, email, subject, message } = formData;
      if (!username || !email || !subject || !message) {
        toast.error("All fields are required!", {
          className: "custom-toast",
          progressClassName: "custom-toast-error-progress",
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
        });
        return;
      }
      const emailError = validateField("email", email);
      const phoneError = validateField("phoneNumber", phoneNumber);
      if (emailError || phoneError) {
        toast.error(emailError || phoneError, {
          className: "custom-toast",
          progressClassName: "custom-toast-error-progress",
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
        });
        return;
      }
      const templateParams = {
        subject,
        to_name: "Ashwin",
        from_name: username,
        message,
        from_email: email,
        phone_number: phoneNumber,
      };
      try {
        await emailjs.send(
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_TEMPLATE_ID,
          templateParams,
          process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        );
        toast.success("Message sent successfully!", {
          className: "custom-toast",
          progressClassName: "custom-toast-success-progress",
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
        });
        setFormData({
          username: "",
          phoneNumber: "",
          email: "",
          subject: "",
          message: "",
        });
        setTouched({});
      } catch (error) {
        toast.error("Something went wrong. Please try again.", {
          className: "custom-toast",
          progressClassName: "custom-toast-error-progress",
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
        });
      }
    },
    [formData, validateField]
  );

  const renderField = useCallback(
    (field) => {
      const value = formData[field.name];
      const errorMessage = touched[field.name]
        ? validateField(field.name, value)
        : "";
      const iconStyle = {
        position: "absolute",
        right: "16px",
        top: "50%",
        transform: "translateY(-50%)",
        fontSize: "18px",
      };

      if (field.type === "textarea") {
        return (
          <fieldset
            key={field.name}
            className="flex-1 flex flex-col gap-4 font-titleFont"
          >
            <label
              htmlFor={field.id}
              className="text-sm text-gray-500 dark:text-gray-400 font-semibold uppercase tracking-[2px]"
            >
              {field.label} <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="h-fit w-full rounded-md hoverFocusGradient p-[2px]">
                <div className="flex h-full rounded-md w-full items-center justify-center font-normal relative">
                  <textarea
                    id={field.id}
                    name={field.name}
                    value={value}
                    onChange={handleChange}
                    rows={field.rows || 4}
                    className="contactTextArea text-gray-600 dark:text-gray-200"
                    {...(field.name === "phoneNumber" ? {} : { required: true })}
                  ></textarea>
                  {touched[field.name] &&
                    (errorMessage ? (
                      <span style={iconStyle}>
                        <BsPatchExclamationFill className="w-4 h-4 text-red-600 dark:text-red-500" />
                      </span>
                    ) : (
                      <span style={iconStyle}>
                        <PiSealCheckFill className="w-5 h-5 text-green-600 dark:text-green-500" />
                      </span>
                    ))}
                </div>
              </div>
              {touched[field.name] && errorMessage && (
                <div className="text-red-600 dark:text-red-500 text-xs mt-1 ml-1.5">
                  {errorMessage}
                </div>
              )}
            </div>
          </fieldset>
        );
      }
      return (
        <fieldset
          key={field.name}
          className="flex-1 flex flex-col gap-4 font-titleFont"
        >
          <label
            htmlFor={field.id}
            className="text-sm text-gray-500 dark:text-gray-400 font-semibold uppercase tracking-[2px]"
          >
            {field.label}{" "}
            {field.label !== "Phone Number" ? (
              <span className="text-red-500">*</span>
            ) : (
              <span className="text-gray-400 italic lowercase">(Optional)</span>
            )}
          </label>
          <div className="relative">
            <div
              className="p-0.5 font-normal rounded-md hoverFocusGradient"
              style={{ position: "relative" }}
            >
              <input
                id={field.id}
                type={field.type}
                name={field.name}
                value={value}
                onChange={handleChange}
                {...(field.name === "phoneNumber"
                  ? { maxLength: 10 }
                  : { required: true })}
                className="contactInput text-gray-600 dark:text-gray-200 "
              />
              {touched[field.name] &&
                (errorMessage ? (
                  <span style={iconStyle}>
                    <BsPatchExclamationFill className="w-4 h-4 text-red-600 dark:text-red-500" />
                  </span>
                ) : (
                  <span style={iconStyle}>
                    <PiSealCheckFill className="w-5 h-5 text-green-600 dark:text-green-500" />
                  </span>
                ))}
            </div>
            {touched[field.name] && errorMessage && (
              <div className="text-red-600 dark:text-red-500 text-xs mt-1 ml-1.5">
                {errorMessage}
              </div>
            )}
          </div>
        </fieldset>
      );
    },
    [formData, touched, handleChange, validateField]
  );

  // Memoize field groups
  const renderedFieldGroups = useMemo(
    () =>
      groupedInputs.map((group, index) => (
        <fieldset key={index} className={group.groupClass}>
          {group.fields.map((field) => renderField(field))}
        </fieldset>
      )),
    [renderField]
  );

  return (
    <section
      id="contact"
      className="w-full py-14 px-6 sm:px-8 md:px-12 lg:px-16  xl:px-20 "
    >
      <div className="border-b border-b-gray-400 dark:border-b-black pb-20">
        <Title title="HIRE ME" des="Contact Me" />
        <div className="w-full">
          <div className="w-full h-auto flex flex-col lg:flex-row justify-between xs:gap-y-8 md:gap-y-10 lg:gap-8 ">
            <ContactBanner />
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              viewport={{ once: false }}
              className="w-full xl:w-[60%] h-full py-10 px-8 sm:px-6 md:px-10 xl:px-8 xl:py-8 flex flex-col gap-8 cardView rounded-lg"
            >
              <form
                className="flex flex-col gap-4 xl:gap-6 py-2 xl:py-5"
                onSubmit={handleSend}
              >
                {renderedFieldGroups}
                <div className="group relative inline-block p-0.5 rounded-md bg-transparent hover:rounded-full elevatedShadow">
                  <button
                    type="submit"
                    className="ripple-container w-full relative uppercase z-10 px-6 py-3 text-titleFont font-medium rounded-md 
                    cardGradient hover:bg-none hover:rounded-full hover:bg-green-100 
                    hover:text-green-800  dark:hover:bg-none dark:hover:bg-green-800 dark:hover:text-green-100 tracking-[2px]"
                    onMouseDown={createRipple}
                    aria-label="Send Message"
                  >
                    Send Message
                  </button>
                  <span
                    className="absolute inset-0 z-0 rounded-md appGradient opacity-0 group-hover:opacity-100 
                    transition-opacity duration-300 pointer-events-none group-hover:rounded-full"
                  ></span>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        className="custom-toast-container"
        toastClassName={(context) =>
          context?.type === "success"
            ? "custom-toast dark:custom-toast"
            : "custom-toast-error dark:custom-toast-error"
        }
        progressClassName={(context) =>
          context?.type === "success"
            ? "custom-toast-success-progress dark:custom-toast-success-progress"
            : "custom-toast-error-progress dark:custom-toast-error-progress"
        }
      />
    </section>
  );
};

export default React.memo(Contact);
