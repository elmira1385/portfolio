"use client"

import { useForm } from "react-hook-form";

const Contact = () => {
     const{register,handleSubmit}=useForm({
    defaultValues:{
      name:"",
      email:"",
      Subject:"",
      Message:""
    }
  })
  return (
    <div id="contact" className="flex flex-col  gap-10 sm:px-46  px-6  py-30">
      <div className="flex flex-col gap-6 ">
        <p className="text-3xl sm:text-4xl font-bold text-gray dark:text-white">
          <span className="border-b-4 border-[#2662d9]">Get I</span>n Touch
        </p>
        <p className="dark:text-gray-400 text-gray-500 text-[15px] sm:text-base ">
          Have a question or want to work together? Feel free to drop me a
          message. I'd love to hear from you!
        </p>
      </div>
      <div className="flex flex-col flex-wrap sm:flex-row sm:justify-between gap-8">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-semibold text-gray dark:text-white ">
              Contact Information
            </h3>
            <p className="dark:text-gray-400 text-gray-500 text-[15px] sm:text-base">
              Fill up the form and I'll get back to you as soon as possible.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex gap-2  ">
              <div>
                <svg
                  className="stroke-[#2662d9]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
              </div>
              <div>
                <h4 className="font-medium text-gray dark:text-white">Email</h4>
                <p className="text-sm dark:text-gray-400 text-gray-500 ">
                  elmirashokriyan64@gmail.com
                </p>
              </div>
            </div>
            <div className="flex gap-2  ">
              <div>
                <svg
                  className="stroke-[#2662d9]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div>
                <h4 className="font-medium text-gray dark:text-white">Phone</h4>
                <p className="text-sm dark:text-gray-400 text-gray-500 ">
                  +98 910 930 6236
                </p>
              </div>
            </div>
            <div className="flex gap-2  ">
              <div>
                <svg
                  className="stroke-[#2662d9]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div>
                <h4 className="font-medium text-gray dark:text-white">
                  Location
                </h4>
                <p className="text-sm dark:text-gray-400 text-gray-500 ">
                Tehran, Iran 
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-lg font-semibold text-gray dark:text-white ">
              Connect with me
            </p>
            <div className="flex gap-4 ">
              <a
                href="https://github.com/elmira1385"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className=" p-3 rounded-full bg-[#e7eff5] group hover:bg-[#2662d9] dark:bg-[#0B1523] transition-colors"
              >
                <svg
                  className="stroke-gray-600 group-hover:stroke-white dark:stroke-gray-400 dark:group-hover:stroke-black"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
              </a>
              <a 
                href="elmirashokriyan64@gmail.com"
                rel="email"
                aria-label="email"
                className=" p-3 rounded-full bg-[#e7eff5] group hover:bg-[#2662d9] dark:bg-[#0B1523] transition-colors"
              >
                <svg  className="stroke-gray-600 group-hover:stroke-white dark:stroke-gray-400 dark:group-hover:stroke-black"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                 
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
              </a>
              <a
                href="/"
                rel="linkedin"
                aria-label="linkedin"
                className=" p-3 rounded-full bg-[#e7eff5] group hover:bg-[#2662d9] dark:bg-[#0B1523] transition-colors"
              >
                <svg
                  className="stroke-gray-600 group-hover:stroke-white dark:stroke-gray-400 dark:group-hover:stroke-black"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              
            </div>
          </div>
        </div>
        <form  className="flex flex-col flex-wrap gap-6 bg-white p-6 dark:bg-[#020817] shadow-2xs rounded-lg  shadow-gray-300 dark:shadow-none dark:border-2 border-gray-900">
           <div className="flex flex-col flex-wrap sm:flex-row gap-4">
             <div className="flex flex-col gap-2">
              <label className="font-medium text-gray dark:text-white text-sm">Your Name</label>
              <input  {...register("name",{
                required:true
              })}  placeholder="eli" className="border bg-[#f7fafc] dark:bg-transparent  rounded-xl w-full sm:w-75  placeholder:text-gray-400 placeholder:text-sm dark:border-2 dark:border-gray-900 border-gray-200  p-2 focus:outline-none focus:border-[#d0ddf6] dark:focus:border-[#2662d9]  dark:text-gray-400 text-gray-500 text-sm sm:text-base" type="text" />
            </div>
             <div className="flex flex-col gap-2">
              <label className="font-medium text-gray dark:text-white text-sm">Your Email</label>
              <input {...register("email",{
                required:true
              })}  placeholder="eli@gmail.com" className="border bg-[#f7fafc] dark:bg-transparent focus:outline-none focus:border-[#d0ddf6] dark:focus:border-[#2662d9] rounded-xl w-full  sm:w-75  placeholder:text-gray-400 border-gray-200  placeholder:text-sm  dark:border-2 dark:border-gray-900 p-2 focus:outline-[#D8E2F6] focus:dark:outline-[#2662d9] dark:text-gray-400 text-gray-500 text-sm sm:text-base" type="email" />
            </div>
           </div>
           <div className="flex flex-col flex-wrap gap-2">
              <label className="font-medium text-gray dark:text-white text-sm">Subject</label>
              <input  {...register("Subject",{
                required:true
              })}  placeholder="How can I help you?" className="border bg-[#f7fafc] dark:bg-transparent rounded-xl w-full  placeholder:text-gray-400 placeholder:text-sm dark:border-2 dark:border-gray-900 border-gray-200  p-2 focus:outline-none focus:border-[#d0ddf6] dark:focus:border-[#2662d9]  dark:text-gray-400 text-gray-500 text-sm sm:text-base" type="text" />
            </div>
           <div className="flex flex-col flex-wrap gap-2">
              <label className="font-medium text-gray dark:text-white text-sm">Message</label>
               <textarea placeholder="your message here..." className="border bg-[#f7fafc] dark:bg-transparent h-30 rounded-xl w-full  placeholder:text-gray-400 placeholder:text-sm dark:border-2 dark:border-gray-900 border-gray-200  p-2 focus:outline-none focus:border-[#d0ddf6] dark:focus:border-[#2662d9]  dark:text-gray-400 text-gray-500 text-sm sm:text-base" {...register("Message",{
                required:true
              })} name="Message" >

               </textarea>
            </div>
             <button className="bg-primary  shadow-lg/45 shadow-blue-700 hover:shadow-lg/65 flex gap-2 justify-center items-center py-2 px-3 rounded-lg">
            <p className="text-white font-medium text-sm dark:text-black">
              Send Message
            </p>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
