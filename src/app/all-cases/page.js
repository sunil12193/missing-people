"use client"
import CardMissingPerson from "@/component/card-missing-person";
import React from "react";
import { useState } from "react";


const missingPersons = [
  {
    id: 1,
    name: "Rahul Sharma",
    age: 22,
    gender: "male",
    lastSeenDate: "2026-03-10",
    lastSeenLocation: "Delhi रेलवे स्टेशन",
    contactName: "Amit Sharma",
    contactNumber: "9876543210"
  },
  {
    id: 2,
    name: "Priya Verma",
    age: 19,
    gender: "female",
    lastSeenDate: "2026-02-28",
    lastSeenLocation: "Lucknow बस स्टैंड",
    contactName: "Suresh Verma",
    contactNumber: "9123456780"
  },
  {
    id: 3,
    name: "Ankit Singh",
    age: 27,
    gender: "male",
    lastSeenDate: "2026-03-15",
    lastSeenLocation: "Noida सेक्टर 62",
    contactName: "Ravi Singh",
    contactNumber: "9988776655"
  },
  {
    id: 4,
    name: "Neha Gupta",
    age: 24,
    gender: "female",
    lastSeenDate: "2026-01-20",
    lastSeenLocation: "Kanpur मार्केट",
    contactName: "Pooja Gupta",
    contactNumber: "9090909090"
  },
  {
    id: 5,
    name: "Rohit Kumar",
    age: 30,
    gender: "male",
    lastSeenDate: "2026-03-01",
    lastSeenLocation: "Patna जंक्शन",
    contactName: "Sunil Kumar",
    contactNumber: "8765432109"
  },
  {
    id: 6,
    name: "Sneha Mishra",
    age: 21,
    gender: "female",
    lastSeenDate: "2026-02-10",
    lastSeenLocation: "Varanasi घाट",
    contactName: "Rajesh Mishra",
    contactNumber: "9012345678"
  },
  {
    id: 7,
    name: "Vikas Yadav",
    age: 26,
    gender: "male",
    lastSeenDate: "2026-03-18",
    lastSeenLocation: "Ghaziabad मॉल",
    contactName: "Mahesh Yadav",
    contactNumber: "8899776655"
  },
  {
    id: 8,
    name: "Pooja Sharma",
    age: 23,
    gender: "female",
    lastSeenDate: "2026-01-30",
    lastSeenLocation: "Jaipur बाजार",
    contactName: "Deepak Sharma",
    contactNumber: "9871234560"
  },
  {
    id: 9,
    name: "Arjun Patel",
    age: 28,
    gender: "male",
    lastSeenDate: "2026-02-25",
    lastSeenLocation: "Ahmedabad स्टेशन",
    contactName: "Kiran Patel",
    contactNumber: "9988123456"
  },
  {
    id: 10,
    name: "Kavita Joshi",
    age: 35,
    gender: "female",
    lastSeenDate: "2026-03-05",
    lastSeenLocation: "Dehradun बस स्टैंड",
    contactName: "Ramesh Joshi",
    contactNumber: "9098123456"
  },
  {
    id: 11,
    name: "Manoj Tiwari",
    age: 40,
    gender: "male",
    lastSeenDate: "2026-02-15",
    lastSeenLocation: "Bhopal मार्केट",
    contactName: "Sanjay Tiwari",
    contactNumber: "8765012345"
  },
  {
    id: 12,
    name: "Ritika Kapoor",
    age: 18,
    gender: "female",
    lastSeenDate: "2026-03-12",
    lastSeenLocation: "Chandigarh सेक्टर 17",
    contactName: "Anil Kapoor",
    contactNumber: "9988771100"
  },
  {
    id: 13,
    name: "Deepak Chauhan",
    age: 32,
    gender: "male",
    lastSeenDate: "2026-01-25",
    lastSeenLocation: "Meerut रोड",
    contactName: "Vijay Chauhan",
    contactNumber: "9011223344"
  },
  {
    id: 14,
    name: "Anjali Singh",
    age: 25,
    gender: "female",
    lastSeenDate: "2026-02-05",
    lastSeenLocation: "Prayagraj संगम",
    contactName: "Rahul Singh",
    contactNumber: "8899001122"
  },
  {
    id: 15,
    name: "Sandeep Gupta",
    age: 29,
    gender: "male",
    lastSeenDate: "2026-03-20",
    lastSeenLocation: "Indore रेलवे स्टेशन",
    contactName: "Ashok Gupta",
    contactNumber: "7788996655"
  }
];

const AllCases = () => {
  const [search, setSearch] = useState("");


  const filtered = missingPersons.filter((person) =>
    person.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen p-6 mt-22 mr-20 ml-20 rounded-lg">
      <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 rounded-lg gap-6 shadow-md">
      <h1 className="text-3xl text-red-700 font-bold mb-4">All Cases</h1>
        <input
          type="text"
          placeholder="Search Missing Persons..."
          className="border px-4 py-2 w-80 rounded-2xl"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <p className="mt-4 text-red-400">List of all missing person cases will be displayed here.</p>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {
          filtered.map((person) => (
            <CardMissingPerson
              key={person.id}
              name={person.name}
              age={person.age}
              gender={person.gender}
              lastSeen={`${person.lastSeenDate} at ${person.lastSeenLocation}`}
              imageUrl="/user.jpeg"
              contactName={person.contactName}
              contactNumber={person.contactNumber}
            />
          ))
        }
      </div>
    </div>
  );
}

export default AllCases;