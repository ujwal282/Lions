import React from "react";
const donations = [
    {
      name: "Ujwal Paudel",
      email: "ujwal.paudel@example.com",
      amount: "$1,200",
      category: "Health",
      date: "2025-04-23",
      status: "Completed",
    },
    {
      name: "Iron Man",
      email: "iron.man@avengers.com",
      amount: "$1,200",
      category: "Health",
      date: "2025-04-23",
      status: "Completed",
    },
    {
      name: "Captain America",
      email: "captain.america@avengers.com",
      amount: "$1,200",
      category: "Health",
      date: "2025-04-23",
      status: "Completed",
    },
    {
      name: "Dr. Doom",
      email: "dr.doom@villains.com",
      amount: "$1,200",
      category: "Health",
      date: "2025-04-23",
      status: "Completed",
    },
    {
      name: "Spider-Man",
      email: "spider.man@avengers.com",
      amount: "$1,200",
      category: "Health",
      date: "2025-04-23",
      status: "Completed",
    },
  ];
  

const Donation = () => {
  return (
    <div className="p-6 w-7xl rounded shadow shadow-gray-600">
      <h2 className="text-2xl font-bold">Recent Donations</h2>
      <p className="text-sm text-gray-500 mb-4">
        Latest Donations Received by the Club
      </p>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr className="text-left text-sm text-gray-600">
              <th className="py-2">Donor</th>
              <th className="py-2">Amount</th>
              <th className="py-2">Category</th>
              <th className="py-2">Date</th>
              <th className="py-2">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {donations.map((donation, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="py-3 flex items-center space-x-4">
                  {/* <div className="w-10 h-10 bg-gray-200 rounded-full" /> */}
                  <img
                    src="/images/logo.svg"
                    alt="Profile"
                    className="w-10 h-10 rounded-full object-cover"
                  />

                  <div>
                    <div className="font-medium text-gray-900">
                      {donation.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {donation.email}
                    </div>
                  </div>
                </td>
                <td className="py-3 font-semibold">{donation.amount}</td>
                <td className="py-3 text-sm">{donation.category}</td>
                <td className="py-3 text-sm">{donation.date}</td>
                <td className="py-3">
                  <span className="bg-green-100 shadow shadow-green-900 text-green-700 text-sm px-3 py-1 rounded-full">
                    {donation.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Donation;
