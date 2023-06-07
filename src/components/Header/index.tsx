import logoImg from '@assets/logo.png'
import { useNavigation } from '@react-navigation/native'
import { Container, Logo, BackButton, BackIcon } from './styles'

type Props = {
  showBackbutton?: boolean
}

export function Header({ showBackbutton = false }: Props) {
  const navigation = useNavigation();

  function handleGoBack(){
    navigation.navigate('groups');   
  }

  return (
    <Container>
      {showBackbutton && (
        <BackButton
          onPress={handleGoBack}>
        <BackIcon />
        </BackButton>
      )}
      <Logo source={logoImg} />
    </Container>
  )
}
