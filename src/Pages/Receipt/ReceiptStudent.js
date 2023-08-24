import React, { useRef } from "react";
import html2canvas from "html2canvas";
import { useSelector } from "react-redux";
import jspdf from "jspdf";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import "./Receipt.css";
const ReceiptStudent = () => {
    const data = useSelector((state) => state.collection.receipt);
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
            <Header name={"My Receipt"} link={"/studentAccount"} type="back" />
            <div className="receiptHolder" ref={pdfRef}>
                <div className="receiptTop">
                    <img src="Assets/Header/RentPG.jpg" />
                    <div className="receiptPg">
                        <p>{data.propertyName}</p>
                    </div>
                </div>
                <div className="receiptInfo">
                    <div className="receiptInfoUnit">
                        <ReceiptInfoDiv title={"Name"} ans={data.tenantName} />
                        <ReceiptInfoDiv title={"Room"} ans={data.room} />
                        <ReceiptInfoDiv title={"Phone"} ans={data.phone} />
                    </div>
                    <div className="receiptInfoUnit">
                        <ReceiptInfoDiv title={"GST"} ans={""} />
                        <ReceiptInfoDiv title={"Admin Name"} ans={data.propertyName} />
                        <ReceiptInfoDiv title={"Admin No"} ans={data.propertyNumber} />
                    </div>
                </div>
                <div className="receiptInfo">
                    <div className="receiptInfoUnit">
                        <ReceiptInfoDiv title={"Receipt No"} ans={data.receiptId} />
                    </div>
                    <div className="receiptInfoUnit">
                        <ReceiptInfoDiv title={"Date"} ans={data.date} />
                    </div>
                </div>

                <div className="receiptDetails">
                    <div className="receiptDetailsHeader">
                        <div className="paymentName paymentHeaderColor">
                            <p>Payment Details</p>
                        </div>
                        <div className="paymentOther paymentHeaderColor  ">
                            <p>Mode</p>
                        </div>
                        <div className="paymentOther paymentHeaderColor">
                            <p>Due</p>
                        </div>
                        <div className="paymentOther paymentHeaderColor">
                            <p>Paid </p>
                        </div>
                        <div className="paymentOther paymentHeaderColor ">
                            <p>Balance</p>
                        </div>
                    </div>
                    <div className="receiptDetailsContent">
                        <div className="paymentName ">
                            <p>{data.type}</p>
                        </div>
                        <div className="paymentOther  ">
                            <p>{data.mode}</p>
                        </div>
                        <div className="paymentOther ">
                            <p>Rs {data.due}</p>
                        </div>
                        <div className="paymentOther ">
                            <p>Rs {data.amount}</p>
                        </div>
                        <div className="paymentOther ">
                            <p>Rs {parseInt(data.due) - parseInt(data.amount)}</p>
                        </div>
                    </div>
                    <div className="receiptDescription">
                        <div className="receiptGrand">
                            <p style={{ fontWeight: "bold" }}>Grand Total</p>
                        </div>
                        <div className="receiptTotal">Rs {data.amount}</div>
                        <div className="receiptGrand">
                            <p style={{ fontSize: 9, marginTop: 10 }}>Recorded By (Admin)</p>
                        </div>
                    </div>
                    <div className="disclaimer">
                        <p>
                            This is a computer generated invoice issued by Abhi Pg through
                            RentPg App.It does not require any signatures.
                        </p>
                    </div>
                    <Terms />
                </div>
            </div>
            <button onClick={handlePrint}>Print</button>
        </div>
    );
};
export default ReceiptStudent;

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

const Terms = () => {
    return (
        <div className="terms">
            <div className="termsHeader">
                <p>Terms and Conditions</p>
            </div>
            <div className="termsUnit">
                <div className="termsUnitImg">
                    <img src="Assets/Property/done.png" />
                </div>
                <div className="termsUnitText">
                    <p>
                        Property Management provides accomodation as pimary service which
                        exempted from GST under section 11 of CGST act.
                    </p>
                </div>
            </div>
            <div className="termsUnit">
                <div className="termsUnitImg">
                    <img src="Assets/Property/done.png" />
                </div>
                <div className="termsUnitText">
                    <p>
                        This is an ackowledge receipt of the payment made by the tenant
                        through whatsover mode of payment for the corresponding services.
                    </p>
                </div>
            </div>
            <div className="termsUnit">
                <div className="termsUnitImg">
                    <img src="Assets/Property/done.png" />
                </div>
                <div className="termsUnitText">
                    <p>
                        No refund and/or discounts will ever be entertained against this
                        receipt.
                    </p>
                </div>
            </div>
        </div>
    );
};