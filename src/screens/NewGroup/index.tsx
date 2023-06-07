import { Alert } from 'react-native'
import React, { useState } from 'react'
import { Container, Content, Icon } from './styles'

import { Input } from '@components/Input'
import { AppError } from '@utils/AppError'
import { Header } from '@components/Header'
import { Button } from '@components/Button'
import { Highlight } from '@components/Highlight'
import { groupCreate } from '@storage/group/groupCreate'
import { useNavigation } from '@react-navigation/native'

export function NewGroup() {
  const [group, setGroup] = useState('');
  const navigation = useNavigation();

  async function handleNew(){
    try {
      if(group.trim().length === 0 ) {
        return Alert.alert('Novo Grupo', 'Informe o nome da turma.');
      }
      await groupCreate(group);
      navigation.navigate('players', { group }) // mesmo que { group: group }) porque o nome é igual
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Novo Grupo', error.message);
      } else {
        Alert.alert('Novo Grupo', 'Não foi possível criar um novo grupo.');
        console.log(error);
      }
    }
  }

  return (
    <Container>
      <Header showBackbutton />
      <Content>
        <Icon />
        <Highlight
          title="Nova turma"
          subtitle="crie a turma para adicionar as pessoas"
        />
        <Input 
          placeholder="Nome da turma"
          onChangeText={setGroup}
          onSubmitEditing={handleNew}
          returnKeyType="done"
        />
        <Button 
          title="Criar"
          style={{ marginTop: 20 }}
          onPress={handleNew}          
        />
      </Content>
    </Container>
  )
}
