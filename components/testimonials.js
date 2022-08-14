import Image from 'next/image';
import React from 'react';
import Container from './container';

import userOneImg from '../public/img/user1.jpg';
import userTwoImg from '../public/img/user2.jpg';
import userThreeImg from '../public/img/user3.jpg';

export default function Testimonials() {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              Arjun dai is calm, composed and professional instructor. I have
              learnt a lot from him. He helped me a lot to develop my driving
              skills. Thank You!
            </p>

            <Avatar image={userOneImg} name="Sarah Steiner" />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              Arjun is not only a great, skilled instructor, but he is also very
              kind and has extraordinary patience in him. If you are seeking for
              a driving instructor, He is definitely 100% highly recommended.
              Thank you SAS Driving school!
            </p>

            <Avatar image={userTwoImg} name="Dylan Ambrose" />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              Fantastic driving school with amazing instructors. Couldn't have
              done it without you. Thank you so much Arjun for your tips and
              guidance!
            </p>

            <Avatar image={userThreeImg} name="Gabrielle Winn" />
          </div>
        </div>
      </div>
    </Container>
  );
}

function Avatar(props) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        <Image
          src={props.image}
          width="40"
          height="40"
          alt="Avatar"
          layout="responsive"
          placeholder="blur"
        />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}

function Mark(props) {
  return (
    <>
      {' '}
      <mark className="text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
        {props.children}
      </mark>{' '}
    </>
  );
}
