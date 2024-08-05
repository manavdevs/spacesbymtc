"use client";
import React from "react";
import Image from 'next/image';
import Link from "next/link";
import { CircleArrowRight, CircleArrowLeft } from "lucide-react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "@/app/lib/utils";
import cursorImage from '@/public/images/cursor.png';
import messageImage from '@/public/images/message.png';
import { db, collection, addDoc } from '@/firebase-config'; 

export function SignupFormDemo() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      Firstname: formData.get('Firstname') as string || '',
      Lastname: formData.get('Lastname') as string || '',
      Email: formData.get('Email') as string || '',
      Phone: formData.get('Phonenumber') as string || '',
      Query: formData.get('Query') as string || '',
    };

    console.log("Form Data:", data);  // Check what data is being captured

    try {
      await addDoc(collection(db, 'contacts'), data);
      console.log("Form submitted and data saved to Firestore");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#D6CFCB] flex flex-col items-center pt-16">
      <div className="flex max-w-5xl w-full ml-24 mt-16 mb-4 pb-4 space-x-8">
        {/* Form Container */}
        <div className="flex-1 max-w-md animate-fadeInLeft">
          <div className="relative p-4 md:p-8 shadow-input bg-white dark:bg-[#ddb892] rounded-none md:rounded-2xl">
            <div className="absolute top-0 -left-6 -mt-8 -ml-8 w-24 h-24">
              <Image src={cursorImage} alt="Cursor" layout="fill" objectFit="contain" />
            </div>
            <div className="absolute bottom-0 right-0 -mb-8 -mr-8 w-24 h-24">
              <Image src={messageImage} alt="Message" layout="fill" objectFit="contain" />
            </div>
            <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
              Welcome to Spaces By MTC
            </h2>

            <form className="my-8" onSubmit={handleSubmit}>
              <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                <LabelInputContainer>
                  <Label htmlFor="Firstname">First name</Label>
                  <Input id="Firstname" name="Firstname" placeholder="" type="text" />
                </LabelInputContainer>
                <LabelInputContainer>
                  <Label htmlFor="Lastname">Last name</Label>
                  <Input id="Lastname" name="Lastname" placeholder="" type="text" />
                </LabelInputContainer>
              </div>
              <LabelInputContainer className="mb-4">
                <Label htmlFor="Email">Email Address</Label>
                <Input id="Email" name="Email" placeholder="" type="email" />
              </LabelInputContainer>
              <LabelInputContainer className="mb-4">
                <Label htmlFor="Phonenumber">Phone Number</Label>
                <Input id="Phonenumber" name="Phonenumber" placeholder="" type="text"/>
              </LabelInputContainer>
              <LabelInputContainer className="mb-8">
                <Label htmlFor="Query">Your Query</Label>
                <Input id="Query" name="Query" placeholder="" type="text"/>
              </LabelInputContainer>

              <button
                className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                type="submit"
              >
                Submit 
                <BottomGradient />
              </button>
            </form>
          </div>
        </div>

        {/* Box Container */}
        <div className="flex-1 text-center">
          <h1 className="text-7xl font-bold animate-fadeInRight">Connect With Us</h1>
          <p className="text-5xl py-5 animate-fadeInTop">
            Get in Touch
          </p>
        </div>
      </div>

      {/* Arrow Links */}
      <div className="flex justify-center -mt-16 ml-80 pl-96 gap-6">
        <Link href="/testimonials" className="text-3xl flex-row flex gap-2 justify-center items-center text-primary">
          <CircleArrowLeft size={33} />
          <span>Testimonials</span>
        </Link>
        <Link href="/" className="text-3xl flex-row flex gap-2 justify-center items-center text-primary">
          <span>Home</span>
          <CircleArrowRight size={33} />
        </Link>
      </div>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-[#d26565] to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-[#d26565] to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
