import React, { useState } from "react";
import { FaLink, FaArrowUp, FaArrowDown, } from "react-icons/fa";
import { IoSend,IoArrowRedoOutline } from "react-icons/io5";
function Article() {
  const [comments, setComments] = useState([
    { id: 1, name: "Fatma Bahaa", text: "The Soii Havzak excavation reveals fascinating insights into early human life and artistic expression in Central Asia!", time: "2 hours ago", replies: [] },
  ]);

  const [newComment, setNewComment] = useState("");
  const [replyingTo, setReplyingTo] = useState(null);
  const [replyText, setReplyText] = useState("");

  const handleCommentSubmit = () => {
    if (newComment.trim() !== "") {
      setComments([
        ...comments,
        {
          id: comments.length + 1,
          name: "John Doe", // Replace with the actual user's name
          text: newComment,
          time: "Just now",
          replies: [],
        },
      ]);
      setNewComment("");
    }
  };

  const handleReplySubmit = (commentId) => {
    if (replyText.trim() !== "") {
      setComments(
        comments.map((comment) =>
          comment.id === commentId
            ? {
                ...comment,
                replies: [
                  ...comment.replies,
                  { id: comment.replies.length + 1, name: "John Doe", text: replyText, time: "Just now" },
                ],
              }
            : comment
        )
      );
      setReplyingTo(null);
      setReplyText("");
    }
  };

  return (
    <div className=" p-6 bg-white shadow-md rounded-lg">
      {/* Breadcrumb Navigation */}
        <nav className="text-DateTime text-sm mb-4">
             <span>Home</span><span>/Articles</span><span>/Major Paleolithic Site Excavated in Central Asia</span>
        </nav>

      {/* Header */}
      <div className="flex justify-between items-start mb-6">
        <div className="flex items-center">
          <img
            className="w-12 h-12 rounded-full mr-4"
            src="/avatar.jpeg" // Replace with actual avatar
            alt="Author"
          />
          <div>
            <p className="text-lg font-semibold">John Snow</p>
          </div>
        </div>
        <div>
          <p className="text-DateTime text-sm">1d • 8:30 AM</p>
        </div>
      </div>

      {/* Title */}
      <h1 className="text-4xl font-bold text-center mb-6">
        “Major Paleolithic Site Excavated in Central Asia”
      </h1>

      {/* Main Image */}
      <div className="mb-6">
        <img
          className="w-full h-64 object-cover rounded-lg"
          src="../Frame 20.svg" // Replace with actual image
          alt="Paleolithic site"
        />
      </div>

      {/* Article Content */}
      <div className="space-y-4 text-gray-800">
        <p>
          Further analysis of the <strong>Soii Havzak</strong> rock shelter has revealed evidence of early human artistic expression.
          Researchers have found ochre fragments and possible engravings on stone surfaces, suggesting symbolic or ritualistic activities.
        </p>
      </div>

      {/* Tags Section */}
            <div className="mt-8">
            <h3 className="text-base mb-4">Tags</h3>
        <div className="flex flex-wrap gap-2">
            {["Tag 1", "Long Tag 1", "Tag 3", "Longest Tag Ever 2"].map((tag, index) => (
            <span
                key={index}
                className="bg-main text-white text-sm px-6 py-2 rounded-[10px]" // Use rounded-[15px] for custom radius
            >
                {tag}
            </span>
            ))}
        </div>
        </div>
        

      {/* References Section */}
      <div className="mt-8">
      <h3 className="text-lg mb-4">References and Links</h3>
        <ul className="space-y-3">
          {["https://aqya.info/..."].map((link, index) => (
            <li key={index} className="flex items-center gap-2 text-main">
              <FaLink className="text-main" />
              <a
                href={link}
                className="hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
        <hr className="border-t-2 border-main my-4" />
      </div>

      {/* Comment Input Field */}
            <div className="relative mb-6">
        <textarea
            className="w-full rounded-lg p-3 text-main bg-[#E4F5E4] pr-16 resize-none" // Added resize-none to disable resizing
            placeholder="Enter your comment"
            rows="1"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
        ></textarea>
        <button
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-main px-4 py-2 rounded-full hover:bg-opacity-80 flex items-center"
            onClick={handleCommentSubmit}
        >
            <IoSend className="mr-2" />
        </button>
        </div>






      {/* Three Action Buttons */}
      <div className="flex  items-center">
      <div className="flex    p-3 rounded-lg">
        <button className="   text-gray-700 hover:text-main">
          <FaArrowUp />
        </button>
        <button className=" text-gray-700 hover:text-main">
          <FaArrowDown />
        </button>
        </div>
        <button className=" text-gray-700 hover:text-main">
        <IoArrowRedoOutline />
        </button>
        </div>

      {/* Comments Section */}
      <h3 className="text-lg font-semibold mb-4">Comments</h3>
<div className="space-y-6">
  {comments.map((comment) => (
    <div key={comment.id} className="space-y-4">
      <div className="border-b pb-4">
        <div className="flex items-start space-x-4">
          <img
            className="w-10 h-10 rounded-full"
            src="/avatar.jpeg"
            alt={comment.name}
          />
          <div className="flex-1">
            <p className="font-semibold">{comment.name}</p>
            <p>{comment.text}</p>
          </div>
          <div className="flex flex-col items-end ml-4">
            <p className="text-DateTime text-sm">{comment.time}</p>
            <button
              className="bg-main text-white text-sm px-4 py-2 rounded-lg mt-2"
              onClick={() => setReplyingTo(comment.id === replyingTo ? null : comment.id)}
            >
              Reply
            </button>
          </div>
        </div>
      </div>

      {replyingTo === comment.id && (
        <div className="relative  flex items-center gap-2">
        <textarea
          className="w-full rounded-lg p-3 text-main bg-[#E4F5E4] pr-16 resize-none focus:outline-none"
          placeholder="Write your reply"
          rows="1"
          value={replyText}
          onChange={(e) => setReplyText(e.target.value)}
        ></textarea>
        <button
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-main px-4 py-2 rounded-full hover:bg-opacity-80 flex items-center"
          onClick={() => handleReplySubmit(comment.id)}
        >
          <IoSend className="mr-2" />
        </button>
      </div>
      )}
    </div>
  ))}
</div>

    </div>
  );
}

export default Article;
