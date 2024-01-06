import { Inter } from "next/font/google";
import { useState, useEffect } from "react";

import SearchIcon from "@rsuite/icons/Search";
import {
  Input,
  InputGroup,
  DatePicker,
  Pagination,
  SelectPicker,
} from "rsuite";

import PlaneCard from "./components/PlaneCard";
import Footer from "./components/Footer";
import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [departureSearch, setDepartureSearch] = useState("");
  const [arrivalSearch, setArrivalSearch] = useState("");
  const [filteredFlights, setFilteredFlights] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [limit, setLimit] = useState(5);
  const startIndex = (activePage - 1) * limit;
  const endIndex = startIndex + limit;
  const currentFlights = filteredFlights.slice(startIndex, endIndex);
  const [flights, setFlights] = useState([]);
  const selectionData = ["Hava Alanı", "Geliş Şehri", "Gidiş Şehri"].map(
    (item) => ({ label: item, value: item })
  );
  const [isOneWay, setIsOneWay] = useState(false);

  const [selectedSearchType, setSelectedSearchType] = useState(
    selectionData[0].value
  );

  useEffect(() => {
    const fetchFlights = async () => {
      const response = await fetch("/api/flights");
      const data = await response.json();
      setFlights(data);
      setFilteredFlights(data);
    };

    fetchFlights();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();

    const isWithinDateRange = (flight) => {
      if (!flight || !flight.departureTime || !flight.arrivalTime) {
        return false;
      }
      const departureTime = new Date(flight.departureTime);
      const arrivalTime = new Date(flight.arrivalTime);

      const startDateTime = startDate ? new Date(startDate) : null;
      const endDateTime = endDate ? new Date(endDate) : null;

      const departureMatches =
        !startDateTime || matchesDate(departureTime, startDateTime);
      const arrivalMatches =
        !endDateTime || matchesDate(arrivalTime, endDateTime);

      return departureMatches && arrivalMatches;
    };

    const matchesDate = (date1, date2) => {
      return (
        date1.getFullYear() === date2.getFullYear() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getDate() === date2.getDate()
      );
    };

    const matchesDepartureSearch = (flight) => {
      if (!departureSearch) return true;
      const flightDepartureDate = new Date(flight.departureTime);
      const searchDate = new Date(departureSearch);
      return matchesDate(flightDepartureDate, searchDate);
    };

    const matchesArrivalSearch = (flight) => {
      if (!arrivalSearch) return true;
      const flightArrivalDate = new Date(flight.arrivalTime);
      const searchDate = new Date(arrivalSearch);
      return matchesDate(flightArrivalDate, searchDate);
    };

    const matchesSearch = (flight) => {
      const searchTermLower = searchTerm.toLowerCase();
      if (!flight.airline || !flight.departure || !flight.arrival) return false;

      switch (selectedSearchType) {
        case "Hava Alanı":
          return (
            searchTerm === "" ||
            flight.airline.toLowerCase().includes(searchTermLower)
          );
        case "Geliş Şehri":
          return (
            searchTerm === "" ||
            flight.departure.toLowerCase().includes(searchTermLower)
          );
        case "Gidiş Şehri":
          return (
            searchTerm === "" ||
            flight.arrival.toLowerCase().includes(searchTermLower)
          );
        default:
          return false;
      }
    };
    const filtered = flights.filter(
      (flight) =>
        isWithinDateRange(flight) &&
        matchesDepartureSearch(flight) &&
        matchesArrivalSearch(flight) &&
        matchesSearch(flight)
    );

    setFilteredFlights(filtered);
  };

  return (
    <main
      className={` flex min-h-screen flex-col items-center justify-start ${inter.className}`}
    >
      <Header />
      <section id="content">
        <div
          className="container mx-auto p-4 lg:px-48 mt-24"
          style={{ minHeight: "100vh" }}
        >
          <div className="w-full border-2 bg-white border-gray-200 py-6 px-4 border-xl rounded-xl">
            <form
              onSubmit={handleSearch}
              className="flex flex-col md:flex-row items-start gap-4"
            >
              <div className="flex-grow w-full lg:w-1/4">
                <div className="flex flex-col">
                  <DatePicker
                    className="w-full bg-white mb-4"
                    size="lg"
                    format="MM/dd/yyyy"
                    style={{ borderRadius: "6px" }}
                    onChange={(value) => setStartDate(value)}
                  />
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="one-way"
                      className="text-blue-600 border-gray-300 focus:ring-blue-500 text-xl"
                      checked={isOneWay}
                      onChange={(e) => setIsOneWay(e.target.checked)}
                    />
                    <label
                      htmlFor="one-way"
                      className="ml-2 text-sm font-medium text-gray-900"
                    >
                      Sadece Gidiş
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex-grow w-full lg:w-1/4">
                <DatePicker
                  size="lg"
                  format="MM/dd/yyyy"
                  className="bg-white w-full"
                  style={{ borderRadius: "6px" }}
                  onChange={(value) => setEndDate(value)}
                  disabled={isOneWay}
                />
              </div>

              <div className="flex-grow w-full">
                <InputGroup inside>
                  <Input
                    size="lg"
                    placeholder="Arama yapın"
                    style={{
                      backgroundColor: "white",
                      borderRadius: "6px 0 0 6px",
                    }}
                    onChange={(value) => setSearchTerm(value)}
                  />
                  <InputGroup.Addon
                    style={{
                      backgroundColor: "white",
                      borderRadius: "0 6px 6px 0",
                    }}
                  >
                    <SearchIcon />
                  </InputGroup.Addon>
                </InputGroup>
              </div>
              <div className="flex-grow w-full lg:w-2/4">
                <SelectPicker
                  placeholder="Aramak İstediğiniz Yeri Seçin"
                  className="w-full "
                  size="lg"
                  data={selectionData}
                  defaultValue={selectionData[0].value}
                  onChange={(value) => setSelectedSearchType(value)}
                  disabledItemValues={isOneWay ? ["Geliş Şehri"] : []}
                />
              </div>
              <button
                className="bg-blue-500 text-white px-4 py-2 border-sm rounded-md self-stretch md:self-auto"
                type="submit"
              >
                Ara
              </button>
            </form>
          </div>

          <div className="mt-6">
            <h2 className="text-2xl md:text-3xl font-bold  uppercase  decoration-blue-300 decoration-2 underline-offset-4 mb-5">
              Uçuş Sonuçları
            </h2>{" "}
            <ul>
              {currentFlights.map((flight, index) => (
                <PlaneCard flight={flight} key={index} />
              ))}
            </ul>
            {currentFlights.length === 0 && (
              <div className="text-center text-2xl font-bold text-red-500">
                Uçuş bulunamadı
              </div>
            )}
            <Pagination
              size="lg"
              prev={true}
              next={true}
              first={true}
              last={true}
              ellipsis={true}
              boundaryLinks={true}
              total={filteredFlights.length}
              limit={limit}
              maxButtons={5}
              activePage={activePage}
              onChangePage={setActivePage}
              onChangeLimit={setLimit}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "2rem",
              }}
            />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
