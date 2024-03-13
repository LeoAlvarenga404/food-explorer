import { Container } from "./style"
import { Icon } from '../Icon'
import { MdLogout, MdSearch  } from "react-icons/md";
import { PiReceiptBold } from "react-icons/pi";
export function Header(){
  return(
    <Container>
      <div className="icon">
        <Icon/>
      </div>
      <div className="input-with-search">
        <input type="text" placeholder="Busque por pratos ou ingredientes"/>
        <MdSearch/>   
      </div>
      <button>
        <PiReceiptBold/>Pedidos
        <div className="count">(<span>0</span>)</div>
      </button>
      <div className="logout">
        <MdLogout/>
      </div>
    </Container>
  )
}