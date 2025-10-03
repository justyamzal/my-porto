import React from 'react';

const Contact = () => {
  return (
<section id="contact" class="py-16 px-6 md:px-12 lg:px-24">
    <h2 class="text-3xl font-bold text-center mb-4">Contact</h2>
    <p class="text-center text-gray-400 mb-12">connect for collaborations :</p>

    <div class="flex flex-col md:flex-row justify-center gap-8 text-sm">
      <div class="flex items-center gap-3">
        <i class="far fa-envelope text-xl"></i>
        <div>
          <p class="font-medium">Email :</p>
          <a href="mailto:yadri.amz@gmail.com" class="text-gray-400 hover:text-indigo-400">yadri.amz@gmail.com</a>
        </div>
      </div>

      <div class="flex items-center gap-3">
        <i class="fab fa-github text-xl"></i>
        <div>
          <p class="font-medium">Github :</p>
          <a href="https://github.com/justyamzal" target="_blank" class="text-gray-400 hover:text-indigo-400">github.com/justyamzal</a>
        </div>
      </div>

      <div class="flex items-center gap-3">
        <i class="fab fa-instagram text-xl"></i>
        <div>
          <p class="font-medium">Instagram :</p>
          <a href="https://www.instagram.com/rk_ymzl/" target="_blank" class="text-gray-400 hover:text-indigo-400">instagram.com/rk_ymzl/</a>
        </div>
      </div>

      <div class="flex items-center gap-3">
        <i class="fab fa-linkedin text-xl"></i>
        <div>
          <p class="font-medium">Linkedin :</p>
          <a href="https://www.linkedin.com/in/yadribullah-hul-amtsal/" target="_blank" class="text-gray-400 hover:text-indigo-400">linkedin.com/in/yadribullah-hul-amtsal/</a>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Contact;