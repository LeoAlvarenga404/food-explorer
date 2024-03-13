import { Container } from "./style";
import { Form } from "./style";
import { Icon } from "../../components/Icon";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Link } from "react-router-dom";
export function SignIn(){
  return (
    <Container>
      <div className="icon">
        <Icon/>
      </div>  
      <Form>
      <h2>Faça login</h2>
      <div className="input-wrapper">
        <span>Email</span>
        <Input content={'Ex: seuemail@email.com'}/>
        <span>Senha</span>
        <Input content={'No mínimo 6 caracteres'} type={'password'}/>
        <Button content='Entrar'/>
      </div>
      <Link to='/register'>Crie sua conta</Link>
      </Form>
    
    </Container>
  )
}