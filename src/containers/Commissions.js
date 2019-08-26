import React from "react";

import "./Commissions.scss";

export default () => (
  <div className="commissions-page">
    <div className="content">
      <p>I'm happy to collaborate with a client to make a bespoke painting.</p>
      <h2>Pricing structure</h2>

      <table>
        <tr>
          <td>120 x 100cms</td>
          <td>£ 2000 </td>
        </tr>
        <tr>
          <td>150 x 150cms</td>
          <td>&pound;2200 </td>
        </tr>
        <tr>
          <td>200 x 2m0cms</td>
          <td>&pound;2500 </td>
        </tr>
      </table>
      <h2>Payment and Shipping</h2>
      <p>
        Payment is accepted via Bank transfer, Paypal, Monzo or cash. Items will
        be dispatched nce payment is received.
      </p>
    </div>
  </div>
);
