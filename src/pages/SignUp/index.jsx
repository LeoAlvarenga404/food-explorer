import { Container } from "./style";
import { Form } from "./style";
import { Icon } from "../../components/Icon";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Link } from "react-router-dom";
export function SignUp(){
  return (
    <Container>
      <div className="icon">
        <Icon/>
      </div>  
      <Form>
      <h2>Crie sua conta</h2>
      <div className="input-wrapper">
        <span>Seu nome</span>
        <Input content={'Ex: Leonardo Prado'}/>
        <span>Email</span>
        <Input content={'Ex: seuemail@email.com'}/>
        <span>Senha</span>
        <Input content={'No mínimo 6 caracteres'} type={'password'}/>
        <Button content='Criar Conta'/>
      </div>
      <Link to='/'>Já tenho uma conta</Link>
      </Form>
    
    </Container>
  )
}