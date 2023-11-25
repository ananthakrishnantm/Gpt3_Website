import React from "react";
import "./feature.css";

const Feature = ({ title, text }) => {
  return (
    <div className="gpt3__features-container__feature">
      <div className="gpt3__features-container__feature-title">
        <Feature
          title="What is GPT-3"
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
        />
        <div />
        <h1>{title}</h1>
      </div>
      <div className="gpt3__features-container_feature-text">{text}</div>
    </div>
  );
};

export default Feature;
