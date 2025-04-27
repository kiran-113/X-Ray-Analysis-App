import { XrayInfoType } from "@/types/types";
import React from "react";

type TableProps = {
  info: XrayInfoType;
};

const Table = ({ info }: TableProps) => {
  return (
    <table className="w-full">
      <tbody>
        <tr>
          <td className="font-semibold pr-4 py-2 text-green-800">Severity:</td>
          <td className="text-gray-700">{info.severity}</td>
        </tr>
        <tr>
          <td className="font-semibold pr-4 py-2 text-green-800">Affected Area:</td>
          <td className="text-gray-700">{info.affectedArea}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;