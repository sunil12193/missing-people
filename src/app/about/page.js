import React from "react";

const About = () => {
    return (
        <div className="min-h-screen px-6 md:px-20 py-12 bg-gray-50 mt-20">

            {/* Header */}
            <h1 className="text-4xl font-bold text-center mb-6">
                About Us
            </h1>

            <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
                We are dedicated to helping families find their missing loved ones
                by providing a simple, fast, and reliable platform to report and
                search missing persons.
            </p>

            {/* Mission Section */}
            <div className="grid md:grid-cols-2 gap-10 items-center">

                <div className="bg-white p-6 rounded-2xl shadow-md">
                    <h2 className="text-2xl font-semibold mb-3">🎯 Our Mission</h2>
                    <p className="text-gray-600">
                        Our mission is to create a centralized system where anyone can
                        report missing persons and help spread information quickly across
                        communities. Every second matters when someone is missing.
                    </p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-md">
                    <h2 className="text-2xl font-semibold mb-3">🌍 Our Vision</h2>
                    <p className="text-gray-600">
                        We aim to build a safer society where technology helps reunite
                        families faster and reduces the stress of searching for missing
                        people.
                    </p>
                </div>

            </div>

            {/* How it works */}
            <div className="mt-12 bg-white p-8 rounded-2xl shadow-md">
                <h2 className="text-2xl font-semibold mb-4 text-center">
                    ⚙️ How It Works
                </h2>

                <div className="grid md:grid-cols-3 gap-6 text-center">

                    <div>
                        <h3 className="font-bold text-lg">1. Report</h3>
                        <p className="text-gray-600">
                            Add details of the missing person including name, age, and last seen location.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg">2. Share</h3>
                        <p className="text-gray-600">
                            Information is shared so more people can help in the search.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg">3. Reunite</h3>
                        <p className="text-gray-600">
                            Our goal is to help families reconnect as quickly as possible.
                        </p>
                    </div>

                </div>
            </div>

            {/* Footer message */}
            <div className="text-center mt-12 text-gray-600">
                <p>
                    Together, we can make a difference ❤️
                </p>
            </div>

        </div>
    );
}

export default About;