import { Button, Input } from '@biocad-test/ui';
import { useForm, Controller } from 'react-hook-form';
import { sequenceInputPattern } from './sequence-form.data';
import s from './SequenceForm.module.scss';
import { InputValues, useSequence } from 'store/sequence';

export const SequenceForm = () => {
  const {
    control,
    handleSubmit,
    watch,
    setError,
    clearErrors,
    formState: { errors }
  } = useForm<InputValues & { formError?: string }>({
    mode: 'onChange',
    defaultValues: {
      firstSeqValue: '',
      secondSeqValue: ''
    }
  });

  const { setAligned } = useSequence();

  const firstValue = watch('firstSeqValue');
  const secondValue = watch('secondSeqValue');

  const onSubmit = (data: InputValues) => {
    setAligned(data);
  };

  const lengthMismatch = firstValue.length > 0 && secondValue.length > 0 && firstValue.length !== secondValue.length;

  const makeFilteredChange = (onChange: (v: string) => void) => (raw: string) => {
    const upper = raw.toUpperCase();
    const hasInvalidChar = sequenceInputPattern.test(upper);

    if (hasInvalidChar) {
      setError('formError', {
        type: 'manual',
        message: 'Поле может содержать только латинские буквы аминокислот'
      });
    } else {
      clearErrors('formError');
    }

    const filtered = upper.replace(sequenceInputPattern, '');
    onChange(filtered);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={s.SequenceForm}>
      <Controller
        name="firstSeqValue"
        control={control}
        render={({ field }) => (
          <>
            <Input
              name="firstSeqValue"
              value={field.value}
              placeholder="Введите последовательность"
              onChange={makeFilteredChange(field.onChange)}
              className={s.SequenceForm__input}
            />
          </>
        )}
      />
      <Controller
        name="secondSeqValue"
        control={control}
        render={({ field }) => (
          <>
            <Input
              name="secondSeqValue"
              value={field.value}
              placeholder="Введите последовательность"
              onChange={makeFilteredChange(field.onChange)}
              className={s.SequenceForm__input}
            />
          </>
        )}
      />

      {errors.formError ? (
        <p className={s.SequenceForm__error}>{errors.formError.message}</p>
      ) : (
        lengthMismatch && <p className={s.SequenceForm__error}>Длины последовательностей должны совпадать</p>
      )}

      <Button type="submit" disabled={!firstValue || !secondValue || lengthMismatch} className={s.SequenceForm__submit}>
        Создать
      </Button>
    </form>
  );
};
