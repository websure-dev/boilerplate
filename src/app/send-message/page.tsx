"use client";

import { useState } from "react";

export default function SendMessage() {
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("/api/send-to-teams", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("Message sent successfully!");
        setMessage("");
      } else {
        setStatus(`Error: ${data.error}`);
      }
    } catch (error) {
      console.error(error);
      setStatus("Failed to send message");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Send Message to Teams</h1>
      <form onSubmit={sendMessage} className="space-y-4">
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mb-2 min-h-[100px text-black"
            placeholder="Enter your message for Teams"
            rows={4}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
        >
          Send to Teams
        </button>
      </form>
      {status && (
        <p
          className={`mt-4 p-2 rounded ${
            status.includes("Error")
              ? "bg-red-100 text-red-800"
              : "bg-green-100 text-green-800"
          }`}
        >
          {status}
        </p>
      )}
    </div>
  );
}
