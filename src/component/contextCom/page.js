import React, { createContext, useState, useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const MyContextData = createContext();

export default function ContextData({ children }) {
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

  const handleIconClick = (inputRef) => {
    inputRef.current.click();
  };

  const handleChangeFile = (e) => {
    const { name } = e.target;
    const file = e.target.files[0];

    if (file) {
      const fileUrl = URL.createObjectURL(file);
      setFormData((prevData) => ({ ...prevData, [name]: fileUrl }));
    }
  };

  const handleChangeText = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
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





  const handleDownloadToPrev =()=>{
    alert('please preview the certificate first')
  }
  const Values = {
    handleDownload,
    handleDownloadToPrev,
    currentRef,
    formData,
    setFormData,
    handleChangeText,
    handleChangeFile,
    handleIconClick,
    logoInputRef,
    ceoSignatureInputRef,
    certBarcodeInputRef,
    mgrSignatureInputRef,
  };

  return (
    <MyContextData.Provider value={Values}>{children}</MyContextData.Provider>
  );
}

export { MyContextData };
