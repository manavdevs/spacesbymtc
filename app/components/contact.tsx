"use client";
import { Label } from "../components/label";
import { Input } from "../components/input";
import { cn } from "@/lib/utils";
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

    console.log("Form Data:", data);

    try {
      await addDoc(collection(db, 'contacts'), data);
      console.log("Form submitted and data saved to Firestore");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <div className="relative min-h-screen flex justify-center items-center bg-gray-900 ">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover brightness-75"
        src={'videos/background.mp4'}
        autoPlay
        loop
        muted
      />

      <div className="flex flex-col md:flex-row max-w-6xl w-full p-8 space-y-8 md:space-y-0 md:space-x-8 z-10">
        {/* Text Container */}
        <div className="flex-1 flex flex-col justify-center text-white">
          <h1 className="text-4xl font-bold mb-4">Transform Your Space</h1>
          <p className="text-lg">
            Consult us for a new modern decor and turn your space into a masterpiece.
          </p>
        </div>

        {/* Form Container */}
        <div className="flex-1 bg-[#1F2937] rounded-lg p-8 shadow-lg">
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
              className="w-full h-12 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
              type="submit"
            >
              Book your appointment
            </button>
          </form>
        </div>
      </div>
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
