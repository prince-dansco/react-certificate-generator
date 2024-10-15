import React, { useContext, useState } from "react";
import { PiArrowFatLineUpBold } from "react-icons/pi";
import { GoHash } from "react-icons/go";
import PreviewUi from "../previewComp/page";
import { useNavigate } from "react-router-dom";
import { MyContextData } from "../contextCom/page";

export default function InputComp() {
  // const [show, setShow] = useState(false);
  const {setFormData,
    formData,
    handleChangeFile,
    handleIconClick,
    logoInputRef,
    ceoSignatureInputRef,
    certBarcodeInputRef,
    mgrSignatureInputRef,
    handleChangeText,
    handleDownloadToPrev} = useContext(MyContextData);

  const navigate = useNavigate();
  const handlePreview = () => {
    const { institutionName, certificationStatement, studentName, programStatement, dateOfIssue } = formData;

    if (institutionName && certificationStatement && studentName && programStatement && dateOfIssue) {
      navigate("/showPrev");
    } else {
      alert("Please fill in all required fields before previewing.");
    }
  };

  return (
    <div>
      <div className="px-2 my-5 mx-auto py-5 shadow-lg p-3 bg-white max-w-[1100px] w-full">
        <h1 className="mt-8 text-center text-orange-500 text-2xl md:text-4xl font-bold">
          CERTIFICATE APP DESIGN
        </h1>
        <div className=" px-4 md:px-10 py-10">
          <div className="">
            {/* Logo upload */}
            <div className="flex items-center justify-between mb-5 md:flex-row flex-col gap-4 md:gap-0">
              <div className="flex">
                <input
                  ref={logoInputRef}
                  type="file"
                  name="logo"
                  className="hidden"
                  onChange={handleChangeFile}
                />
                <label
                  htmlFor="logo"
                  className="px-4 py-3 text-lg border border-gray-300 bg-white cursor-pointer"
                  onClick={() => handleIconClick(logoInputRef)}
                >
                  Upload Logo
                </label>
                <div
                  className="bg-orange-500 p-4 text-white inline-block cursor-pointer"
                  onClick={() => handleIconClick(logoInputRef)}
                >
                  <PiArrowFatLineUpBold size={35} />
                </div>
              </div>

              {/* Number input */}
              <div className="flex mx-5">
                <div className="bg-orange-500 p-4 text-white inline-block">
                  <GoHash size={35} />
                </div>
                <input
                  type="number"
                  name="number"
                  placeholder="1"
                  value="1"
                  onChange={(e) =>
                    setFormData({ ...formData, number: e.target.value })
                  }
                  className="px-4 py-3 text-xl border border-3-gray "
                />
              </div>
            </div>

            {/* Institution name input */}
            <div>
              <input
                type="text"
                name="institutionName"
                placeholder="Enter your name of institution"
                value={formData.institutionName}
                onChange={handleChangeText} // Use this handler for text inputs
                className="w-full border border-gray-300 px-4 py-3"
              />
            </div>

            {/* Certification statement input */}
            <div>
              <input
                type="text"
                name="certificationStatement"
                placeholder="Certification statement"
                value={formData.certificationStatement}
                onChange={handleChangeText} // Use this handler for text inputs
                className="w-full border border-gray-300 px-4 py-3 my-5"
              />
            </div>

            {/* Student name input */}
            <div>
              <input
                type="text"
                name="studentName"
                placeholder="Name of student"
                value={formData.studentName}
                onChange={handleChangeText} // Use this handler for text inputs
                className="w-full border border-gray-300 px-4 py-3 my-2"
              />
            </div>

            {/* Program statement input */}
            <div>
              <input
                type="text"
                name="programStatement"
                placeholder="Statement of the  programme/ Course of study"
                value={formData.programStatement}
                onChange={handleChangeText} // Use this handler for text inputs
                className="w-full border border-gray-300 px-4 py-3 my-2"
              />
            </div>

            {/* Other form inputs */}
            <div>
              <input
                type="date"
                name="dateOfIssue"
                placeholder="Date of issue"
                value={formData.dateOfIssue}
                onChange={handleChangeText} // Use this handler for text inputs
                className="w-full border border-gray-300 px-4 py-3 my-5"
              />
            </div>

            {/* File uploads (CEO signature, Cert Barcode, Mgr signature) */}
            <div className="flex items-center justify-between md:flex-row flex-col gap-4 md:gap-0">
              {/* CEO signature */}
              <div className="flex">
                <input
                  ref={ceoSignatureInputRef}
                  type="file"
                  name="ceoSignature"
                  className="hidden"
                  onChange={handleChangeFile}
                />
                <label
                  htmlFor="ceoSignature"
                  className="px-6 py-3 text-lg border border-gray-300 bg-white cursor-pointer"
                  onClick={() => handleIconClick(ceoSignatureInputRef)}
                >
                  CEO Signature
                </label>
                <div
                  className="bg-orange-500 p-4 text-white inline-block cursor-pointer"
                  onClick={() => handleIconClick(ceoSignatureInputRef)}
                >
                  <PiArrowFatLineUpBold size={35} />
                </div>
              </div>

              {/* Cert Barcode */}
              <div className="flex">
                <div
                  className="bg-orange-500 p-4 text-white inline-block cursor-pointer"
                  onClick={() => handleIconClick(certBarcodeInputRef)}
                >
                  <PiArrowFatLineUpBold size={35} />
                </div>
                <input
                  ref={certBarcodeInputRef}
                  type="file"
                  name="certBarcode"
                  className="hidden"
                  onChange={handleChangeFile}
                />
                <label
                  htmlFor="certBarcode"
                  className="px-6 py-3 text-lg border border-gray-300 bg-white cursor-pointer"
                  onClick={() => handleIconClick(certBarcodeInputRef)}
                >
                  Cert No./Barcode
                </label>
              </div>

              {/* Mgr signature */}
              <div className="flex">
                <input
                  ref={mgrSignatureInputRef}
                  type="file"
                  name="mgrSignature"
                  className="hidden"
                  onChange={handleChangeFile}
                />
                <label
                  htmlFor="mgrSignature"
                  className="px-6 py-3 text-lg border border-gray-300 bg-white cursor-pointer"
                  onClick={() => handleIconClick(mgrSignatureInputRef)}
                >
                  Mgr. Signature
                </label>
                <div
                  className="bg-orange-500 p-4 text-white inline-block cursor-pointer"
                  onClick={() => handleIconClick(mgrSignatureInputRef)}
                >
                  <PiArrowFatLineUpBold size={35} />
                </div>
              </div>
            </div>

            {/* Button for downloading PDF */}
            <div className="mt-5 flex items-center justify-between ">
              <button
                onClick={handlePreview}
                className="rounded-lg px-10 py-3 hover:text-white text-md border border-gray-500 hover:bg-orange-500 text-black"
              >
                Preview
              </button>
              <button
                className="bg-orange-500 rounded-lg px-6 py-2 border-2 text-white text-lg hover:bg-transparent hover:text-black"
                onClick={handleDownloadToPrev}
              >
                Download
              </button>
            </div>
            {/* {show ? (
              <PreviewUi  />
            ) : (
              ""
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
}
