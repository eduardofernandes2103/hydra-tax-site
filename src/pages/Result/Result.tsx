import { useTranslation } from "react-i18next";

const Result = () => {
  const { t } = useTranslation();
  return <div>{t('result.title')}</div>
}

export default Result
