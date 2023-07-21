import React, { useRef } from "react";
import html2canvas from "html2canvas";
import jspdf from "jspdf";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import "./Receipt.css";
const Receipt = () => {
  const pdfRef = useRef();
  const handlePrint = () => {
    const input = pdfRef.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jspdf("p", "mm", "a4", true);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 0;
      pdf.addImage(
        imgData,
        "PNG",
        imgX,
        imgY,
        imgWidth * ratio,
        imgHeight * ratio
      );
      pdf.save("invoice.pdf");
    });
  };
  return (
    <div className="receiptMain">
      <Header />
      <div className="receiptHolder" ref={pdfRef}>
        <div className="receiptTop">
          <img src="Assets/Header/RentPG.jpg" />
          <div className="receiptPg">
            <p>Abhi Pg</p>
          </div>
        </div>
        <div className="receiptInfo">
          <div className="receiptInfoUnit">
            <ReceiptInfoDiv title={"Name"} ans={"Abhi Singh"} />
            <ReceiptInfoDiv title={"Room"} ans={"Base-102"} />
            <ReceiptInfoDiv title={"Phone"} ans={"9007453398"} />
          </div>
          <div className="receiptInfoUnit">
            <ReceiptInfoDiv title={"GST"} ans={""} />
            <ReceiptInfoDiv title={"Admin Name"} ans={"Abhi PG"} />
            <ReceiptInfoDiv title={"Admin No"} ans={"9007453398"} />
          </div>
        </div>
        <div className="receiptInfo">
          <div className="receiptInfoUnit">
            <ReceiptInfoDiv title={"Receipt No"} ans={"A/SD/July/2023/2"} />
          </div>
          <div className="receiptInfoUnit">
            <ReceiptInfoDiv title={"Date"} ans={"21st July 2023"} />
          </div>
        </div>
      </div>
      <button onClick={handlePrint}>Print</button>
      <Footer />
    </div>
  );
};
export default Receipt;

const ReceiptInfoDiv = ({ title, ans }) => {
  return (
    <div className="receiptInfoDiv">
      <div className="receiptInfoUnitTitle">
        <p>{title}</p>
      </div>
      <div className="receiptInfoUnitAns">
        <p>{ans}</p>
      </div>
    </div>
  );
};
