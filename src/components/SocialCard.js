import React from "react";
import {
  MoreVertical,
  MessageCircle,
  Share2,
  ArrowBigUp,
  ArrowBigDown,
} from "lucide-react";

const SocialCard = () => {
  return (
    <div className="min-h-screen p-4 bg-white border border-gray-300 flex items-center justify-center">
      <div className="max-w-xl w-full rounded-3xl overflow-hidden shadow-md">
        {/* Header */}
        <div className="flex flex-row items-center p-4 pb-2">
          <div className="flex items-center flex-1">
            <div className="h-12 w-12 mr-3 rounded-full overflow-hidden">
              <img
                src="/avatar.jpeg"
                alt="User avatar"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-medium text-base">John Snow</span>
          </div>
          <div className="flex items-center">
            <span className="text-xs text-gray-500 mr-4">1d· 8:30AM</span>
          </div>
        </div>

        {/* Content */}
        <div className="px-4 pt-0">
          <p className="text-lg font-semibold mb-2">
            "Major Paleolithic Site Excavated in Central Asia"
          </p>
          <div className="relative w-full rounded-lg overflow-hidden mb-2">
            <img
              src="/Frame20.png"
              alt="Ancient site"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="px-4 py-2 flex items-center bg-white border-t border-gray-100">
          <div className="flex items-center space-x-3">
            <div className="flex rounded-full border border-gray-200 divide-x bg-[#e0d1cc]">
              <button className="flex items-center space-x-1 px-3 py-1">
                <ArrowBigUp className="w-5 h-5 text-[#6e2617]" />
                <span className="text-sm text-[#6e2617]">Upvote</span>
              </button>
              <button className="px-3 py-1 hover:bg-[#d4c5c0] rounded-r-full">
                <ArrowBigDown className="w-5 h-5 text-[#6e2617]" />
              </button>
            </div>

            <button className="p-2 hover:bg-gray-50 rounded-full">
              <MessageCircle className="h-5 w-5 text-[#6e2617]" />
            </button>

            <button className="p-2 hover:bg-gray-50 rounded-full">
              <Share2 className="h-5 w-5 text-[#6e2617]" />
            </button>
          </div>

          <div className="ml-auto">
            <button className="p-2 hover:bg-gray-50 rounded-full">
              <MoreVertical className="h-5 w-5 text-[#6e2617]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialCard;
