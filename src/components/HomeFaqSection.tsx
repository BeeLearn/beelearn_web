import { Icon } from "@iconify/react";

import { faqs } from "@/data";

export default function HomeFaqSection() {
  return (
    <div className="flex flex-col items-center space-y-8 px-8 md:px-16">
      <div className="">
        <h1 className="text-2xl font-extrabold text-center text-violet-700 first-letter:capitalize md:text-4xl">
          frequently asked question
        </h1>
      </div>
      <div className="max-w-xl flex flex-col space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="flex flex-col space-y-2">
            <div className="flex space-x-2 items-center bg-stone-100 p-3 rounded-md">
              <p className="flex-1 first-letter:uppercase">{faq.title}</p>
              <Icon icon="mdi:help-circle" className="text-xl text-violet-900" />
            </div>
            <div className="bg-violet-200 p-4 rounded-md">
              <blockquote>{faq.answer}</blockquote>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
