import React, { useState, useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const CertificateWork = () => {
  const [formData, setFormData] = useState({
    institutionName: '',
    certificationStatement: '',
    studentName: '',
    programStatement: '',
    dateOfIssue: '',
    ceoSignature: null,
    certBarcode: null,
    mgrSignature: null,
    logo: null,
  });

  const certificateRef = useRef(null); // Reference for capturing the certificate preview

  // Handle text input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle file input changes
  const handleFileChange = (e) => {
    const { name } = e.target;
    const file = URL.createObjectURL(e.target.files[0]);
    setFormData({ ...formData, [name]: file });
  };

  // Generate the certificate preview
  const handlePreview = () => {
    window.scrollTo(0, 0); // Scroll to top when previewing
  };

  // Download the certificate as a PDF
  const handleDownload = () => {
    const input = certificateRef.current;
    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('landscape', 'mm', 'a4');
      pdf.addImage(imgData, 'PNG', 0, 0, 297, 210); 
      pdf.save('certificate.pdf');
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-10 bg-white shadow-lg rounded-lg">
      <h2 className="text-center text-2xl font-bold text-orange-500 mb-8">
        CERTIFICATE APP DESIGN
      </h2>

      {/* Form Fields */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block mb-2 text-sm">Upload Logo</label>
          <input
            type="file"
            name="logo"
            className="block w-full border p-2 rounded"
            onChange={handleFileChange}
          />
        </div>

        <div>
          <label className="block mb-2 text-sm">#</label>
          <input
            type="text"
            className="block w-full border p-2 rounded"
            value="1"
            readOnly
          />
        </div>
      </div>

      <div className="mb-4">
        <input
          type="text"
          name="institutionName"
          placeholder="Enter your name of institution"
          className="block w-full border p-2 rounded"
          value={formData.institutionName}
          onChange={handleInputChange}
        />
      </div>

      <div className="mb-4">
        <input
          type="text"
          name="certificationStatement"
          placeholder="Certification statement"
          className="block w-full border p-2 rounded"
          value={formData.certificationStatement}
          onChange={handleInputChange}
        />
      </div>

      <div className="mb-4">
        <input
          type="text"
          name="studentName"
          placeholder="Name of student"
          className="block w-full border p-2 rounded"
          value={formData.studentName}
          onChange={handleInputChange}
        />
      </div>

      <div className="mb-4">
        <input
          type="text"
          name="programStatement"
          placeholder="Statement of the programme/ Course of study"
          className="block w-full border p-2 rounded"
          value={formData.programStatement}
          onChange={handleInputChange}
        />
      </div>

      <div className="mb-4">
        <input
          type="date"
          name="dateOfIssue"
          placeholder="Date of issue"
          className="block w-full border p-2 rounded"
          value={formData.dateOfIssue}
          onChange={handleInputChange}
        />
      </div>

      {/* Signature and Barcode Uploads */}
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div>
          <label className="block mb-2 text-sm">CEO Signature</label>
          <input
            type="file"
            name="ceoSignature"
            className="block w-full border p-2 rounded"
            onChange={handleFileChange}
          />
        </div>

        <div>
          <label className="block mb-2 text-sm">Cert No./Barcode</label>
          <input
            type="file"
            name="certBarcode"
            className="block w-full border p-2 rounded"
            onChange={handleFileChange}
          />
        </div>

        <div>
          <label className="block mb-2 text-sm">Mgr. Signature</label>
          <input
            type="file"
            name="mgrSignature"
            className="block w-full border p-2 rounded"
            onChange={handleFileChange}
          />
        </div>
      </div>

      {/* Preview and Download Buttons */}
      <div className="flex justify-between mt-6">
        <button
          className="px-4 py-2 bg-gray-300 text-black rounded"
          onClick={handlePreview}
        >
          Preview
        </button>
        <button
          className="px-4 py-2 bg-orange-500 text-white rounded"
          onClick={handleDownload}
        >
          Download
        </button>
      </div>

      {/* Certificate Preview */}
      <div
        ref={certificateRef}
        className="mt-8 p-8 border border-gray-300 rounded-lg bg-gray-100"
      >
        <div className="text-center">
          {formData.logo && (
            <img
              src={formData.logo}
              alt="Logo"
              className="mx-auto mb-4 w-24 h-24"
            />
          )}
          <h1 className="text-2xl font-bold">Certificate of Completion</h1>
          <p>This is to certify that</p>
          <h2 className="text-xl font-semibold my-4">{formData.studentName}</h2>
          <p>has successfully completed the course</p>
          <h3 className="text-lg my-2">{formData.programStatement}</h3>
          <p>on</p>
          <h4>{formData.dateOfIssue}</h4>

          {/* Signatures */}
          <div className="grid grid-cols-3 gap-4 mt-8">
            {formData.ceoSignature && (
              <div className="text-center">
                <img
                  src={formData.ceoSignature}
                  alt="CEO Signature"
                  className="w-24 h-16 mx-auto"
                />
                <p>CEO Signature</p>
              </div>
            )}

            {formData.certBarcode && (
              <div className="text-center">
                <img
                  src={formData.certBarcode}
                  alt="Cert Barcode"
                  className="w-24 h-16 mx-auto"
                />
                <p>Cert No./Barcode</p>
              </div>
            )}

            {formData.mgrSignature && (
              <div className="text-center">
                <img
                  src={formData.mgrSignature}
                  alt="Mgr Signature"
                  className="w-24 h-16 mx-auto"
                />
                <p>Mgr. Signature</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateWork;
