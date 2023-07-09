import { sendEmailVerification } from 'firebase/auth';
import { useAuth } from '../../firebase/auth';
import { Button, WarningMessageWrapper } from '../styled-components';

const VerifyEmailMessage = () => {
  const { user } = useAuth();

  if (!user || user.emailVerified) {
    return null;
  }

  return (
    <WarningMessageWrapper>
      <p>
        Por favor, verifique o seu e-mail ({user.email}) para validar o
        cadastro.
      </p>
      <p>
        {'Se não recebeu o e-mail de validação do cadastro, '}
        <Button $unstyled onClick={() => sendEmailVerification(user)}>
          clique aqui
        </Button>
        {' para reenviar.'}
      </p>
    </WarningMessageWrapper>
  );
};

export { VerifyEmailMessage };
