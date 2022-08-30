import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Container } from "@mui/system";
import { motion } from "framer-motion";
import { useMediaQuery } from 'react-responsive'

export default function BodySection(props) {
  const { maxWidth, header, children } = props;
  const isMobile = useMediaQuery({ query: '(max-width: 700px)' })
  return (
    <Container maxWidth={maxWidth}>
      <Box sx={{ width: "100%", marginY: "3em" }}>
        <motion.div
          initial={{ zoom: 0 }}
          whileInView={{ zoom: 1 }}
          viewport={{ once: true }}
          style={{transition: "all 2s ease-out 1s"}}
        >
          <Typography variant={isMobile ? 'h4' : 'h3'} paddingY='1em'>
            {"- " + header + " -"}
          </Typography>
        </motion.div>
        {children}
      </Box>
    </Container>
  );
}
