import React, { useEffect, useState } from "react";
import { Typography, Box, Badge } from "@mui/material";
interface HeaderProps {
  title: string;
  subtitle: string;
  entete1: string;
  entete2: string;
  nombre1: string;
  nombre2: string;
}

const Header: React.FC<HeaderProps> = ({
  title,
  entete1,
  entete2,
  nombre1,
  nombre2,
}) => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatDate = (date: Date): string => {
    return date.toLocaleDateString();
  };

  const formatTime = (date: Date): string => {
    return date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  return (
    <Box
      m="0.3px"
      ml="40px"
      mr="40px"
      height="85px"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      bgcolor="#EEEEEE"
    >
      <Box>
        <Typography
          color="var(--color-text-black)"
          fontWeight="bold"
          sx={{ mb: "5px", fontSize: "15px", ml: "25px" }}
        >
          <span style={{ color: "#666" }}>Aujourd'hui:</span>
          {formatDate(currentDateTime)} |{formatTime(currentDateTime)}
        </Typography>
        <Typography
          variant="h2"
          color="var(--color-text-black)"
          fontWeight="bold"
          sx={{ mb: "5px", fontSize: "18px", ml: "25px" }}
        >
          {title}
        </Typography>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="flex-end"
        marginRight="50px"
      >
        <Box>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Box
              color="rgb(82, 126, 219)"
              mb="0.2px"
              sx={{
                mb: "3px",
                fontSize: "18px",
                ml: "25px",
                fontWeight: "bold",
              }}
            >
              {nombre1}
            </Box>
            <Typography
              variant="h2"
              color="var(--color-text-black)"
              fontWeight="bold"
              sx={{ mb: "5px", fontSize: "18px", ml: "25px" }}
            >
              {entete1}
            </Typography>
          </Box>
        </Box>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Box
            color="rgb(82, 126, 219)"
            mb="0.5px"
            sx={{
              mb: "3px",
              fontSize: "18px",
              ml: "25px",
              fontWeight: "bold",
            }}
          >
            {entete2 !== "" && <Badge>{nombre2}/780000</Badge>}
          </Box>
          <Typography
            variant="h2"
            color="var(--color-text-black)"
            fontWeight="bold"
            sx={{ mb: "5px", fontSize: "18px", ml: "25px" }}
          >
            {entete2}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
