import React from "react";
import HotItemCard from "../components/HotItemCard.jsx";

function HotAccessories({ music, musicCover, smartDevice, smartDeviceCover,home,homeCover,lifestyle,lifestyleCover,mobileAccessories,mobileAccessoriesCover }) {
  return (
    <div
      className="HotAccessories"
      style={{
        display: "flex",
        width: "90vw",
        margin: "auto",
      }}
    >
      <div
        style={{
          width: "22vw",
          cursor: "pointer",
        }}
      >
        <img src={musicCover || smartDeviceCover || homeCover || lifestyleCover || mobileAccessoriesCover} alt="cover" />
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {music && music.map((item, index) => (
          <HotItemCard
            key={item.image}
            name={item.name}
            price={item.price}
            image={item.image}
            index={index}
          />
        ))}
        {smartDevice && smartDevice.map((item, index) => (
          <HotItemCard
            key={item.image}
            name={item.name}
            price={item.price}
            image={item.image}
            index={index}
          />
        ))}
        {home && home.map((item, index) => (
          <HotItemCard
            key={item.image}
            name={item.name}
            price={item.price}
            image={item.image}
            index={index}
          />
        ))}
        {lifestyle && lifestyle.map((item, index) => (
          <HotItemCard
            key={item.image}
            name={item.name}
            price={item.price}
            image={item.image}
            index={index}
          />
        ))}
        {mobileAccessories && mobileAccessories.map((item, index) => (
          <HotItemCard
            key={item.image}
            name={item.name}
            price={item.price}
            image={item.image}
            index={index}
          />
        ))}
        <HotItemCard image="https://i01.appmifile.com/webfile/globalimg/in/cms/593181BE-7DB8-15F5-E907-506427B8C9F4.jpg" />
      </div>
    </div>
  );
}

export default HotAccessories;
