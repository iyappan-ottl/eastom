import React, { useState, useEffect, useRef, useCallback } from "react";
import axios from 'axios';

const EnrollFormModal = ({ triggerModal, setTriggerModal, params }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    mode: ""
  });
  const modalRef = useRef(null);
  const [messageModel, setMessageModel] = useState(false);
  const [message, setMessage] = useState({ state: 'error', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    try {
      const body = JSON.stringify(formData);
      const requestOptions = {
        method: "POST",
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        url: "https://script.google.com/macros/s/AKfycbxxAW3kN9hdd-3AMFvFMWz-4FVeARPOQywn4G8BJkbiYByF_e83tyiBEQ6FwTweBSRJ/exec",
        data: body
      };

      const response = await axios(requestOptions);
      const result = response?.data;
      if (result.status === 'error') {
        throw new Error(result.message);
      }

      setFormData({ name: "", email: "", phone: "", course: "", mode: "" });
      setTriggerModal(false);
      setMessage({ message: result.message, state: 'success' });
      setMessageModel(true);
    } catch (error) {
      setMessage({ message: error.message, state: 'error' });
      setMessageModel(true);
    } finally {
      setLoading(false);
    }
  };

  const closeModal = useCallback(() => {
    setFormData({ name: "", email: "", phone: "", course: "", mode: "" });
    setTriggerModal(false);
    setMessageModel(false);
    setMessage({ message: '', state: '' });
  }, [setTriggerModal]);

  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      ...params,
    }));
  }, [params]);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target) && loading === false) {
        closeModal();
      }
    };
    if (triggerModal) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [triggerModal, closeModal, loading]);

  return (
    <div>
      {triggerModal && (
        <div
          id="modal-overlay"
          className="fixed inset-0 z-50 flex md:items-center justify-center items-end bg-black bg-opacity-50"
        >
          <div
            ref={modalRef}
            className="relative w-full max-w-md bg-white p-6 rounded-2xl shadow-lg "
          >
            <button
              id="close-modal"
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Enroll in {process.env.REACT_APP_NAME}</h2>
            <form onSubmit={(e) => handleSubmit(e)} className="space-y-4" autoComplete="off">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  maxLength="10"
                  placeholder="Enter your phone number"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-1">
                  Select Course
                </label>
                <select
                  id="course"
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                >
                  <option value="">-- Choose a course --</option>
                  <option value="fsd">Full Stack Development</option>
                  <option value="mad">Mobile App Development</option>
                  <option value="do">DevOps</option>
                  <option value="aids">AI & Data Science</option>
                  <option value="at">Automation Testing</option>
                </select>
              </div>
              <div>
                <label htmlFor="mode" className="block text-sm font-medium text-gray-700 mb-1">
                  Class Mode
                </label>
                <select
                  id="mode"
                  name="mode"
                  value={formData.mode}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                >
                  <option value="">-- Choose a Mode --</option>
                  <option value="online">Online</option>
                  <option value="offline">Offline</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 text-white p-2 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
      {messageModel && (
        <div
          id="modal-overlay"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
        >
          <div
            className="relative w-full max-w-md bg-white p-6 rounded-2xl shadow-lg"
          >
            <button
              id="close-modal"
              onClick={() => setMessageModel(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
            >
              &times;
            </button>
            {message.state === 'error' && <h2 className="text-4xl font-bold text-center text-red-500">Error</h2>}
            {message.state === 'success' && <h2 className="text-4xl font-bold text-center text-green-500">Succes</h2>}

            <h2 className="text-2xl font-bold text-center text-gray-800 mt-6 mb-6">{message.message}</h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default EnrollFormModal;
