import { Button } from '@components/Button';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { Input } from '@components/Input';
import { Container, Content, Icon } from './styles';

export function NewGroup() {
  return (
    <Container>
      <Header showBackButton />
      <Content>
        <Icon />

        <Highlight
          title="Nova turma"
          subtitle="crie a turma para adicionar as pessoas"
        />

        <Input style={{ marginBottom: 20 }} placeholder="Nome da turma" />
        <Button title="Criar" />
      </Content>
    </Container>
  );
}
