"use client";

import { useState } from "react";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [status, setStatus] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus("success");
                setFormData({ name: "", email: "", message: "" });
            } else {
                setStatus("error");
            }
        } catch (error) {
            setStatus("error");
        }
    };

    return (
        <section id="contact" className="bg-black text-white min-h-screen flex flex-col items-center justify-center px-6 sm:px-12 py-12">
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-8 text-center">
                Contact
            </h1>
            <form
                onSubmit={handleSubmit}
                className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md"
            >
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-2 rounded-md bg-gray-700 border border-gray-600 text-white"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-2 rounded-md bg-gray-700 border border-gray-600 text-white"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="5"
                        className="w-full p-2 rounded-md bg-gray-700 border border-gray-600 text-white"
                        required
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full bg-yellow-500 text-black py-2 rounded-md hover:bg-yellow-600 transition"
                >
                    Send
                </button>
                {status === "loading" && <p className="text-yellow-500 mt-4">Sending...</p>}
                {status === "success" && <p className="text-green-500 mt-4">Message sent!</p>}
                {status === "error" && <p className="text-red-500 mt-4">
                    Error sending message.</p>}
            </form>
        </section>
    );
}
