import React from "react";
import Image from "next/image";


const CardMissingPerson = ({ name, age, gender, lastSeen, imageUrl, contactName, contactNumber }) => {

    return (
        <div className="bg-white overflow-hidden rounded-xl shadow-lg ">
            <div
              className=" "
            >

            <div className="relative w-full h-68 bg-gray-200">
                <Image
                    src={imageUrl || "/user.jpeg"}
                    alt={name || "Missing Person"}
                    fill
                    className="object-cover"
                />
            </div>
            <div className="p-4">
                <h2 className="text-xl font-bold">{name || "Sunil"}</h2>
                <p><span className="font-bold">Age:</span> {age || "N/A"}</p>
                <p><span className="font-bold">Gender:</span> {gender || "N/A"}</p>
                <p><span className="font-bold">Last Seen:</span> {lastSeen || "N/A"}</p>
                <p><span className="font-bold">Contact Name:</span> {contactName || "N/A"}</p>
                <p><span className="font-bold">Contact Number:</span> {contactNumber || "N/A"}</p>
                {/* <button className="mt-3 text-blue-600 font-medium">
                    View Details
                </button> */}
            </div>
            </div>
        </div>
    );
};

export default CardMissingPerson;