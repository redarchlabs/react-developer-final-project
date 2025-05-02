// Footer.js
import React from 'react';
import "../styles/TableCard.css"
import Basket from "../images/Basket.svg"; // Example image import
import Button from './Button';

import { useNavigate } from 'react-router-dom';

function TableCard({ tableName, tableImage, tableDescription, tableCapacity }) {
  const navigate = useNavigate();

  return (
      <div className="table-card">
        <img src={tableImage} alt={tableName} className="table-image" />
        <div className="table-info">
          <span className="container">
            <h3 className="table-name">{tableName}</h3>
            <span className="table-size">Seats: {tableCapacity}</span>
          </span>
          <span className="description-wrapper">
          <p className="table-description">{tableDescription}</p>
          </span>
          <Button label="Reserve" onClick={() => navigate("/Confirm")} />
        </div>
      </div>
    );
  }

export default TableCard;
