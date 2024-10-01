"use client";
// components/ChildrenTable.js
import { useState, useEffect } from "react";
import { fetchChildren } from "../utility/fetchChildren";

const ChildrenTable = ({ accessToken, sharedFolderUrl }) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetchChildren(accessToken, sharedFolderUrl)
            .then((data) => {
                console.log('data..',data)
                setItems(data)})
            .catch((error) => console.error(error));
    }, [accessToken, sharedFolderUrl]);

    const handleDownload = (downloadUrl, name) => {
        // Trigger download
        const link = document.createElement("a");
        link.href = downloadUrl;
        link.download = name;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full table-auto bg-white border border-gray-200 rounded-lg shadow-md">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Name</th>
                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Size</th>
                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Last Modified</th>
                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Created By</th>
                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Download</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item) => (
                        <tr key={item.id} className="border-t">
                            <td className="px-4 py-3 text-sm text-gray-800 whitespace-nowrap">
                                {item.name}
                            </td>
                            <td className="px-4 py-3 text-sm text-gray-800 whitespace-nowrap">
                                {item.size ? `${(item.size / 1024).toFixed(2)} KB` : "N/A"}
                            </td>
                            <td className="px-4 py-3 text-sm text-gray-800 whitespace-nowrap">
                                {new Date(item.lastModifiedDateTime).toLocaleString()}
                            </td>
                            <td className="px-4 py-3 text-sm text-gray-800 whitespace-nowrap">
                                {item.createdBy?.user?.displayName || "Unknown"}
                            </td>
                            <td className="px-4 py-3 text-sm text-gray-800 whitespace-nowrap">
                                <button
                                    onClick={() => handleDownload(item["@microsoft.graph.downloadUrl"], item.name)}
                                    className="text-blue-500 hover:text-blue-700"
                                    title="Download file"
                                >
                                    Download
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ChildrenTable;