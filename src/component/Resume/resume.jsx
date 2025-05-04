import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import resumePdf from "../../assets/resume.pdf"; // Ensure this path is correct
import { AiOutlineDownload } from "react-icons/ai";

// Set the worker path correctly
pdfjs.GlobalWorkerOptions.workerSrc =
  "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.4.456/pdf.worker.min.js";

const Resume = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-purple-50 flex flex-col items-center py-10 px-4">
      <h1 className="mt-4 md:mt-8 text-xl md:text-3xl font-bold mb-2 md:mb-6 text-center">My Resume</h1>

      <a
        href={resumePdf}
        download="Saurabh Maurya Resume.pdf" // This ensures the file will be downloaded directly
        className="mb-4 md:mb-6 bg-blue-600 hover:bg-blue-700 text-sm md:text-base text-white px-5 py-2 rounded flex items-center gap-2"
      >
        <AiOutlineDownload size={20} />
        Download Resume
      </a>

      <div className="bg-white shadow-lg rounded-md w-full max-w-4xl">
        <Document
          file={resumePdf}
          onLoadError={(error) => console.error("PDF load error:", error)}
          className="flex justify-center"
        >
          <Page pageNumber={1} scale={width > 768 ? 1.5 : 0.6} />
        </Document>
      </div>

      <a
        href={resumePdf}
        download="Saurabh Maurya Resume.pdf" // This ensures the file will be downloaded directly
        className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded flex items-center gap-2"
      >
        <AiOutlineDownload size={20} />
        Download Resume
      </a>
    </div>
  );
};

export default Resume;
