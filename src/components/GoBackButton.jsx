import { useNavigate } from "react-router-dom";

const GoBackButton = ({ buttonText }) => {
  let navigate = useNavigate();

  const backPage = () => navigate(-1);

  return (
    <button onClick={backPage}>
      <span>{buttonText}</span>
    </button>
  );
};

export default GoBackButton;
