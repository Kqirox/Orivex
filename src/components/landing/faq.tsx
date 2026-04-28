import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: 'What is Learn_ault?',
    answer:
      'Learn_ault is an innovative platform where you can learn new skills and earn rewards simultaneously. We combine education with incentives to keep you motivated on your learning journey.',
  },
  {
    question: 'How do I earn rewards?',
    answer:
      'You earn rewards automatically by completing learning modules, passing quizzes, and actively participating in community challenges.',
  },
  {
    question: 'Are certificates recognized?',
    answer:
      'Yes, our certificates are partnered with industry leaders and can be verified seamlessly for absolute authenticity.',
  },
  {
    question: 'Is it free to use?',
    answer:
      'We offer a robust free tier to get you started, along with premium pathways for advanced certifications and higher earning potential.',
  },
  {
    question: 'Do I need crypto knowledge?',
    answer:
      'Not at all! Our platform is designed to be incredibly user-friendly for beginners. Any technical aspects operate behind the scenes.',
  },
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-sans font-extrabold text-gray-900 mb-10 text-center">
        Frequently Asked Questions
      </h2>

      <div className="w-full max-w-3xl flex flex-col space-y-4">
        {faqData.map((item, index) => {
          const isOpen = openIndex === index;
          const panelId = `faq-panel-${index}`;

          return (
            <div
              key={index}
              className={`border ro       isOpen ? 'border-gray-300 shadow-sm' : 'border-gray-200'
              }`}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full min-h-[44px] flex items-center justify-between p-4 sm:p-5 bg-white hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 transition-colors cursor-pointer group"
                aria-expanded={isOpen}
                aria-controls={panelId}
              >
                <span className="font-semibold text-left text-gray-800 text-base sm:text-lg">
                  {item.question}
                </span>
                
                <span
                  className={`flex items-center justify-center w-8 h-8 rounded-full transition-transform duration-300 ease-in-out ${
                    isOpen ? 'rotate-180 text-gray-900 bg-gray-100' : 'rotate-0 text-gray-500 group-hover:bg-gray-100'
                  }`}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>

              <div
                id={panelId}
                role="region"
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <div className="p-4 sm:p-5 text-gray-700 bg-yellow-50 border-t border-gray-100 leading-relaxed text-sm sm:text-base">
                    {item.answer}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export defalt FAQ;
