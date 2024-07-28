import React from "react";
const Description = ({ content }: { content: string }) => {
  return (
    <div className="desc hover:scale-105 p-5 mx-auto w-40em max-w-[60%] border-[1.5px] border-dutchWhite text-offWhite rounded-[20px] drop-shadow-[0_10px_10px_rgba(0,0,0,0.7)] transition-transform duration-700 ease-in-out cursor-default bg-brunswickGreen">
      {content}
    </div>
  );
};
export default Description;
