"use client"
import CardMissingPerson from "@/component/card-missing-person";
import Image from "next/image";
import React from "react";
import { Search } from "lucide-react";
import { useState } from "react";
import Link from "next/link";


const missingPersons = [
  {
    id: 1,
    name: "Rahul Sharma",
    age: 22,
    gender: "male",
    lastSeenDate: "2026-03-10",
    lastSeenLocation: "Delhi रेलवे स्टेशन",
    contactName: "Amit Sharma",
    contactNumber: "9876543210",
    imageUrl: "/person-7.png"
  },
  {
    id: 2,
    name: "Priya Verma",
    age: 19,
    gender: "female",
    lastSeenDate: "2026-02-28",
    lastSeenLocation: "Lucknow बस स्टैंड",
    contactName: "Suresh Verma",
    contactNumber: "9123456780",
    imageUrl: "/person-1.png"
  },
  {
    id: 3,
    name: "Ankit Singh",
    age: 27,
    gender: "male",
    lastSeenDate: "2026-03-15",
    lastSeenLocation: "Noida सेक्टर 62",
    contactName: "Ravi Singh",
    contactNumber: "9988776655",
    imageUrl: "/person-3.png"
  },
];

export default function Home() {
  const [query, setQuery] = useState("");
  return (

    <>
      <div className="min-h-screen bg-gray-50 mt-20">
        {/* HERO BANNER */}
        <section className="relative h-[70vh] flex items-center justify-center bg-black text-white">
          <div className="absolute inset-0 opacity-60">
            <Image
              src="/home-banner.png"
              alt="Missing Person Banner"
              fill
              className="object-cover"
            />
          </div>

          <div className="relative z-10 text-center px-4">
            {/* <h1 className="text-4xl text-blue-500 md:text-6xl font-bold">
            Help Find Missing People
          </h1>
          <p className="mt-4 text-lg text-gray-200">
            Search, report, and support missing person cases
          </p>
           */}
            <Link href="/report-missing">
              <button className="mt-6 bg-red-600 hover:bg-red-700 px-6 py-3 rounded-xl font-semibold cursor-pointer">
                Report Missing Person
              </button>
            </Link>
          </div>
        </section>

        {/* STATS */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto mt-10 px-4 text-center">
          {[
            { label: "Missing Cases", value: "1,245" },
            { label: "Found Safe", value: "842" },
            { label: "Active Reports", value: "98" },
            { label: "Volunteers", value: "5,430" },
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow">
              <h2 className="text-2xl font-bold text-red-600">
                {item.value}
              </h2>
              <p className="text-gray-600 mt-1">{item.label}</p>
            </div>
          ))}
        </section>

        {/* RECENT MISSING */}
        <section className="max-w-6xl mx-auto mt-12 px-4">
          <h2 className="text-2xl font-bold mb-4">Recently Missing</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {missingPersons.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow overflow-hidden"
              >
                <div className="h-68 bg-gray-200 relative">
                  <Image
                    src={item.imageUrl || `/person-${item.id}.png`}
                    alt={item.name || "Missing Person"}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-xl font-bold">{item.name || "Sunil"}</h2>
                  <p><span className="font-bold">Age:</span> {item.age || "N/A"}</p>
                  <p><span className="font-bold">Gender:</span> {item.gender || "N/A"}</p>
                  <p><span className="font-bold">Last Seen:</span> {item.lastSeenLocation || "N/A"}</p>
                  <p><span className="font-bold">Contact Name:</span> {item.contactName || "N/A"}</p>
                  <p><span className="font-bold">Contact Number:</span> {item.contactNumber || "N/A"}</p>
                  {/* <button className="mt-3 text-blue-600 font-medium">
                    View Details
                  </button> */}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* URGENT CASES */}
        <section className="max-w-6xl mx-auto mt-12 px-4">
          <h2 className="text-2xl font-bold mb-4 text-red-600">
            Urgent Cases 🔴
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[1, 2].map((item) => (
              <div key={item} className="bg-white border-l-4 border-red-600 p-4 rounded-xl shadow">
                <h3 className="font-semibold">Missing Child Alert</h3>
                <p className="text-sm text-gray-600">Last seen 2 hours ago</p>
                <button className="mt-2 text-red-600 font-semibold">
                  Help Share
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="max-w-6xl mx-auto mt-12 px-4 text-center">
          <h2 className="text-2xl font-bold mb-6">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              "Report Missing Person",
              "Verification",
              "Publish Case",
              "Community Support",
            ].map((step, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow">
                <div className="text-red-600 text-2xl font-bold">{i + 1}</div>
                <p className="mt-2 font-medium">{step}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SUCCESS STORIES */}
        <section className="max-w-6xl mx-auto mt-12 px-4 mb-12">
          <h2 className="text-2xl font-bold mb-4">Success Stories 🎉</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[1, 2].map((item) => (
              <div key={item} className="bg-white p-5 rounded-xl shadow">
                <h3 className="font-semibold">Found Safe After 10 Days</h3>
                <p className="text-sm text-gray-600 mt-2">
                  A missing teenager was reunited with family thanks to community
                  help.
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>

  );
}
