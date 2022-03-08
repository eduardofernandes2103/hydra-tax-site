import { useState, useEffect } from 'react';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import 'react-toastify/dist/ReactToastify.css';

import Button from '../../components/Button/Button';
import { ComissionNoteProps } from '../../components/ComissionNote/ComissionNoteProps';
import { FormComponentProps } from './FormComponentProps';
import Input from '../../components/Input/Input';
import { useComission } from '../../providers/comissionNotesProvider';

const FormComponent = ({ title }: FormComponentProps) => {
  const { t } = useTranslation();
  const { comissionNotes, addComission } = useComission()
  const profitStatus = [
    {
      status: false,
      name: "button.isPositive",
      color: "var(--lime)"
    },
    {
      status: true,
      name: "button.isNegative",
      color: "var(--red)"
    }
  ]

  const [isNegative, setIsNegative] = useState<boolean>(false)

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

  const onSubFunction = ({ comissionNoteDate, notePositiveValue, noteNegativeValue, taxIncluded }: ComissionNoteProps) => {
    const newId =
      comissionNotes.length > 0 ? comissionNotes[comissionNotes.length - 1].id + 1 : 0;
    const newNote: ComissionNoteProps = {
      id: newId,
      comissionNoteDate: comissionNoteDate,
      notePositiveValue: isNegative ? "0" : notePositiveValue,
      noteNegativeValue: isNegative ? noteNegativeValue: "0",
      taxIncluded: taxIncluded
    }

    addComission(newNote)

    reset()
  };

  const statusRender = () => {
    return (
      profitStatus.map((buttonStatus) => {
        return (
          <Button
            setBackground={buttonStatus.color}
            setColor="var(--white)"
            setFont="18px"
            setHeight="30px"
            setWidth="120px"
            onClick={() => setIsNegative(buttonStatus.status)}
          >{t(buttonStatus.name)}</Button>
        )
      })
    )
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

  return (
    <div className='leftSide'>
      <div>
        <h2>{t(title)}</h2>
        <div className='conditionalButtons'>
          {statusRender()}
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
  )
}

export default FormComponent
