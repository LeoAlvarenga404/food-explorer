import { Container } from "./style"

export function Input(props){
  return(
    <Container>    
      <input 
        placeholder={props.content}
        type={props.type}
        />
    </Container>
  )
}