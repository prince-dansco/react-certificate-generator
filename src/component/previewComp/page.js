export default function PreviewUi({ currentRef, formData }) {
  return (
    <div>
      {/* for the certificate  */}
      <div
        className="my-20 bg-white border-2 px-6 shadow-inner  py-5"
        ref={currentRef}
      >
        <div className="">
          {formData.logo && (
            <div className="flex justify-center">
              <img
                src={formData.logo}
                alt="logo"
                className="mb-4 w-[80.7px] h-[89.34px]"
              />
            </div>
          )}
          <h1
            className="text-center font-bold  text-3xl md:text-8xl text-orange-500"
            // data-html2canvas-ignore
          >
            {formData.institutionName}
          </h1>
          <h3 className="font-semibold text-4xl text-[#343533] mt-6 text-center">
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
              <div className="flex  items-center text-center">
                <img
                  src={formData.certBarcode}
                  alt="Certificate Barcode"
                  className="w-[190px] h-auto"
                />
                <p className="text-start text-xs text-gray-600 pl-1  w-fit">
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
    </div>
  );
}
