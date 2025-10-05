import React from 'react';

const Contact = () => {
  return (
<section id="contact" className="py-16 px-6 md:px-12 lg:px-24">
    <h2 className="text-3xl font-bold text-center mb-4">Contact</h2>
    <p className="text-center text-gray-400 mb-12">connect for collaborations :</p>

    <div className="flex flex-col md:flex-row justify-center gap-8 text-sm">
      <div className="flex items-center gap-3">
        <i className="far fa-envelope text-xl"></i>
        <div>
          <p className="font-medium">Email :</p>
          <a href="mailto:yadri.amz@gmail.com" className="text-gray-400 hover:text-indigo-400">yadri.amz@gmail.com</a>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <i className="fab fa-github text-xl"></i>
        <div>
          <p className="font-medium">Github :</p>
          <a href="https://github.com/justyamzal" target="_blank" className="text-gray-400 hover:text-indigo-400">github.com/justyamzal</a>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <i className="fab fa-instagram text-xl"></i>
        <div>
          <p className="font-medium">Instagram :</p>
          <a href="https://www.instagram.com/rk_ymzl/" target="_blank" className="text-gray-400 hover:text-indigo-400">instagram.com/rk_ymzl/</a>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <i className="fab fa-linkedin text-xl"></i>
        <div>
          <p className="font-medium">Linkedin :</p>
          <a href="https://www.linkedin.com/in/yadribullah-hul-amtsal/" target="_blank" className="text-gray-400 hover:text-indigo-400">linkedin.com/in/yadribullah-hul-amtsal/</a>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Contact;