import { useEffect } from 'react';
import { useFormData } from '../../hooks/useFormData';
import { useRaceEvents } from '../../hooks/useRaceEvents';
import FormField, { FormFieldProps } from '../FormField/FormField';
import { Button, Row } from '../styled-components';

type RaceEventFormData = {
  id?: string;
  active?: string;
  title?: string;
  datetime?: Date;
  location?: string;
  minParticipants?: number;
  maxParticipants?: number;
  weight?: number;
  price?: number;
  priceDetails?: string;
  paymentDeadline?: Date;
  paymentMethod?: string;
};

const formFieldAttributes: Pick<FormFieldProps, 'label' | 'name' | 'type'>[] = [
  { label: 'Título', name: 'title' },
  { label: 'Data e hora', name: 'datetime', type: 'datetime-local' },
  { label: 'Local', name: 'location' },
  { label: 'Mínimo de participantes', name: 'minParticipants', type: 'number' },
  { label: 'Máximo de participantes', name: 'maxParticipants', type: 'number' },
  { label: 'Peso', name: 'weight', type: 'number' },
  { label: 'Valor', name: 'price', type: 'number' },
  { label: 'Detalhes do valor', name: 'priceDetails' },
  {
    label: 'Prazo para pagamento',
    name: 'paymentDeadline',
    type: 'datetime-local',
  },
  { label: 'Método de pagamento', name: 'paymentMethod' },
];

const RaceEventForm = () => {
  const [currentRaceEvent] = useRaceEvents();

  const { formData, setFormData, getInputProps } =
    useFormData<RaceEventFormData>({});

  useEffect(() => {
    if (!currentRaceEvent) {
      return;
    }

    setFormData(currentRaceEvent as RaceEventFormData);
  }, [currentRaceEvent]);

  if (!formData) {
    return <p>Carregando...</p>;
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmitCapture={handleSubmit}>
      {formFieldAttributes.map(({ name, label, type }) => (
        <FormField
          key={name}
          type={type}
          label={label}
          {...getInputProps(name as keyof RaceEventFormData)}
        />
      ))}

      <hr />

      <Row>
        <Button $unstyled type="button">
          Criar nova corrida
        </Button>
        <Button type="submit">Salvar</Button>
      </Row>
    </form>
  );
};

export { RaceEventForm };
