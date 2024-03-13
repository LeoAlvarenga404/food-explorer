import { Container } from "./style";
import imageSlogan from '../../assets/slogan.png'

export function Slogan(){
  return (
    <Container>
      <img src={imageSlogan} alt="slogan"/>
      <div className="text">
        <h1>Sabores inigualáveis</h1>
        <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
      </div>
    </Container>
  )
}
