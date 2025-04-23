import React from "react";
const Resources = () => {
  const resources = [
    {
      id: 1,
      title: "District Directory",
      category: "Sucess",
      url: "/images/logo.svg",
      name: "District report 2023.pdf"
    },
    {
        id: 2,
        title: "District Directory",
        category: "Sucess",
        url: "/images/logo.svg",
         name: "jila 2023.pdf"
        
      },
  ];
  return (
    <section className="flex justify-center items-center flex-col p-10 pt-52">
      <h1 className="text-4xl text-heading mb-3">Leo District Council</h1>
      <div className="overflow-x-auto w-full">
        <table className="min-w-full border-collapse border border-gray-400">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2 text-left">SN</th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Name
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Category
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Download
              </th>
            </tr>
          </thead>
          <tbody>
            {resources.map((resource, index) => (
              <tr key={resource.id}>
                <td className="border border-gray-300 px-4 py-2">
                  {index + 1}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {resource.title}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {resource.category}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                 <a className="text-secondary font-bold text-sm underline" href={resource.url} download={resource.name}>Download</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Resources;
