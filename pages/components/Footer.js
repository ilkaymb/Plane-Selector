import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#146C94] py-12 w-full text-white text-center text-lg">
      <Link
        href="https://ilkay-mehmet-bora-cv-website.vercel.app/"
        className="text-white underline font-bold"
      >
        İlkay Mehmet Bora
      </Link>{" "}
      Tarafından Yapılmıştır
    </footer>
  );
}
