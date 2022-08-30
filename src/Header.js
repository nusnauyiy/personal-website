import { Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

export default function Header(props) {
  const isMobile = useMediaQuery({ query: "(max-width: 700px)" });
  const isShort = useMediaQuery({ query: "(max-height: 500px)" });
  return (
    <motion.div
      style={{
        height: "100vh",
        transition: "all 2s ease-in-out 0.5s",
      }}
      className='centered'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Stack>
        <Typography variant={isMobile || isShort ? "h2" : "h1"}>
          Hello, I am Suzette.
        </Typography>
        {props.children}
      </Stack>
    </motion.div>
  );
}
