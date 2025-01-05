import React from "react";

const CustomTable = () => {
  return (
    <div className="overflow-x-auto">
      <table className="table-auto border-collapse border border-gray-300 w-full">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">শ্রেণি</th>
            <th className="border border-gray-300 px-4 py-2">শাখা</th>
            <th className="border border-gray-300 px-4 py-2">ছাত্র</th>
            <th className="border border-gray-300 px-4 py-2">ছাত্রী</th>
            <th className="border border-gray-300 px-4 py-2">মোট ছাত্র/ছাত্রী</th>
            <th className="border border-gray-300 px-4 py-2">উপস্থিত ছাত্র</th>
            <th className="border border-gray-300 px-4 py-2">উপস্থিত ছাত্রী</th>
            <th className="border border-gray-300 px-4 py-2">মোট উপস্থিত</th>
            <th className="border border-gray-300 px-4 py-2">উপস্থিতির শতাংশ</th>
          </tr>
        </thead>
        <tbody>
          {/* Sample Rows */}
          <tr className="bg-blue-100">
            <td className="border border-gray-300 px-4 py-2" rowSpan="2">নবম শ্রেণি</td>
            <td className="border border-gray-300 px-4 py-2">ক</td>
            <td className="border border-gray-300 px-4 py-2">36</td>
            <td className="border border-gray-300 px-4 py-2">55</td>
            <td className="border border-gray-300 px-4 py-2">91</td>
            <td className="border border-gray-300 px-4 py-2">0</td>
            <td className="border border-gray-300 px-4 py-2">0</td>
            <td className="border border-gray-300 px-4 py-2">0</td>
            <td className="border border-gray-300 px-4 py-2">0.00</td>
          </tr>
          <tr className="bg-blue-100">
            <td className="border border-gray-300 px-4 py-2">খ</td>
            <td className="border border-gray-300 px-4 py-2">47</td>
            <td className="border border-gray-300 px-4 py-2">56</td>
            <td className="border border-gray-300 px-4 py-2">103</td>
            <td className="border border-gray-300 px-4 py-2">0</td>
            <td className="border border-gray-300 px-4 py-2">0</td>
            <td className="border border-gray-300 px-4 py-2">0</td>
            <td className="border border-gray-300 px-4 py-2">0.00</td>
          </tr>
          {/* Highlighted Total Row */}
          <tr className="bg-yellow-100 font-bold">
            <td className="border border-gray-300 px-4 py-2" colSpan="4">
              মোট নবম শ্রেণি
            </td>
            <td className="border border-gray-300 px-4 py-2">194</td>
            <td className="border border-gray-300 px-4 py-2">0</td>
            <td className="border border-gray-300 px-4 py-2">0</td>
            <td className="border border-gray-300 px-4 py-2">0</td>
            <td className="border border-gray-300 px-4 py-2">0.00</td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
        <tfoot>
          <tr className="bg-gray-300 font-bold">
            <td className="border border-gray-300 px-4 py-2" colSpan="4">
              সর্বমোট
            </td>
            <td className="border border-gray-300 px-4 py-2">1071</td>
            <td className="border border-gray-300 px-4 py-2">0</td>
            <td className="border border-gray-300 px-4 py-2">0</td>
            <td className="border border-gray-300 px-4 py-2">0</td>
            <td className="border border-gray-300 px-4 py-2">0.00</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default CustomTable;
