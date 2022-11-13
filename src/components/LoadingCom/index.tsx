import React, { FC } from "react";
import { FidgetSpinner } from "react-loader-spinner";

export const IsLoadingComp: FC = () => {
  return (
    <FidgetSpinner
      visible={true}
      height="80"
      width="80"
      ariaLabel="dna-loading"
      wrapperStyle={{}}
      wrapperClass="dna-wrapper"
      ballColors={["#ff0000", "#00ff00", "#0000ff"]}
      backgroundColor="#F4442E"
    />
  );
};
