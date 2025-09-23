import React from "react";
import bannerImg from '../../assets/banner-main.png'


const Banner = () => {
  return (
    <div
      className="hero bg-[url('https://picsum.photos/800/400')] bg-cover bg-center"
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
            <img className="mx-auto" src={bannerImg} alt="" />
          <h1 className="mb-5  font-bold">Assemble Your Ultimate Dream 11 Cricket Team</h1>
          <p className="mb-5">
            Beyond Boundaries Beyond Limits
          </p>
          <button className="btn ">Claim Free Credit</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
