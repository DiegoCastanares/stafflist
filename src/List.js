import React from "react";
import "./List.css";
import { AiOutlineMail } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";
import { BsDot } from "react-icons/bs";

const List = ({ people }) => {
  return (
    <>
      <div className="card">
        {people.map((person) => {
          const { id, name, role, image } = person;
          return (
            <div key={id} className="person">
              <img src={image} alt={name} />
              <div>
                <h4>{name}</h4>
                <p>{role}</p>
                <p className="contact">
                  <AiOutlineMail className="icon" /> <span>Email</span>
                  <BsDot className="icon" />
                  <FiTwitter className="icon" /> <span> Twitter</span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default List;
