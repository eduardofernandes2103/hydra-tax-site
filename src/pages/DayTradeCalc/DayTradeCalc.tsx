import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import 'react-toastify/dist/ReactToastify.css';

import Button from '../../components/Button/Button';
import ComissionNote from '../../components/ComissionNote/ComissionNote';
import { Container } from './styles';
import FormComponent from '../../components/FormComponent/FormComponent';
import Header from '../../components/Header/Header';
import { currencyFormat } from '../../utils/format';
import { useResult } from '../../providers/resultProvider';
import { useComission } from '../../providers/comissionNotesProvider';

const DayTradeCalc = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { insertResults } = useResult()
  const { comissionNotes, removeComission } = useComission()

  const handleGenerateDarf = () => {
    const positiveNotes = comissionNotes.filter((note) => note.notePositiveValue)
    const negativeNotes = comissionNotes.filter((note) => note.noteNegativeValue)

    const days = comissionNotes.length
    const positiveTotal = positiveNotes.reduce((result, acc) => parseInt(currencyFormat(acc.notePositiveValue)) + result, 0)
    const negativeTotal = negativeNotes.reduce((result, acc) => parseInt(currencyFormat(acc.noteNegativeValue)) + result, 0)
    const totalIrTax = positiveNotes.reduce((result, acc) => parseInt(currencyFormat(acc.taxIncluded)) + result, 0)
    const profit = positiveTotal - negativeTotal
    const darf = (profit * 0.20) - totalIrTax

    const result = {
      days: days,
      positiveTotal: positiveTotal,
      negativeTotal: negativeTotal,
      profit: profit,
      totalIrTax: totalIrTax,
      darfValue: darf
    }

    insertResults(result)

    navigate('/result')
  }

  const renderNotes = () => {
    return comissionNotes.map((note, index) => {
      return (
        <ComissionNote
          id={note.id}
          key={index}
          comissionNoteDate={note.comissionNoteDate}
          noteValue={note.noteNegativeValue ? ` -${note.noteNegativeValue}` : note.notePositiveValue}
          taxIncluded={note.taxIncluded}
          onClick={() => removeComission(note.id)}
        />
      )
    })
  }

  return (
    <Container>
      <Header />
      <div className="buttonPlace">
        <Button
          setBackground="var(--lime)"
          setColor="var(--white)"
          setFont="18px"
          setHeight="30px"
          setWidth="120px"
          onClick={() => handleGenerateDarf()}
        >
          {t('button.result')}
        </Button>
      </div>
      <div className="componentMain">
        <FormComponent title="dayTradeCalc.leftSideTitle" />
        <div className='rightSide'>
          <h2>{t('dayTradeCalc.rightSideTitle')}</h2>
          <div className='notesDisplay'>
            {renderNotes()}
          </div>
        </div>
      </div>
    </Container>
  )
}

export default DayTradeCalc
