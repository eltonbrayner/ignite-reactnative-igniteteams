import { useState } from 'react';
import { FlatList } from 'react-native';
import { GroupCard, Header, Highlight, ListEmpty, Button } from 'components';
import { Container } from './styles';

export function Groups() {
  const [groups, setGroups] = useState<string[]>([
    'Galera da Rocket',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ]);
  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subtitle="Jogue com a sua turma" />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
        ListEmptyComponent={() => (
          <ListEmpty message="Que tal cadastrar a primeira turma?" />
        )}
        contentContainerStyle={groups.length ? { gap: 16 } : { flex: 1 }}
        showsVerticalScrollIndicator={false}
      />

      <Button title="Criar nova turma" />
    </Container>
  );
}
