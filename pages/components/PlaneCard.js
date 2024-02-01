import Image from "next/image";
import React from "react";

export default function PlaneCard({ flight }) {
  if (!flight) {
    return <div>Uçuş bilgileri yükleniyor...</div>;
  }

  return (
    <li className="border-2 bg-[#fffc] hover:bg-white  border-gray-200  mt-8 flex flex-col md:flex-row items-center bg-white rounded-lg hover:bg-white hover:shadow-md hover:shadow-[#fff3] transition-shadow hover:scale-[1.03] transform-gpu">
      <div className="mb-4 md:mb-0 md:mr-8 p-4 flex flex-col justify-between border-b md:border-b-0 md:border-r-2 h-full border-gray-300">
        <div className="text-2xl font-semibold text-blue-500 w-full md:w-48 text-center md:text-left ">
          {flight.airline}
        </div>
        <div className="text-xl font-semibold text-green-500 w-full md:w-48 text-center md:text-left">
          ${flight.price}
        </div>
      </div>
      <div className="flex flex-grow flex-col md:flex-row items-center">
        <div className="flex-1 mb-2 md:mb-0 p-4">
          <div className="text-xl font-semibold text-center md:text-left">
            <span className="text-gray-600">Kalkış:</span> {flight.departure}
          </div>
          <div className="text-md text-gray-500 text-center md:text-left">
            Tarih: {new Date(flight.departureTime).toLocaleDateString()}
          </div>
          <div className="text-md text-gray-500 text-center md:text-left">
            Saat: {new Date(flight.departureTime).toLocaleTimeString()}
          </div>
        </div>
        <div className="flex-1 p-4">
          <div className="text-xl font-semibold text-center md:text-left">
            <span className="text-gray-600">Varış:</span> {flight.arrival}
          </div>
          <div className="text-md text-gray-500 text-center md:text-left">
            Tarih: {new Date(flight.arrivalTime).toLocaleDateString()}
          </div>
          <div className="text-md  text-gray-500 text-center md:text-left">
            Saat: {new Date(flight.arrivalTime).toLocaleTimeString()}
          </div>{" "}
        </div>{" "}
        <div className=" relative w-full  h-full   lg:w-64 lg:h-64 md:w-40 md:h-40">
          <Image
            className="md:rounded-r-lg   "
            src={flight.arrivalImage}
            alt="Uçak Resmi"
            fill="true"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
      </div>
    </li>
  );
}
