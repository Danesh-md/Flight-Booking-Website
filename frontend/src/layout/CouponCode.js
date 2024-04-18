import React from "react";
import "./CouponCode.css";

const CouponCode = () => {
  return (
    <div className="coupon-container">
      <div>
        <h3>Apply Coupon Code</h3>
        <div className="coupon-form">
          <input type="text" placeholder="Enter coupon code" />
          <button>Apply</button>
        </div>
      </div>
    </div>
  );
};

export default CouponCode;
