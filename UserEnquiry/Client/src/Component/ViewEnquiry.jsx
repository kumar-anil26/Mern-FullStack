import React from "react";

export default function ViewEnquiry({
  allEnquiryData,
  handlerDelete,
  handlerEdit,
}) {
  const handlerOnDelClick = (enquiryId) => {
    handlerDelete(enquiryId);
  };

  const handlerOnEditClick = (enquiryId) => {
    handlerEdit(enquiryId);
  };

  return (
    <div className="bg-gray-300">
      <div className="relative p-2  overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className=" text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Phone No.
              </th>
              <th scope="col" className="px-6 py-3">
                Message
              </th>
              <th scope="col" className="px-6 py-3">
                Edit
              </th>
              <th scope="col" className="px-6 py-3">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {allEnquiryData.length <= 0 ? (
              <tr>
                <th
                  colSpan={7}
                  rowSpan={3}
                  className="text-center font-bold text-5xl py-8 text-rose-500"
                >
                  Data Not found !
                </th>
              </tr>
            ) : (
              allEnquiryData.map((data, index) => (
                <tr
                  key={index}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {data.Name}
                  </th>
                  <td className="px-6 py-4">{data.Email}</td>
                  <td className="px-6 py-4">{data.Phone}</td>
                  <td className="px-6 py-4">{data.Message}</td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => handlerOnEditClick(data._id)}
                      className="font-medium ext-blue-900 bg-amber-500 px-4 p-1 rounded-lg dark:text-blue-500 hover:bg-amber-600"
                    >
                      Edit
                    </button>
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => handlerOnDelClick(data._id)}
                      className="font-medium text-blue-900 bg-red-500 p-1 px-4 rounded-lg dark:text-blue-500 hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
