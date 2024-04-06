import React from "react";

export default function About() {
  return (
    <div class="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-10">
      <img
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
        alt=""
        class="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      />
      <div
        class="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        aria-hidden="true"
      >
        <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"></div>
      </div>
      <div
        class="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        aria-hidden="true"
      >
        <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"></div>
      </div>
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:mx-0">
          <h3 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            About us
          </h3>
          <p class="mt-6 text-lg leading-8 text-gray-300">
            MentorMatch is a platform designed to bridge the gap between mentors
            and mentees, empowering individuals to achieve their full potential
            through meaningful connections and knowledge exchange.
          </p>
          <p class="mt-6 text-lg leading-8 text-gray-300">
            Our mission is to democratize access to mentorship by providing a
            user-friendly platform that connects people from diverse backgrounds
            and experiences. Whether you're a seasoned professional looking to
            give back or a newcomer seeking guidance, MentorMatch offers a
            supportive community where everyone can thrive.
          </p>
          <p class="mt-6 text-lg leading-8 text-gray-300">
            At MentorMatch, we believe in the power of mentorship to drive
            personal and professional growth. By connecting with mentors who
            share your passions and expertise, you can gain valuable insights,
            expand your network, and overcome challenges with confidence
          </p>
          <p class="mt-6 text-lg leading-8 text-gray-300">
            Join MentorMatch today and embark on a journey of learning, growth,
            and discovery. Together, we can unlock new opportunities and create
            a brighter future for all.
          </p>
        </div>
        <div class="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div class="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
            <a href="#">
              Open roles <span aria-hidden="true">&rarr;</span>
            </a>
            <a href="#">
              Internship program <span aria-hidden="true">&rarr;</span>
            </a>
            <a href="#">
              Our values <span aria-hidden="true">&rarr;</span>
            </a>
            <a href="#">
              Meet our leadership <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
          <dl class="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            <div class="flex flex-col-reverse">
              <dt class="text-base leading-7 text-gray-300">
                Offices worldwide
              </dt>
              <dd class="text-2xl font-bold leading-9 tracking-tight text-white">
                12
              </dd>
            </div>
            <div class="flex flex-col-reverse">
              <dt class="text-base leading-7 text-gray-300">
                Full-time colleagues
              </dt>
              <dd class="text-2xl font-bold leading-9 tracking-tight text-white">
                300+
              </dd>
            </div>
            <div class="flex flex-col-reverse">
              <dt class="text-base leading-7 text-gray-300">Hours per week</dt>
              <dd class="text-2xl font-bold leading-9 tracking-tight text-white">
                40
              </dd>
            </div>
            <div class="flex flex-col-reverse">
              <dt class="text-base leading-7 text-gray-300">Paid time off</dt>
              <dd class="text-2xl font-bold leading-9 tracking-tight text-white">
                Unlimited
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
