import React from 'react';
import Container from './container';
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/solid';

export default function Faq() {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? 'transform rotate-180' : ''
                      } w-5 h-5 text-indigo-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: 'How many lessons will I need to learn to drive?',
    answer:
      'This depends very much on your general skills, age and the time you can invest in your driving lessons. According to official statistics, the average person takes about 45 lessons with an instructor plus 22 private hours to pass the test. Generally, learners who have been cycling, riding a moped or have similar experience will learn to drive more easily. However, our friendly and professional instructors are trained to teach also those who are less skilled!',
  },
  {
    question:
      'I am very anxious, will I need more driving lessons than other learners?',
    answer:
      'From experience, there is generally no significant difference between the amount of lessons needed for anxious learners and those who are relatively confident. It is natural for new learners to think that they are more anxious than others, but they will overcome this problem throughout the course. Remember, learning to drive with SAS Driving School is supposed to be fun as wel',
  },
  {
    question: 'What is the most efficient way to learn to drive? ',
    answer:
      'This depends very much on individual preferences, but most learners naturally become tired and less attentive after 1.5-2 hours of driving tuition. Therefore it is recommended not to exceed 2 hours of lessons at a time or to have a break in-between. In order to maintain the efficiency of your learning, it is important to continue with driving lessons on a very regular basis',
  },
  {
    question: 'Do I have to bring my own car? ',
    answer:
      "No, the driving lessons will be done in the school's dual controller car.",
  },
];
