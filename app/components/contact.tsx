"use client";
import { useState } from "react";
import { Label } from "../components/label";
import { Input } from "../components/input";
import { cn } from "@/lib/utils";
import { db, collection, addDoc } from '@/firebase-config';
import { FiMessageCircle } from "react-icons/fi"; 
import { useRouter } from "next/navigation";

export function SignupFormDemo() {
  const [formVisible, setFormVisible] = useState(false); 
  const [submitMessage, setSubmitMessage] = useState(""); 
  const router = useRouter();

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

    console.log("Form Data:", data);

    try {
      await addDoc(collection(db, 'contacts'), data);
      console.log("Form submitted and data saved to Firestore");
      setSubmitMessage("Thank you for booking your appointment!");
    } catch (error) {
      console.error("Error adding document: ", error);
      setSubmitMessage("There was an error submitting the form. Please try again.");
    }
  };

  const toggleForm = () => {
    setFormVisible(!formVisible);
    setSubmitMessage("");
  };

  const handlePageClick = () => {
    if (formVisible) {
      setFormVisible(false);
      setSubmitMessage("");
    } else {
      router.push("/");
    }
  };

  const handleFormClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation(); // Prevent closing the form when clicking inside it
  };

  return (
    <div onClick={handlePageClick}>
      <button
        className="fixed bottom-[20px] right-[20px] z-50 p-4 bg-[#94BD20] text-white rounded-full shadow-lg hover:bg-black transition"
        onClick={toggleForm}
      >
        <FiMessageCircle size={24} />
      </button>
      {formVisible && (
        <div 
          className="fixed inset-0 flex justify-end items-center z-50" 
          onClick={handlePageClick} // Close the form on outside click
        >
          <div 
            className="w-full max-w-md bg-[#1F2937] rounded-lg p-8 shadow-lg sm:max-w-[90%] sm:h-auto sm:mx-4 sm:my-4 lg:max-w-[40%]" // Adjust size for mobile
            onClick={handleFormClick} // Prevent click propagation inside form
          >
            <form onSubmit={handleSubmit}>
              <LabelInputContainer className="mb-4">
                <Label htmlFor="Firstname">Full Name</Label>
                <Input id="Firstname" name="Firstname" placeholder="Enter your full name" type="text" />
              </LabelInputContainer>
              <LabelInputContainer className="mb-4">
                <Label htmlFor="Phonenumber">Mobile</Label>
                <Input id="Phonenumber" name="Phonenumber" placeholder="Enter your mobile number" type="text" />
              </LabelInputContainer>
              <LabelInputContainer className="mb-4">
                <Label htmlFor="Email">Email</Label>
                <Input id="Email" name="Email" placeholder="Enter your email address" type="email" />
              </LabelInputContainer>
              <LabelInputContainer className="mb-8">
                <Label htmlFor="Query">Your Query</Label>
                <Input id="Query" name="Query" placeholder="Describe your query" type="text" />
              </LabelInputContainer>

              <button
                className="w-full h-12 bg-[#94BD20] text-white font-semibold rounded-lg hover:bg-black transition"
                type="submit"
              >
                Book your appointment
              </button>
            </form>
            {submitMessage && (
              <p className="mt-4 text-white text-center">{submitMessage}</p> // Display the message
            )}
          </div>
        </div>
      )}
    </div>
  );
}

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
