import React from "react";

function Employee({ employee, deleteEmployee }) {
  return (
    <tr key={employee.id}>
      <td className="text-left px-4 py-2 text-gray-500 whitespace-nowrap">
        {employee.firstName}
      </td>
      <td className="text-left px-4 py-2 text-gray-500 whitespace-nowrap">
        {employee.lastName}
      </td>
      <td className="text-left px-4 py-2 text-gray-500 whitespace-nowrap">
        {employee.emailId}
      </td>
      <td className="text-left px-4 py-2">
        <a href="#" className="text-blue-400 hover:text-blue-600 underline">
          Edit
        </a>
        <a
          onClick={(e, id) => deleteEmployee(e, employee.id)}
          className="text-red-400 hover:text-red-600 underline pl-6"
        >
          Delete
        </a>
      </td>
    </tr>
  );
}

export default Employee;
