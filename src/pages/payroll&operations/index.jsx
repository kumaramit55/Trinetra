import React from "react";
import InfoSections from "./infoSection";


function Payroll() {
  return (
    <div>
      <section
  className="container-fluid py-5 d-flex align-items-center position-relative"
  style={{
    minHeight: "500px",
    backgroundImage: "url('/images/payroll.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    color: "white",
    overflow: "hidden",    // Prevents overlay spill on corners
  }}
>
  {/* Overlay */}
  <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: "rgba(21,64,112,0.55)", // Semi-transparent dark blue
      zIndex: 1,
    }}
  />
  
  {/* Content */}
  <div 
    className="d-flex flex-column flex-md-row align-items-center justify-content-center gap-4 px-3 w-100"
    style={{ position: "relative", zIndex: 2 }} // Keep content above overlay
  >
    <div
      className="text-center text-md-start"
      style={{ maxWidth: "500px", padding: "20px", borderRadius: "8px" }}
    >
      <h1 className="fw-bold lh-sm">
        Optimize operational{" "}
        <span className="gradient-text">processes</span> to increase
        overall <span className="gradient-text">efficiency</span> and{" "}
        <span className="gradient-text">productivity</span>
      </h1>
    </div>
  </div>
</section>


      <section className="payroll-operations">
        <h1>Payroll Operations</h1>
        <div className="operations-wrapper">
          <div className="operation-card">
            <span className="step-number">1</span>
            <h3>Employee Information Collection</h3>
            <p>
              Maintain employee records like name, bank details, PAN, and salary
              components.
            </p>
          </div>
          <div className="operation-card">
            <span className="step-number">2</span>
            <h3>Time Tracking & Attendance</h3>
            <p>
              Track working hours, overtime, leaves, and absences for accurate
              pay calculation.
            </p>
          </div>
          <div className="operation-card">
            <span className="step-number">3</span>
            <h3>Payroll Calculation</h3>
            <p>
              Calculate gross salary, apply allowances, bonuses, and deductions
              for net pay.
            </p>
          </div>
          <div className="operation-card">
            <span className="step-number">4</span>
            <h3>Payroll Approval</h3>
            <p>Review and validate payroll data before payment processing.</p>
          </div>
          <div className="operation-card">
            <span className="step-number">5</span>
            <h3>Salary Payment</h3>
            <p>
              Disburse salaries via bank transfer or cheque, ensuring timely
              payment.
            </p>
          </div>
          <div className="operation-card">
            <span className="step-number">6</span>
            <h3>Payslip Generation</h3>
            <p>
              Generate and distribute payslips showing earnings and deductions.
            </p>
          </div>
          <div className="operation-card">
            <span className="step-number">7</span>
            <h3>Tax Filing & Compliance</h3>
            <p>
              Remit taxes and contributions on time to meet legal obligations.
            </p>
          </div>
          <div className="operation-card">
            <span className="step-number">8</span>
            <h3>Recordkeeping & Reporting</h3>
            <p>Maintain payroll records for audits and compliance.</p>
          </div>
          <div className="operation-card">
            <span className="step-number">9</span>
            <h3>Handling Queries</h3>
            <p>
              Respond to employee payroll inquiries and resolve discrepancies.
            </p>
          </div>
        </div>
      </section>

       <InfoSections/>

      
    </div>
  );
}

export default Payroll;
