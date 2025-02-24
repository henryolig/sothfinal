import { useState } from 'react'
import { Card, CardContent, Container, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { TreePine, Palette, Car, CarFront, Flame, Phone, BicepsFlexed } from 'lucide-react';
import Character from './Character';
import Symbol from './Symbol';

const characters = [
  {
    name: "Max",
    icon: <Palette color={"#8e44ad"} />,
    description: "A quiet and artistic soul, struggling with expectations and traumatic violence.",
    quote: "'I do three trash paintings\non my best canvases. I am\nscared of slipping backward \
    without\nan art school application in front of me.'",
    interpretation: "Throughout Saints of the Household, he grapples with the tension between his artistic \
    identity and the expectations placed upon him. Art is both his passion and his refuge, yet he constantly \
    fears losing his sense of self if he fails to move forward. \
    I decided to represent max as a palette because he expresses himself and his turmoil through his art. \
    Max's struggle is not just about talent but about finding \
    the courage to believe in himself despite the weight of trauma and uncertainty."
  },
  {
    name: "Jay",
    icon: <Car color={"#3498db"}/>,
    description: "A defender of those around him, with talent often overseen because of his anger.",
    quote: "'Even though I know it'll hurt, I want to talk to him enough that I decide to take a small step, \
    as Grandpa said.'",
    interpretation: "Jay's journey through Saints of the Household is centered around his ability to act \
    on others' behalf, and towards the end of the book he begins to think about his own future more. \
    I chose to represent him as a car because when he began taking time to himself, he would drive away from their house. \
    Representing him learning to make his own path."
  },
  {
    name: "Fernando",
    icon: <TreePine color={"#27ae60"}/>,
    description: "Max and Jay's Grandfather of Bribri descent. He has a cabin in the woods and is very in \
    touch with his roots and with nature.",
    quote: "'He taught us to call our traditional land Talamanca. The land of mountains and jungle. Grandpa \
    Fernando reminded us that we are the people grown out of the earth itself.'",
    interpretation: "Grandpa Fernando is the most stable force in the boys' lives throughout Saints of the Household. \
    There aren't questions of his love like Nicole, and he has had more consisten strength than their mother. \
    I decided to represent him as a tree because he helped the boys connect with their roots and ancestry, \
    teaching them of their origins and grounding them with sound advise."
  },
  {
    name: "Nicole",
    icon: <Phone color={"#e74c3c"}/>,
    description: "As Max and Jay's cousin, Nicole often reaches out an arm when others at their school wouldn't.",
    quote: "'But she's always had empathy--even for the bullies. \
    Befriended most people at school. And I remember how Nicole cared for herself too...'",
    interpretation: "Nicole is a really sound rolemodel for Max and especially Jay throughout the book. \
    She is considerate but knows when to put her foot down in a non violent way. She came up with the idea \
    to use the security camera footage from the gas station to prove Luca's violent tendencies and ostrasize him. \
    This plan did nothing but display his own behavior, making it a fair way to expose somebody. I chose to use a \
    phone to represent her because she is very in-tune with modern culture and technology and is seen using it to the fullest."
  }
];

const symbols = [
  {
    name: "Strength",
    icon: <BicepsFlexed />,
    quote: "'It's a good strength, one I don't need to use to hurt. A useful strength, \
    and it has me crying.'",
    interpretation: "Strength is a very broad and powerful force throughout the book. It has been shown so often to cause \
    harm to others and to oneself, as Max and Jay's father used his strength and instilled a lifetime of trauma on his family. \
    Max and Jay also use their strength to beat Luca, setting many of the stories events in motion as they are ostrasized by many \
    and struggle with their own ability to hurt people. Ultimately, it is that same strength that can be used to undress Fernando's \
    house and provide good results.",
  },
  {
    name: "Car",
    icon: <CarFront />,
    quote: "'I take Dad's truck keys from the basket above the stove and toss them to Max. He smiles at me. \
    We are thinking, why the hell not?'",
    interpretation: "When reading Saints of the Household, it was clear to me that cars are used to symbolize the brother's freedom. \
    There are many moments where Max is with Melody in a car, and these moments are when he feels most freed as a character \
    as he is begining to draw more inspiration from around him and make decisions that aren't run through Jay. Jay also uses a car as an \
    escape when he gets in a fight with Max.",
  },
  {
    name: "Heat",
    icon: <Flame />,
    quote: "'I watch Mom. Each of her movements are times so every part of the meal comes out hot.'",
    interpretation: "Heat is used as a symbol relatively rarely within the book, but it almost always comes alongside Max and Jay's father. \
    Heat is used to describe the anger that their father has and the overwhelming tension in the household that persists even when he is \
    arrested.",
  }
];

const App = () => {
  return (
    <Container maxWidth="lg"
    style={{
      minHeight: "100vh",
      minWidth: "100vw",
      background: "linear-gradient(to right, #f8f9fa, #e9ecef)",
      padding: "40px",
      textAlign: "center",
    }}>      
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <Typography padding={1} variant="h3" component="h1" style={{ color: "#2c3e50", fontWeight: "bold"}}>
          Character Insights
        </Typography>
      </motion.div>
      <Typography padding={2} variant="h5" component="h5" style={{ color: "#2c3e50", fontWeight: "bold"}}>
        Click on each character card to see a quick description of them, a quote regarding them, 
        and my interpretation of their character as it regards to the story.</Typography>
      <Grid padding={4} container spacing={4} justifyContent="center">
        {characters.map((character, index) => (
          <Character key={index} index={index} {...character} />
        ))}
      </Grid>
      
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <Typography padding={1} variant="h3" component="h1" style={{ color: "#2c3e50", fontWeight: "bold"}}>
          Symbolic Insights
        </Typography>
      </motion.div>
      <Typography padding={2} variant="h5" component="h5" style={{ color: "#2c3e50", fontWeight: "bold"}}>
        Click on each symbol card to see a quote referencing them, 
      and my interpretation of their meaning.</Typography>
      <Grid container spacing={4} justifyContent="center">
        {symbols.map((symbol, index) => (
          <Symbol key={index} index={index} {...symbol} />
        ))}
      </Grid>
      <Typography padding={3} style={{ color: "#2c3e50", fontWeight: "bold"}}>I decided to build a website for my final project of Saints of the Household because I tend to write code better than words, 
        and there is a strong dichotomy of technology and nature within the novel, so leaning into one of those themes felt fitting. The dichotomy 
        isn't necessarily an antithesis of moral or ideal, but moreso in the way that nature and technology can be used to exhibit strength and influence
        others, whether through physical violence, the ability to drive away and escape, express yourself, or leak footage of somebody harassing another person. 
        <br></br><br></br>
        I decided to focus the most on Max, Jay, Nicole, and Fernando because it was more apperant the influence that the latter two had on the former two.
        They were integral to the growth of the boys, and by extension the plot as a whole.

      </Typography>
    </Container>
  );
};

export default App
