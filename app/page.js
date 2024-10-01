"use client";

import { useState } from "react";
import ChildrenTable from "./components/ChildrenTable";
import Login from "./components/Login";

export default function Home() {
  const [accessToken, setAccessToken] = useState(null);
  const [sharedFolderUrl, setSharedFolderUrl] = useState("");
  const [submittedUrl, setSubmittedUrl] = useState("");

  const handleLoginSuccess = (token) => {
    setAccessToken(token);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedUrl(sharedFolderUrl);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">OneDrive Shared Folder Viewer</h1>

      {!accessToken ? (
        <Login onSuccess={handleLoginSuccess} setAccessToken={setAccessToken} />
      ) : (
        <>
          <form onSubmit={handleSubmit} className="mb-6 w-full max-w-md flex flex-col items-center">
            <input
              type="text"
              className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter OneDrive Shared Folder URL"
              value={sharedFolderUrl}
              onChange={(e) => setSharedFolderUrl(e.target.value)}
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Submit URL
            </button>
          </form>

          {submittedUrl && (
            <ChildrenTable accessToken={accessToken} sharedFolderUrl={submittedUrl} />
          )}
        </>
      )}
    </div>
  );
}

