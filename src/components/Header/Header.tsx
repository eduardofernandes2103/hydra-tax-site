import { GiHydra } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Button from "../Button/Button";
import { Container } from "./styles";

const Header = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <Container>
      <div className="headerLogo">
        <GiHydra />
        <h1>{t("title")}</h1>
      </div>
      <Button
        setBackground="var(--white)"
        setColor="var(--strong-grey)"
        setFont="24px"
        setWidth="125px"
        setHeight="40px"
        onClick={() => navigate("/")}
      >
        {t("button.home")}
      </Button>
    </Container>
  );
};

export default Header;
