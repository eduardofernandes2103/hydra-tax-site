import { useTranslation } from "react-i18next";
import Button from "../Button/Button";
import { ComissionNoteProps } from "./ComissionNoteProps";
import { Container } from "./styles";

const ComissionNote = ({
  comissionNoteDate,
  noteValue,
  taxIncluded,
  onClick,
}: ComissionNoteProps) => {
  const { t } = useTranslation();

  return (
    <Container isNegative={noteValue?.includes("-") ? true : false}>
      <p>{comissionNoteDate}</p>
      <span>
        {t("comissionNote.currencySymbol")}
        {noteValue}
      </span>
      <p>
        {t("comissionNote.taxText")}
        <span className="tax">
          {t("comissionNote.currencySymbol")}
          {taxIncluded ? taxIncluded : "0,00"}
        </span>
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
