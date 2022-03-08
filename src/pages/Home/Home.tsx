import { useEffect, useRef, useState } from "react";

import { GiHydra } from "react-icons/gi";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { Container } from "./styles";
import Item from "../../components/Items/Items";
import { Mock } from "./Home.mock";

const Home = () => {
  const childRef = useRef(null);
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [progress, setProgress] = useState<number>(0);
  const [selectedItem, setSelectedItem] = useState<number>(0);

  const renderItems = () => {
    return Mock.map(({ title, subtitle, path }, index) => {
      return (
        <Item
          key={index}
          title={title}
          subtitle={subtitle}
          onClick={() => navigate(t(`${path}`))}
          progress={selectedItem === index ? progress : 0}
          isActive={selectedItem === index ? true : false}
          ref={childRef}
        />
      );
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (childRef.current.isPausing) return;

      setProgress(progress + 1);
      if (progress > 99) {
        const nextItem = selectedItem === 1 ? 0 : 1;
        setSelectedItem(nextItem);

        setProgress(0);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [progress]);

  return (
    <Container>
      <div className="transparentBox">
        <div className="leftSide">
          <h2>
            <GiHydra />
          </h2>
          <ul className="appItems">{renderItems()}</ul>
        </div>
        <div className="rightSide">
          <div className="title">
            <div className="hydra">{t("home.company")}</div>
            <div className="slogan">{t("home.slogan")}</div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Home;
