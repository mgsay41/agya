import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { MdOutlineTranslate } from "react-icons/md";

const CustomToolbar = () => (
  <div id="toolbar" className="flex gap-2 p-2 border-b border-gray-300">
    <select className="ql-header">
      <option value="1"></option>
      <option value="2"></option>
      <option defaultValue></option>
    </select>
    <button className="ql-bold"></button>
    <button className="ql-italic"></button>
    <button className="ql-underline"></button>
    <button className="ql-list" value="ordered"></button>
    <button className="ql-list" value="bullet"></button>
    <button className="ql-link"></button>
    <button className="ql-image"></button>
    <button className="ql-video"></button>
    <button className="ql-translate">
      <MdOutlineTranslate />
    </button> {/* Translate button */}
  </div>
);

const EditorWithTranslate = () => {
  const [editorValue, setEditorValue] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [originalText, setOriginalText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [targetLang, setTargetLang] = useState("en");

  const modules = {
    toolbar: {
      container: "#toolbar",
      handlers: {
        translate: () => {
          setShowModal(true); // Open the modal when Translate is clicked
        },
        video: () => {
          const url = prompt("Enter video URL");
          if (url) {
            const quill = document.querySelector(".ql-editor");
            quill.innerHTML += `<iframe src="${url}" frameborder="0" allowfullscreen class="w-full h-60"></iframe>`;
          }
        },
      },
    },
  };

  // useEffect(()=>{
  //   console.log(">>>>>>>>>>>>>>>>>>>>>>>>")
  //   fetch("/api/translate?target_lang=fr&text=${originalText}").then(res =>res.json()).then(data=> {setTranslatedText(data.translated_text)})
  //   console.log(translatedText)
  // },[])
//   const handleTranslate1 = async () => {
    
//     console.log(">>>>>>>>>>>>>>>>>>>>>>>>")
//     fetch("/api/translate?target_lang=fr&text=مرحبا").then(res =>res.json()).then(data=> {setTranslatedText(data.translated_text)})
//     console.log(translatedText)
  
// };

const handleTranslate = () => {
  // console.log(targetLang)
  // console.log(originalText)
  fetch(`http://127.0.0.1:5000/api/translate?target_lang=${targetLang}&text=${originalText}`)
    .then((res) => res.json())
    .then((data) => {
      setTranslatedText(data.translated_text);
    })
    .catch((err) => {
      console.error("Translation error:", err);
    });
};


  return (
    <div className="p-4">
      <CustomToolbar />
      <ReactQuill
        theme="snow"
        value={editorValue}
        onChange={setEditorValue}
        modules={modules}
      />

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-6 shadow-xl max-w-lg w-full">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Translate Text
            </h3>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Display Text
              </label>
              <textarea
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="3"
                value={originalText}
                onChange={(e) => setOriginalText(e.target.value)}
              ></textarea>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Translate Language
              </label>
              <div className="flex items-center gap-2">
                <select
                  className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={targetLang}
                  onChange={(e) => setTargetLang(e.target.value)}
                >
                  <option value="en">English</option>
                  <option value="ar">Arabic</option>
                  <option value="fr">French</option>
                  <option value="de">German</option>
                  <option value="zh">Chinese</option>
                  {/* Add more languages as needed */}
                </select>
                <button
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                  onClick={handleTranslate}
                >
                  Translate
                </button>
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Translated Text
              </label>
              <textarea
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="3"
                readOnly
                value={translatedText}
              ></textarea>
            </div>
            <div className="flex justify-end gap-2">
              <button
                className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                onClick={() => {
                  const quill = document.querySelector(".ql-editor");
                  quill.innerHTML += `<p>${originalText}</p><p>${translatedText}</p>`;
                  setShowModal(false);
                  setOriginalText("");
                  setTranslatedText("");
                }}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditorWithTranslate;
