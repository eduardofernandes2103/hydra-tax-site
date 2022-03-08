import { useTranslation } from "react-i18next";

const DayTradeCalc = () => {
  const { t } = useTranslation();
  return <div>{t('dayTradeCalc.title')}</div>
}

export default DayTradeCalc
