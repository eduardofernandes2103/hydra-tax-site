import { useTranslation } from "react-i18next";

const SwingTradeCalc = () => {
  const { t } = useTranslation();
  return <div>{t('swingTradeCalc.title')}</div>
}

export default SwingTradeCalc
