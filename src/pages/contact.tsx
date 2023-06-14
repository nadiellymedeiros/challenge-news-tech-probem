import Navbar from "@/components/Navbar";
import Box from "@mui/material/Box";

export default function about() {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          mr: 5,
          p: 5,
          textAlign: "center",
          justifyContent: "center",
          fontSize: 20,
          fontWeight: 500,
        }}
      >
        <h1> Contact</h1>
      </Box>
    </>
  );
}
