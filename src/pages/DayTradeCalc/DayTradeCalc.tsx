import { useState, useEffect } from 'react';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast, ToastContainer } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import 'react-toastify/dist/ReactToastify.css';

import Button from '../../components/Button/Button';
import ComissionNote from '../../components/ComissionNote/ComissionNote';
import { ComissionNoteProps } from '../../components/ComissionNote/ComissionNoteProps';
import { Container } from './styles';
import Header from '../../components/Header/Header';
import Input from '../../components/Input/Input';

const DayTradeCalc = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [isNegative, setIsNegative] = useState<boolean>(false)
  const [comissionNotes, setComissionNotes] = useState<ComissionNoteProps[]>([])

  const formSchema = yup.object().shape({
    comissionNoteDate: yup.string().required('Passe a data da nota em questão'),
    notePositiveValue: yup.string(),
    noteNegativeValue: yup.string(),
    taxIncluded: yup.string()
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<any>({
    resolver: yupResolver(formSchema),
  });

  const onSubFunction = ({comissionNoteDate, notePositiveValue, noteNegativeValue, taxIncluded}: ComissionNoteProps) => {
    const newId =
    comissionNotes.length > 0 ? comissionNotes[comissionNotes.length - 1].id + 1 : 0;
    const newNote: ComissionNoteProps = {
      id: newId,
      comissionNoteDate: comissionNoteDate,
      notePositiveValue: notePositiveValue,
      noteNegativeValue: noteNegativeValue,
      taxIncluded: taxIncluded
    }

    const newNoteList: ComissionNoteProps[] = [...comissionNotes, newNote]

    setComissionNotes(newNoteList)

    reset()
  };

  const handleRmoveNote = (id: number) => {
    const newNoteList = comissionNotes.filter((note) => note.id !== id);
    setComissionNotes(newNoteList)
  }

  const condicionalInputRender = () => {
    return (
      !isNegative ? (
        <div>
          <p>{t("dayTrade.positiveNoteLiquid")}</p>
          <Input
            mask='currency'
            placeholder='Digite o lucro liquido da nota'
            name='notePositiveValue'
            register={register}
            width="350px"
            color={"var(--green)"}
          />

          <p>{t("dayTrade.includeTax")}</p>
          <Input
            mask='currency'
            placeholder='Digite o valor do IR retido'
            name='taxIncluded'
            register={register}
            width="350px"
          />
        </div>
      ) : (
        <div>
          <p>{t("dayTrade.negativeNoteLiquid")}</p>
          <Input
            mask='currency'
            placeholder='Digite o prejuízo liquido da nota'
            name='noteNegativeValue'
            register={register}
            width="350px"
            color={"var(--red)"}
          />
        </div>
      )
    )
  }

  const renderNotes = () => {
    return comissionNotes?.map((note, index) => {
      return (
        <ComissionNote
          id={note.id}
          key={index}
          comissionNoteDate={note.comissionNoteDate}
          noteValue={note.noteNegativeValue ? ` -${note.noteNegativeValue}` : note.notePositiveValue}
          taxIncluded={note.taxIncluded}
          onClick={() => handleRmoveNote(note.id)}
        />
      )
    })
  }

  useEffect(() => {
    toast.error(errors.comissionNoteDate?.message);
  }, [errors]);

  return (
    <Container>
      <ToastContainer />
      <Header />
      <div className="buttonPlace">
        <Button
          setBackground="var(--lime)"
          setColor="var(--white)"
          setFont="18px"
          setHeight="30px"
          setWidth="120px"
          onClick={() => navigate('/result')}
        >
          {t('button.result')}
        </Button>
      </div>
      <div className="componentMain">
        <div className='leftSide'>
          <div>
            <h2>{t('dayTradeCalc.leftSideTitle')}</h2>
            <div className='conditionalButtons'>
              <Button
                setBackground="var(--lime)"
                setColor="var(--white)"
                setFont="18px"
                setHeight="30px"
                setWidth="120px"
                onClick={() => setIsNegative(false)}
              >
                {t('button.isPositive')}
              </Button>
              <Button
                setBackground="var(--red)"
                setColor="var(--white)"
                setFont="18px"
                setHeight="30px"
                setWidth="120px"
                onClick={() => setIsNegative(true)}
              >
                {t('button.isNegative')}
              </Button>
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubFunction)}>
            <div>
              <p>{t("dayTrade.dateLabel")}</p>
              <Input
                mask='comissionDate'
                placeholder='dd/MM'
                name='comissionNoteDate'
                register={register}
                width="350px"
                error={errors.comissionNoteDate ? true : false}
              />
            </div>

            {condicionalInputRender()}

            <Button
              setBackground="var(--sky-blue)"
              setColor="var(--white)"
              setFont="18px"
              setHeight="30px"
              setWidth="120px"
              type='submit'
            >
              {t('button.registerNote')}
            </Button>

          </form>
        </div>
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
