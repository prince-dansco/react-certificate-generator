import React, { useState, useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

import InputComp from "../inputComp/page";

export default function CertificateGen(props) {
  const [formData, setFormData] = useState({
    institutionName: "",
    certificationStatement: "",
    studentName: "",
    programStatement: "",
    dateOfIssue: "",
    trainName: "",
    ceoSignature: null,
    certBarcode: null,
    mgrSignature: null,
    logo: null,
  });

  const logoInputRef = useRef(null);
  const ceoSignatureInputRef = useRef(null);
  const certBarcodeInputRef = useRef(null);
  const mgrSignatureInputRef = useRef(null);
  const currentRef = useRef(null);

  // Programmatically trigger file input on icon click
  const handleIconClick = (inputRef) => {
    inputRef.current.click();
  };

  // Handling file change and updating formData
  const handleChangeFile = (e) => {
    const { name } = e.target;
    const file = URL.createObjectURL(e.target.files[0]);
    setFormData({ ...formData, [name]: file });
  };

  const handleChangeText = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDownload = () => {
    const input = currentRef.current;

    if (!input) {
      console.error("No element found for PDF generation");
      return;
    }
    const {
      institutionName,
      certificationStatement,
      studentName,
      programStatement,
      dateOfIssue,
      ceoSignature,
      certBarcode,
      mgrSignature,
      logo,
    } = formData;

    if (
      !institutionName ||
      !certificationStatement ||
      !studentName ||
      !programStatement ||
      !dateOfIssue
    ) {
      alert("Please fill all the required text fields.");
      return;
    }

    if (!logo || !ceoSignature || !certBarcode || !mgrSignature) {
      alert("Please upload all the required files.");
      return;
    }

    html2canvas(input, { scale: 2 })
      .then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("landscape", "mm", "a4");
        pdf.addImage(imgData, "PNG", 0, 0, 297, 210);
        pdf.save("certificate.pdf");
        setFormData({
          institutionName: "",
          certificationStatement: "",
          studentName: "",
          programStatement: "",
          dateOfIssue: "",
          ceoSignature: null,
          certBarcode: null,
          mgrSignature: null,
          logo: null,
        });
      })
      .catch((error) => {
        console.error("Error generating PDF: ", error);
      });
  };
  return (
    <div className="">
      <InputComp
        handleDownload={handleDownload}
        currentRef={currentRef}
        formData={formData}
        setFormData={setFormData}
        handleChangeText={handleChangeText}
        handleChangeFile={handleChangeFile}
        handleIconClick={handleIconClick}
        logoInputRef={logoInputRef}
        ceoSignatureInputRef={ceoSignatureInputRef}
        certBarcodeInputRef={certBarcodeInputRef}
        mgrSignatureInputRef={mgrSignatureInputRef}
      />
    </div>
  );
}
