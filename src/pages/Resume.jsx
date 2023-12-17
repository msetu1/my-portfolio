const Resume = () => {
  return (
    <div className="min-h-screen lg:text-primary-content lg:bg-black pt-32 mb-10">
      <h1 className="text-4xl text-center font-bold text-[#15803d]">
        My Resume
      </h1>
      <h1 className="text-2xl font-bold text-center my-5">Summary</h1>
      <p className="max-w-4xl mx-auto px-10 lg:px-0">
      Highly motivated Front End Developer with a passion for creating efficient and scalable web applications. Seeking an entry-level position to apply my technical skills, collaborate with a talented team, and contribute to the development of innovative software solutions. Committed to continuous learning and staying updated with the latest technologies in the MERN stack.
      </p>
      <div className="">
        <h1 className="text-2xl text-center font-bold text-[#15803d] mt-10">
          Educational Qualifications
        </h1>
        <div className="flex flex-col lg:flex-row max-w-4xl mx-auto gap-4 mt-5">
          <div className="lg:w-[50%] ">
            <p>2018-2021</p>
          <h1 className="text-xl  font-bold text-[#15803d] my-2">
          Secondary school Certificate
        </h1>
        <h1 className="text-md font-semibold ">Bangula M.L High School</h1>
          </div>
          <div className="lg:w-[50%]">
            <p>2021-2025</p>
          <h1 className="text-xl font-bold text-[#15803d] my-2">
          Diploma In Computer Science & Technology
        </h1>
        <h1 className="text-md font-semibold">Shyamoli Ideal Polytechnic Institute</h1>
          </div>
        </div>
      </div>
{/* skills  */}
      <div className="">
        <h1 className="text-2xl text-center font-bold text-[#15803d] mt-10">
          Skills
        </h1>
        <div className="flex flex-col lg:flex-row max-w-4xl mx-auto gap-4 mt-5">
          <div className="w-[50%] ">
           
          <h1 className="text-xl  font-bold text-[#15803d] my-2">
          Tools
        </h1>
        <ul>
            <li className="text-xl font-semibold list-disc mb-2">Vs code</li>
            <li className="text-xl font-semibold list-disc mb-2">Github</li>
            <li className="text-xl font-semibold list-disc mb-2">Chrome dev tools</li>
            <li className="text-xl font-semibold list-disc mb-2">Vercel</li>
            <li className="text-xl font-semibold list-disc mb-2">Figma</li>
            
           </ul>
          </div>
          <div className="w-[50%] ">
          <h1 className="text-xl font-bold text-[#15803d] my-2">
          Comfortable
        </h1>
        <ul>
            <li className="text-xl font-semibold list-disc mb-2">JavaScript</li>
            <li className="text-xl font-semibold list-disc mb-2">React.js</li>
            <li className="text-xl font-semibold list-disc mb-2">React Hooks</li>
            <li className="text-xl font-semibold list-disc mb-2">HTML</li>
            <li className="text-xl font-semibold list-disc mb-2">CSS</li>
            
           </ul>
          </div>
        </div>
      </div>
      <div className="text-center pb-10 mt-10">
      <h1 className="text-xl  font-bold text-[#15803d] my-2">
      Languages
        </h1>
        <li className="text-xl font-semibold list-disc mb-2">Bangla-Native</li>
        <li className="text-xl font-semibold list-disc mb-2">English-Basic</li>
      </div>
    </div>
  );
};

export default Resume;
