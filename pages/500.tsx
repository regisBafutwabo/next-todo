import { useRouter } from "next/router";

import {
  Box,
  Typography,
} from "@mui/material";

export default function Custom500() {
  const { query } = useRouter();

  return (
    <Box sx={{ maxWidth: 500 }} marginX="auto" marginY={4}>
      <img src="/assets/oops.png" alt="oops!" style={{ width: "100%" }} />

      {process.env.NODE_ENV === "development" ? (
        <>
          <Typography variant="body1">{`Code - ${
            (query?.errorCode as string) || ""
          }`}</Typography>
          <Typography variant="body2">{`Message - ${
            (query?.errorMessage as string) || ""
          }`}</Typography>
        </>
      ) : (
        <h1>500 - Server-side error occurred</h1>
      )}
    </Box>
  );
}
