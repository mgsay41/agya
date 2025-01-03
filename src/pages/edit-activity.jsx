import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Calendar } from 'primereact/calendar';

export default function EditActivity() {
    const [age, setAge] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState(null);
    const handleChange = (event) => {
        setAge(event.target.value);
      };
    
      const modules = {
        toolbar: [
          [{ header: [1, 2, false] }],
          ["bold", "italic", "underline", "strike"],
          [{ list: "ordered" }, { list: "bullet" }],
          ["link", "image", "video"],
        ],
      };
    
      const formats = [
        "header",
        "bold",
        "italic",
        "underline",
        "strike",
        "list",
        "bullet",
        "indent",
        "link",
        "image",
      ];
    
      const [value, setValue] = useState("");
    
  return (
    <>
      <div>
        <span className=" pb-1 text-[#777]  border-b border-[#777]">
          Activities
        </span>
        <span className=" text-[#777]"> /</span>{" "}
        <span className=" pb-1 text-[#777]  border-b border-[#777]">
          New Activity
        </span>{" "}
        <span className=" text-[#777]"> /</span>{" "}
        <span className=" pb-1 text-[#777]  border-b border-[#777]">
          Create
        </span>
        <div>
          <h2 className=" text-3xl font-bold text-center mt-10">
            Edit Activity
          </h2>
          <div className=" flex justify-between border-b pb-2">
            <h3 className=" text-main text-xl">Basic Activity Info</h3>
            <p className=" flex items-center text-black/40  ">
              Fields obligatory to fill
              <p className=" bg-red-600 rounded-full w-2 h-2 ml-2"> </p>
            </p>
          </div>
          <form>
            <div className=" flex justify-between ">
              <div className=" w-[600px]">
                <label className=" flex items-center my-4 w-full">
                  <p className=" bg-red-600 rounded-full w-2 h-2 mr-2"> </p>{" "}
                  Activity Name
                </label>
                <input
                  type="text"
                  className="w-[600px] outline-none border py-4 px-2 rounded-xl bg-white"
                  placeholder="Activity name - short activity name "
                />
                <label className=" flex items-center my-4">
                  <p className=" bg-red-600 rounded-full w-2 h-2 mr-2"> </p>{" "}
                  Activity Type
                </label>
                <Select
                  value={age}
                  onChange={handleChange}
                  displayEmpty
                  className=" w-full"
                >
                  <MenuItem value="">type</MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                <div className=" flex justify-between my-4">
                  <div className=" flex flex-col">
                    <label>Date</label>
                  <Calendar value={date}  className=" bg-secondary border-b border-black p-2 w-64 "  onChange={(e) => setDate(e.value)} touchUI />
                  </div>
                  <div className=" flex flex-col flex-1 ml-[90px]">
                    <label>Time</label>
                    <Calendar id="calendar-timeonly"   value={time} className=" bg-secondary border-b border-black p-2 w-64 " onChange={(e) => setTime(e.value)} timeOnly touchUI hourFormat="12" />
                  </div>
                </div>
                <label className=" flex items-center my-4 w-full">
                  <p className=" bg-red-600 rounded-full w-2 h-2 mr-2"> </p>{" "}
                  Organizing Institution
                </label>
                <input
                  type="text"
                  className="w-[600px] outline-none border py-4 px-2 rounded-xl bg-white"
                  placeholder="Activity name - short activity name "
                />
                <label className=" flex items-center my-4 w-full">
                  <p className=" bg-red-600 rounded-full w-2 h-2 mr-2"> </p>{" "}
                  Location
                </label>
                <Select
                  value={age}
                  onChange={handleChange}
                  displayEmpty
                  className=" w-full"
                >
                  <MenuItem value="" disabled>
                    online/ offline
                  </MenuItem>
                  <MenuItem value={10}>offline</MenuItem>
                  <MenuItem value={20}>online</MenuItem>
                </Select>
                <label className=" flex items-center my-4 w-full">
                  <p className=" bg-red-600 rounded-full w-2 h-2 mr-2"> </p>{" "}
                  Price
                </label>
                <Select
                  value={age}
                  onChange={handleChange}
                  displayEmpty
                  className=" w-full"
                >
                  <MenuItem disabled value="">
                    None
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                <label className=" flex items-center my-4 w-full">
                  <p className=" bg-red-600 rounded-full w-2 h-2 mr-2"> </p>{" "}
                  Sponsors and Exhibitors Logos
                </label>
                <input
                  disabled
                  type="text"
                  className=" block py-4 px-8 border w-full bg-white "
                  placeholder="No image uploaded"
                />
                <p className=" text-black/40 text-sm mb-4">
                  accepted file types: *.jpg, *.png of maximum size 280 x 280 -
                  uplaods count: 1 and more.
                </p>
                <input type="file" className=" w-[125px] block rounded-xl overflow-hidden" />
              </div>
              <div className=" mb-6 flex-1 ml-12 ">
                <label className=" flex items-center my-4 w-full">
                  <p className=" bg-red-600 rounded-full w-2 h-2 mr-2"> </p>{" "}
                  Activity Banner/ Featured Image
                </label>
                <div className="flex items-center justify-center w-full mb-5 mt-3">
                  <label
                    htmlFor="dropzone-file"
                    className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800"
                  >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg
                        className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 16"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                        />
                      </svg>
                      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-semibold">Click to upload</span>{" "}
                        or drag and drop
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        SVG, PNG, JPG or GIF (MAX. 800x400px)
                      </p>
                    </div>
                    <input
                      accept="image/*"
                      id="dropzone-file"
                      type="file"
                      className="hidden"
                      name="img"
                    />
                  </label>
                </div>
                <p className=" text-base text-black/40">
                  accepted file types: *.jpg, *.png of maximum size: 720 x 300 -
                  uploads count: 1.{" "}
                </p>
              </div>
            </div>
            <div className=" flex justify-center items-center">
              <button className=" bg-main text-white py-2 px-[120px] rounded-xl mt-4">
                Save
              </button>
            </div>
          </form>
        </div>
        <div className=" add-activity my-4">
          <form>
            <div className=" flex justify-between border-b pb-2 mb-20">
              <h3 className=" text-main text-xl">Event Brief</h3>
              <p className=" flex items-center text-black/40 ">
                Fields obligatory to fill
                <p className=" bg-red-600 rounded-full w-2 h-2 ml-2 text-black/40">
                  {" "}
                </p>
              </p>
            </div>
            <label className=" flex items-center my-4 w-full">
              <p className=" bg-red-600 rounded-full w-2 h-2 mr-2"> </p>{" "}
              Description
            </label>
            <ReactQuill
              theme="snow"
              value={value}
              onChange={setValue}
              className=" h-[200px]"
              modules={modules}
              formats={formats}
              placeholder=" write something ..."
            />
            <p className=" mt-12 text-black/40">Maximum characters: 2500</p>
            <label className=" flex items-center my-4 w-full">
              <p className=" bg-red-600 rounded-full w-2 h-2 mr-2"> </p> Time
              line and activities
            </label>
            <ReactQuill
              theme="snow"
                
              value={value}
              onChange={setValue}
              className=" h-[200px]"
              modules={modules}
              formats={formats}
              placeholder=" write something ..."
            />
            <p className=" mt-12 text-black/40">Maximum characters: 2500</p>
            <label className=" flex items-center my-4 w-full">
              <p className=" bg-red-600 rounded-full w-2 h-2 mr-2"> </p>{" "}
              Activity External Link
            </label>
            <input
              type="text"
              className="w-full outline-none border py-4 px-2 rounded-xl bg-white"
              placeholder="Activity name - short activity name "
            />
            <label className=" flex items-center my-4 w-full">
              <p className=" bg-red-600 rounded-full w-2 h-2 mr-2"> </p>Button
              Call to Action
            </label>
            <Select
              value={age}
              onChange={handleChange}
              displayEmpty
              className=" w-full"
            >
              <MenuItem value="" disabled>
                online/ offline
              </MenuItem>
              <MenuItem value={10}>offline</MenuItem>
              <MenuItem value={20}>online</MenuItem>
            </Select>
            <div className="flex justify-center items-center mt-4 mb-10 ">
              <button className="bg-main text-white px-[100px] rounded-xl py-2">
                Submit Activity
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
