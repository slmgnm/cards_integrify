import { useNavigate } from "react-router-dom";

  const Button = () => {
  const navigate = useNavigate();
  navigate("/");
  return (
    <>
      <button className="back-button" onClick={() => navigate("/")}>Back</button>
    </>
  );
};
export default Button;
