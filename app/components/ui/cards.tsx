import { HoverEffect } from "./card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-7xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}

export const projects = [
  {
    title: "Amit Kumar, New Delhi",
    description:
      "I couldn't be happier with how the team at Spaces contributed to shaping our office space. Their commitment to incorporating natural light and green elements has created a workspace that feels energizing and conducive to creativity.",
  },
  {
    title: "Rajesh And Priya Gupta, Mumbai",
    description:
      "We are delighted with the transformation of our home by Manjusha. Her blend of traditional Indian aesthetics with futuristic design elements created a space that feels both culturally rich and refreshingly modern. A big Kudos!. ",
  },
  {
    title: "Ananya And Arjun, Bengaluru",
    description:
      "The team at MTC Space, led by Kanika, understood our desire for a home that reflects our love for nature. Their eco-friendly approach and use of natural materials have made our living space not only beautiful but also sustainable. Hats off to their work and I would highly recommend this to everyone around!",
  },
];
