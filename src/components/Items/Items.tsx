import { useImperativeHandle, forwardRef, useState } from "react";
import { ItemsProps } from "./ItemsProps";
import { useTranslation } from "react-i18next";
import { Container } from "./styles";

const Item = forwardRef(
  ({ title, subtitle, isActive, progress, onClick }: ItemsProps, ref) => {
    const { t } = useTranslation();

    const [pauseProgress, setPauseProgress] = useState<boolean>(false);

    const handlePauseProgress = (status: boolean) => {
      if (isActive && progress > 0) {
        setPauseProgress(status);
      }
    };

    useImperativeHandle(ref, () => {
      return {
        isPausing: pauseProgress,
      };
    });

    return (
      <Container
        role="liItem"
        isActive={isActive ? isActive : null}
        onClick={onClick}
        progress={progress}
        onMouseEnter={() => {
          handlePauseProgress(true);
        }}
        onMouseLeave={() => {
          handlePauseProgress(false);
        }}
      >
        <h3>{t(`${title}`)}</h3>
        <p>{t(`${subtitle}`)}</p>
        <div className="emptyProgress">
          <div className="progress"></div>
        </div>
      </Container>
    );
  }
);

export default Item;
