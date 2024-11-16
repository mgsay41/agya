import React from "react";
import { MoreVertical, MessageCircle, Share2 } from "lucide-react";

const SocialCard = () => {
  return (
    <div className="min-h-screen p-4 flex items-center justify-center">
      <div className="max-w-xl w-full bg-[#f8ecea] rounded-3xl overflow-hidden">
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
            <button className="p-1">
              <MoreVertical className="h-5 w-5 text-gray-500" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="px-4 pt-0">
          <p className="text-lg font-semibold mb-2">
            "Major Paleolithic Site Excavated in Central Asia"
          </p>
          <div className="relative w-full rounded-lg overflow-hidden mb-2">
            <img
              src="/api/placeholder/600/400"
              alt="Ancient site"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="px-2 py-1 flex items-center space-x-1 border-t border-gray-200">
          <button className="flex items-center space-x-1 px-3 py-1.5 rounded-lg hover:bg-gray-100">
            <div className="flex items-center justify-center w-6 h-6">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </div>
            <span className="text-sm">Upvote</span>
          </button>
          <button className="flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100">
            <MessageCircle className="h-5 w-5" />
          </button>
          <button className="flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100">
            <Share2 className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SocialCard;
