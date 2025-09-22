import {
  BellIcon,
  CalendarIcon,
  FileTextIcon,
  GlobeIcon,
  InputIcon,
} from "@radix-ui/react-icons";

import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { useNavigate } from "react-router-dom";
import GridSvg from "@/assets/Group 5.jpeg";
import grid2 from "@/assets/grid2.jpeg";
import grid3 from "@/assets/grid3.jpeg";
import grid4 from "@/assets/grid4.jpeg";
import grid5 from "@/assets/grid5.jpeg";

const features = [
  {
    Icon: FileTextIcon,
    name: "Moon & Planet Tracker",
    description: "Track lunar phases and planetery positions.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    backgroundImage: GridSvg,
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: InputIcon,
    name: "Star Map & Sky Chart",
    description: "Explore tonight's sky with interactive star maps.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-50 -top-20 opacity-80 object-cover" />,
    backgroundImage: grid2,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: GlobeIcon,
    name: "Telescope Simulator",
    description: "See the universe with different lenses.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20" />,
     backgroundImage: grid3,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: CalendarIcon,
    name: "Astronomy Calculators",
    description: "Calculate distance , weights and travel times.",
    href: "/calculator",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
     backgroundImage: grid4,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: BellIcon,
    name: "Learning Tools",
    description:
      "Interactive guides & constellation explorer.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
     backgroundImage: grid5,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
];

function BentoDemo() {
  const navigate = useNavigate();
  return (
    <div>
    <BentoGrid className="lg:grid-rows-3 mt-25">
      
      {features.map((feature) => (
        <BentoCard
          key={feature.name}
          {...feature}
          onClick={
            feature.name === "Astronomy Calculators"
              ? () => navigate("/calculator")
              : undefined
          }
        />
      ))}
    </BentoGrid>
    </div>
  );
}

export default BentoDemo;
