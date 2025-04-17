import { ReactNode } from "react";

interface AlertProps {
    children: ReactNode;
    onClose: () => void;
    }
const Alert = ({children, onClose }: AlertProps) => {
  return (
    <div className="alert alert-info alert-dismissable"
    style={{padding: '2px, 4px, 4px, 2px', textAlign: 'center'}}>
        {children}
        <button type="button" data-bs-dismiss="alert" onClick={onClose} style={{position:'absolute', bottom:'4px', right:'4px', color:'#000', fontSize:'9px', cursor:'pointer', borderRadius:'0.5px', backgroundColor: '#d9534f'}}>X</button>
    </div>
    
  )
}

export default Alert