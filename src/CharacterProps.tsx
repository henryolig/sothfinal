import { ReactNode } from "react";

interface CharacterProps {
    name: string;
    icon: ReactNode;
    description: string;
    quote: string;
    index: number;
    interpretation: string;
  }

export default CharacterProps