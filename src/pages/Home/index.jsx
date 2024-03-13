import { Header } from "../../components/Header";
import { Slogan } from "../../components/Slogan";
import { Container } from "./style";

export function Home(){
  return(
    <Container>
      <Header/>
      <Slogan/>
    </Container>
  )
}