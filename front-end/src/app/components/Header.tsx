import Image from "next/image";
import styles from "../page.module.css";
import { Box, Typography, Container } from "@mui/material";

const Header = () => {
  return (
    <Box className={styles.mainHeader}>
      <Container>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Image src={"/images/logo.svg"} height={80} width={160} alt="logo" />
          <Typography
            component="p"
            variant="body1"
            color="#FFF"
            className={styles.mainHeading}
          >
            SME HealthCheck - Get Started
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
