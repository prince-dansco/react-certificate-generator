import { useContext } from "react";
import { MyContextData } from "../contextCom/page";
import { useNavigate } from "react-router-dom";

export default function PreviewUi( ) {
  const {formData, currentRef,handleDownload} = useContext(MyContextData);
  const navigator = useNavigate();
  const handlePreview2 =()=>{
    navigator('/')
  }
  return (
    <div>
      {/* for the certificate  */}
      <div
        className="my-16 mx-3 md:mx-[128px] bg-white border-2 px-6 shadow-inner  py-6"
        ref={currentRef}
      >
        <div className="">
          {formData.logo && (
            <div className="flex justify-center">
              <img
                src={formData.logo}
                alt="logo"
                className="mb-4 w-[85.7px] h-[93.34px]"
              />
            </div>
          )}
          <h1
            className="text-center font-bold  text-5xl md:text-8xl text-orange-500"
            // data-html2canvas-ignore
          >
            {formData.institutionName}
          </h1>
          <h3 className="font-semibold text-2xl md:text-4xl text-[#343533] mt-6 text-center">
            This is to certify that
          </h3>

          <div className="text-center my-4">
            <h1 className="font-bold text-3xl md:text-6xl  text-[#53514F] border-b-4 border-[#64696A] inline-block">
              {formData.studentName}
            </h1>
          </div>

          <p className="text-center text-sm md:text-xl font-normal">
            Has completed a six months program in frontend development with
            emphasis on React
          </p>

          <h4 className="text-center text-xl py-5">{formData.dateOfIssue}</h4>
          <p className="text-center ">{formData.programStatement}</p>
          {/* signatures */}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 items-center justify-items-center   px-[20px]">
            {formData.ceoSignature && (
              <div className="text-center">
                <img
                  src={formData.ceoSignature}
                  alt="CEO Signature"
                  className="w-[130px] h-auto border-b-4 border-gray-500 p-1"
                />
                <p className="font-bold text-xl">Udim Manasseh</p>
                <p className="text-sm text-gray-500">Founder</p>
              </div>
            )}
            {formData.certBarcode && (
              <div className="flex  items-center text-center md:flex-row flex-col">
                <img
                  src={formData.certBarcode}
                  alt="Certificate Barcode"
                  className="w-[190px] h-auto"
                />
                <p className="text-start text-xs text-gray-600 pl-[1px]  w-fit">
                  This certificate will be rendered invalid upon suspension,
                  cancellation, or revocation of accreditation. For the latest
                  accreditation status, please visit www.ibsc.com or contact
                  IBSC at (545) 888-1234.
                </p>
              </div>
            )}
            {formData.mgrSignature && (
              <div className="text-center">
                <img
                  src={formData.mgrSignature}
                  alt="Manager Signature"
                  className="w-[130px] h-auto border-b-4 border-gray-500 p-1"
                />
                <h1 className="font-bold text-xl">Justin Mark</h1>
                <p className="text-sm text-gray-500">Training Manager</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="mt-5  md:mx-[135px] mb-2 md:mb-8 flex items-center justify-between ">
              <button
                onClick={handlePreview2}
                className="rounded-lg px-10 py-3 hover:text-white text-md border border-gray-500 hover:bg-orange-500 text-black"
              >
                Preview
              </button>
              <button
                className="bg-orange-500 rounded-lg px-6 py-2 border-2 text-white text-lg hover:bg-transparent hover:text-black"
                onClick={handleDownload}
              >
                Download
              </button>
            </div>
    </div>
  );
}
