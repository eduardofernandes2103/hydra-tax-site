import { useTranslation } from "react-i18next";
import Button from "../Button/Button";
import { ComissionNoteProps } from "./ComissionNoteProps";
import { Container } from "./styles";

const ComissionNote = ({
  noteDate,
  liquidValue,
  tax,
  onClick,
}: ComissionNoteProps) => {
  const { t } = useTranslation();

  return (
    <Container>
      <p>{noteDate}</p>
      <span>
        {t("comissionNote.currencySymbol")}
        {liquidValue}
      </span>
      <p>
        {t("comissionNote.taxText")}
        {t("comissionNote.currencySymbol")}
        {tax}
      </p>
      <Button
        setBackground="var(--red)"
        setColor="var(--white)"
        setFont="18px"
        setWidth="80px"
        setHeight="30px"
        onClick={onClick}
      >
        {t("button.delete")}
      </Button>
    </Container>
  );
};

export default ComissionNote;
