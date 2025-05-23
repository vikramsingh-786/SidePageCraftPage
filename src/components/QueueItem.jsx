import React from "react";
import { FaHammer } from "react-icons/fa";

const QueueItem = ({ item }) => {
  const { name, percentage, startTime, endTime, remaining } = item;

  // Determine gradient colors based on percentage
  const getGradientColors = (percent) => {
    if (percent >= 100) {
      // Completed state (green gradient)
      return {
        start: "#00ff88",
        middle: "#00c6ff",
        end: "#00ff88"
      };
    } else {
      // In-progress state (blue/purple gradient)
      return {
        start: "#2961ff",
        middle: "#a930ff",
        end: "#ff295a"
      };
    }
  };

  const colors = getGradientColors(percentage);

  return (
    <div className="w-full max-w-md text-white rounded-lg bg-gradient-to-b from-transparent to-[#121624] mb-6">
      <div className="p-3 md:p-5">
        {/* Top Row */}
        <div className="flex flex-wrap md:flex-nowrap justify-between items-center mb-4">
          {/* Left Info */}
          <div className="flex items-center gap-2 md:gap-3">
            <div className="text-lg md:text-xl font-semibold">1</div>
            <div>
              <div className="text-[8px] text-gray-400 leading-none">Name</div>
              <div className="text-xs md:text-sm font-semibold mt-[3px]">{name}</div>
            </div>
          </div>

          {/* Vertical Line Left - Hidden on small screens */}
          <div className="hidden md:block h-[50px] w-px bg-gray-600 mx-2"></div>

          {/* Center Progress */}
          <div className="relative w-[90px] md:w-[110px] h-[45px] md:h-[55px] mx-auto md:mx-0 my-2 md:my-0">
            {/* Semicircle Outline */}
            <svg className="absolute w-full h-full" viewBox="0 0 100 50">
              <path
                d="M 10 50 A 40 40 0 0 1 90 50"
                fill="none"
                stroke="#1f2937"
                strokeWidth="10"
              />
              <path
                d="M 10 50 A 40 40 0 0 1 90 50"
                fill="none"
                stroke="url(#grad1)"
                strokeWidth="10"
                strokeDasharray={`${percentage * 1.8}, 180`}
              />
              {/* Thin white semicircle */}
              <path
                d="M 10 50 A 40 40 0 0 1 90 50"
                fill="none"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="0.5"
              />
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor={colors.start} />
                  <stop offset="50%" stopColor={colors.middle} />
                  <stop offset="100%" stopColor={colors.end} />
                </linearGradient>
              </defs>
            </svg>

            {/* Progress Content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="flex items-center justify-center relative mt-5"
                style={{ left: "2px" }}
              >
                <FaHammer className="text-[#77C2BA] w-2 h-2 md:w-3 md:h-3 mr-1 absolute -left-3" />
                <span className="text-xs md:text-sm font-semibold">{percentage}%</span>
              </div>
            </div>
          </div>

          {/* Vertical Line Right - Hidden on small screens */}
          <div className="hidden md:block h-[50px] w-px bg-gray-600 mx-2"></div>

          {/* Right Info */}
          <div className="flex items-center gap-2 md:gap-3">
            <div className="text-lg md:text-xl font-semibold">{remaining}</div>
            <div>
              <div className="text-[8px] text-gray-400 leading-none">
                Remaining
              </div>
              <div className="text-xs md:text-sm font-semibold mt-[3px]">
                {percentage >= 100 ? "Completed" : "Time"}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex justify-between pt-3 md:pt-4 px-4 md:px-10 items-center">
          <div className="text-left">
            <div className="text-[8px] text-gray-400">Start Time</div>
            <div className="text-xs md:text-sm font-semibold">{startTime}</div>
          </div>

          <div className="h-[30px] w-px bg-gray-600 mx-1 md:mx-2 md:ml-10 md:mr-5"></div>

          <div className="text-right">
            <div className="text-[8px] text-gray-400">End Time</div>
            <div className="text-xs md:text-sm font-semibold">{endTime}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QueueItem;