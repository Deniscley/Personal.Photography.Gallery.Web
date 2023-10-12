import { CircularProgress } from "@mui/material";

export default function Spinner() {
  return (
    <div>
      <p style={{ textAlign: "right", marginTop: "10rem" }}>
        <CircularProgress size={38} color="warning" /> Carregando...
      </p>
    </div>
  );
}
