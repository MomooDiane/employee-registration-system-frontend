import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../sevices/EmployeeService";
import Employee from "./Employee";

function EmployeeList() {
  const navigate = useNavigate();

  const [employees, setEmployees] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await EmployeeService.getEmployees();
        setEmployees(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const deleteEmployee = (e, id) => {
    e.preventDefault();
    EmployeeService.deleteEmployee(id).then((response) => {
      if (employees) {
        setEmployees((prevElement) => {
          return prevElement.filter((employee) => employee.id !== id);
        });
      }
    });
  };

  return (
    <>
      <div className="container mx-auto my-8">
        <div className="h-12">
          <button
            onClick={() => navigate("/addEmployee")}
            className="bg-slate-600 hover:bg-blue-600 text-white font-bold px-6 px-4 rounded"
          >
            Add Employee
          </button>
        </div>
        <div className="flex shadow border-b">
          <table className="min-w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left px-4 py-2">First Name</th>
                <th className="text-left px-4 py-2">Last Name</th>
                <th className="text-left px-4 py-2">Email ID</th>
                <th className="text-left px-4 py-2">Actions</th>
              </tr>
            </thead>
            {!loading && (
              <tbody className="bg-white">
                {employees.map((employee) => (
                  <Employee
                    employee={employee}
                    deleteEmployee={deleteEmployee}
                    key={employee.id}
                  ></Employee>
                ))}
              </tbody>
            )}
          </table>
        </div>
      </div>
    </>
  );
}

export default EmployeeList;
