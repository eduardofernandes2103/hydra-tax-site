import { useTranslation } from "react-i18next";

import { Container } from "./styles";
import { currencyToString } from '../../utils/format'
import Header from '../../components/Header/Header';
import { useResult } from '../../providers/resultProvider';

const Result = () => {
  const { t } = useTranslation();
  const { result } = useResult()

  const days = result.days
  const profit = `${t('comissionNote.currencySymbol')}${currencyToString(result.profit)}`
  const positveProfit = `${t('comissionNote.currencySymbol')}${result.positiveTotal ? currencyToString(result.positiveTotal) : "0,00"}`
  const negaitveProfit = `${t('comissionNote.currencySymbol')}${currencyToString(result.negativeTotal)}`
  const darf = result.darfValue > 2000 ? `${t('comissionNote.currencySymbol')}${currencyToString(result.darfValue)}` : null

  return (
    <Container isNegative={result.profit < 0 ? true : false}>
      <Header />
      <div className="resultDisplay">
        <h2>{t('result.title')}</h2>
        <div className="report">
          <h3>{t('result.profit')}<span>{profit}</span></h3>
          <p>{t('result.days')}{days ? days : "0"}</p>
          <p>{t('result.positveProfit')}{positveProfit}</p>
          <p>{t('result.negativeProfit')}{negaitveProfit}</p>
          {
            darf ? (
              <p>{t('result.darfOn')}{darf}</p>
            ) : (
              <p>{t('result.darfOff')}</p>
            )
          }
        </div>
      </div>
    </Container>
  )
}

export default Result
