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
        {" "}
        <h1> ABOUT </h1>
      </Box>

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
        Project created to consume the newsapi api.
      </Box>
    </>
  );
}
