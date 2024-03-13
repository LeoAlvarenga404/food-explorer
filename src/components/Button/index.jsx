import { Container } from "./style"

export function Button(props){
  return(
    <Container>
      {props.content}
    </Container>
  )
}