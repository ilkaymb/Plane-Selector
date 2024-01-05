const flights = [
  {
    departure: "İstanbul",
    arrival: "New York",
    departureTime: new Date("2024-01-10T08:00:00"),
    arrivalTime: new Date("2024-01-10T16:00:00"),
    airline: "Turkish Airlines",
  },
  {
    departure: "Ankara",
    arrival: "Berlin",
    departureTime: new Date("2024-01-11T09:30:00"),
    arrivalTime: new Date("2024-01-11T12:45:00"),
    airline: "Lufthansa",
  },
  {
    departure: "London",
    arrival: "Paris",
    departureTime: new Date("2024-01-12T07:20:00"),
    arrivalTime: new Date("2024-01-12T09:00:00"),
    airline: "British Airways",
  },
  {
    departure: "New York",
    arrival: "Toronto",
    departureTime: new Date("2024-01-13T11:00:00"),
    arrivalTime: new Date("2024-01-13T12:30:00"),
    airline: "Air Canada",
  },
  {
    departure: "Tokyo",
    arrival: "Seoul",
    departureTime: new Date("2024-01-14T14:00:00"),
    arrivalTime: new Date("2024-01-14T16:30:00"),
    airline: "ANA",
  },
  {
    departure: "Dubai",
    arrival: "Cairo",
    departureTime: new Date("2024-01-15T18:45:00"),
    arrivalTime: new Date("2024-01-15T21:15:00"),
    airline: "Emirates",
  },
  {
    departure: "Sydney",
    arrival: "Auckland",
    departureTime: new Date("2024-01-16T06:00:00"),
    arrivalTime: new Date("2024-01-16T08:35:00"),
    airline: "Qantas",
  },
  {
    departure: "San Francisco",
    arrival: "Los Angeles",
    departureTime: new Date("2024-01-17T09:15:00"),
    arrivalTime: new Date("2024-01-17T10:45:00"),
    airline: "United Airlines",
  },
  {
    departure: "Singapore",
    arrival: "Bangkok",
    departureTime: new Date("2024-01-18T13:30:00"),
    arrivalTime: new Date("2024-01-18T15:05:00"),
    airline: "Singapore Airlines",
  },
  {
    departure: "Hong Kong",
    arrival: "Shanghai",
    departureTime: new Date("2024-01-19T17:00:00"),
    arrivalTime: new Date("2024-01-19T19:20:00"),
    airline: "Cathay Pacific",
  },
  {
    departure: "Madrid",
    arrival: "Barcelona",
    departureTime: new Date("2024-01-20T08:45:00"),
    arrivalTime: new Date("2024-01-20T10:10:00"),
    airline: "Iberia",
  },
  {
    departure: "Moscow",
    arrival: "Saint Petersburg",
    departureTime: new Date("2024-01-21T12:00:00"),
    arrivalTime: new Date("2024-01-21T13:50:00"),
    airline: "Aeroflot",
  },
  {
    departure: "Miami",
    arrival: "Havana",
    departureTime: new Date("2024-01-22T14:30:00"),
    arrivalTime: new Date("2024-01-22T16:00:00"),
    airline: "American Airlines",
  },
  {
    departure: "São Paulo",
    arrival: "Rio de Janeiro",
    departureTime: new Date("2024-01-23T19:00:00"),
    arrivalTime: new Date("2024-01-23T20:30:00"),
    airline: "LATAM",
  },
  {
    departure: "Mumbai",
    arrival: "Delhi",
    departureTime: new Date("2024-01-24T10:15:00"),
    arrivalTime: new Date("2024-01-24T12:40:00"),
    airline: "Air India",
  },
  {
    departure: "Los Angeles",
    arrival: "Chicago",
    departureTime: new Date("2024-01-25T15:05:00"),
    arrivalTime: new Date("2024-01-25T18:30:00"),
    airline: "Delta Air Lines",
  },
  {
    departure: "Mexico City",
    arrival: "Cancun",
    departureTime: new Date("2024-01-26T11:30:00"),
    arrivalTime: new Date("2024-01-26T14:00:00"),
    airline: "Aeromexico",
  },
  {
    departure: "Beijing",
    arrival: "Guangzhou",
    departureTime: new Date("2024-01-27T13:00:00"),
    arrivalTime: new Date("2024-01-27T16:20:00"),
    airline: "China Southern Airlines",
  },
  {
    departure: "Johannesburg",
    arrival: "Cape Town",
    departureTime: new Date("2024-01-28T07:10:00"),
    arrivalTime: new Date("2024-01-28T09:40:00"),
    airline: "South African Airways",
  },
  {
    departure: "Amsterdam",
    arrival: "London",
    departureTime: new Date("2024-01-29T16:25:00"),
    arrivalTime: new Date("2024-01-29T17:00:00"),
    airline: "KLM",
  },
  {
    departure: "Amsterdam",
    arrival: "London",
    departureTime: new Date("2024-01-10T16:25:00"),
    arrivalTime: new Date("2024-01-12T17:00:00"),
    airline: "KLM",
  },
  ,
  {
    departure: "Amsterdam",
    arrival: "London",
    departureTime: new Date("2024-01-10T16:25:00"),
    arrivalTime: new Date("2024-01-13T17:00:00"),
    airline: "KLM",
  },
];

export default function handler(req, res) {
  res.status(200).json(flights);
}
