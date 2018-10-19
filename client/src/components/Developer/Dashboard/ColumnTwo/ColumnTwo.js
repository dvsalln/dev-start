import React from "react";
import "./ColumnTwo.css";

const ColumnTwo = () => (
  <div class=".col-6 .col-sm-4">
  <div className="column-two">
  
      
      <div class="card">
        <div class="card-body">
          <h2 class="card-title">Available Proposals</h2>
          {/* Below are hard coded. Replace with props with linked with BE */}
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <h3 className="card-subtitle mb-2">Javascript</h3>
              <p className="card-text text-muted">Endorsements</p>
            </li>
        
          </ul>
        </div>
      </div>
      
    </div>
  </div>
);

export default ColumnTwo;