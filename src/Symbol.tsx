import { Card, CardContent, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";
import SymbolProps from "./SymbolProps";

const Symbol = ({ name, icon, quote, index, interpretation }: SymbolProps) => {
    const [state, setState] = useState(0);
    const handleClick = () => setState((prev) => (prev + 1) % 2);

    return (
        <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
            <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleClick}
                className="cursor-pointer"
            >
                <Card className="p-6 bg-white shadow-lg rounded-2xl border border-gray-200 transition-all hover:shadow-2xl">
                    <CardContent className="text-center">
                        <div className="mb-4 flex justify-center">{icon}</div>
                        <Typography variant="h5" className="font-bold text-gray-900 mb-2">
                            {name}
                        </Typography>
                        <Typography
                            variant="body1"
                            className="text-gray-700 leading-relaxed text-lg"
                            style={{ whiteSpace: "pre-line" }}
                        >
                            {state === 0 ? quote : interpretation}
                        </Typography>
                    </CardContent>
                </Card>
            </motion.div>
        </Grid>
    );
};

export default Symbol;
