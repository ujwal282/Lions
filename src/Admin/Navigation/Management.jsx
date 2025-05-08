import React from "react";
import { Pencil, Trash2Icon } from "lucide-react";

const Management = () => {
  const Users = [
    {
      id: "ADAM001",
      userName: "adam smith",
      email: "adam.smith@lionsclub.org",
      role: "Super Admin",
    },
    {
      id: "ADAM001",
      userName: "adam smith",
      email: "adam.smith@lionsclub.org",
      role: "Super Admin",
    },
    {
      id: "ADAM001",
      userName: "adam smith",
      email: "adam.smith@lionsclub.org",
      role: "Editor",
    },
    {
      id: "ADAM001",
      userName: "adam smith",
      email: "adam.smith@lionsclub.org",
      role: "Viewer",
    },
    {
      id: "ADAM001",
      userName: "adam smith",
      email: "adam.smith@lionsclub.org",
      role: "Admin",
    },
  ];

  const getRoleBadge = (role) => {
    const baseClasses = "text-xs font-semibold px-2.5 py-0.5 pt-1.5 pb-1.5 rounded-full";
    switch (role) {
      case "Super Admin":
        return `${baseClasses} bg-purple-100 text-purple-800`;
      case "Admin":
        return `${baseClasses} bg-blue-100 text-blue-800`;
      case "Editor":
        return `${baseClasses} bg-green-100 text-green-800`;
      case "Viewer":
        return `${baseClasses} bg-gray-100 text-gray-800`;
      default:
        return `${baseClasses} bg-gray-100 text-gray-800`;
    }
  };

  return (
    <div className="p-4 w-7xl">
      <div className="overflow-x-auto rounded-lg shadow border border-gray-200">
        <table className="min-w-full text-sm text-left text-gray-700 bg-white">
          <thead className="bg-gray-100 text-xs text-gray-600 uppercase">
            <tr>
              <th className="px-6 py-3">ID</th>
              <th className="px-6 py-3">Username</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">Role</th>
              <th className="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {Users.map((user, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-900">{user.id}</td>
                <td className="px-6 py-4 font-semibold">{user.userName}</td>
                <td className="px-6 py-4">{user.email}</td>
                <td className="px-6 py-4">
                  <span className={getRoleBadge(user.role)}>{user.role}</span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-3 text-gray-600">
                    <span className="shadow-gray-400 shadow p-1 rounded hover:shadow-none"><Pencil className="w-4 h-4 cursor-pointer hover:text-gray-400" /></span>
                    <span className="shadow-gray-400 shadow p-1 rounded hover:shadow-none"><Trash2Icon className="w-4 h-4 cursor-pointer hover:text-red-600" /></span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Management;
