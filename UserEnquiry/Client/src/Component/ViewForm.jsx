import React from 'react'

export default function ViewForm({handlerChange,handlerSubmit,formData}) {
  return (
    <div className="bg-gray-300 p-10">
      <form onSubmit={handlerSubmit} className="max-w-sm mx-auto">
        <div className="mb-5">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your Name
          </label>
          <input
            type="text"
            onChange={handlerChange}
            value={formData.Name}
            placeholder="Enter your name..."
            name="Name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your email
          </label>
          <input
            type="email"
            name="Email"
            onChange={handlerChange}
            value={formData.Email}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@flowbite.com"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="Phone"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your PhoneNo:
          </label>
          <input
            type="number"
            name="Phone"
            onChange={handlerChange}
            value={formData.Phone}
            placeholder="Enter your phone number here..."
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="textarea"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Type Message:
          </label>
          <textarea
            type="textarea"
            name="Message"
            onChange={handlerChange}
            value={formData.Message}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 h-25 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Write your message here..."
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 border border-gray-300 text-gray-900 font-bold text-m rounded-lg focus:ring-blue-500 focus:border-blue-500 hover:bg-blue-600 block w-full p-2.5 "
        >
          {formData._id ? "Update" : "Save"}
        </button>
      </form>
    </div>
  );
}
