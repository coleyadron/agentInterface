import { ReactNode } from "react";

interface AlertProps {
    children: ReactNode;
    onClose: () => void;
    }
const Alert = ({children, onClose }: AlertProps) => {
  return (
    <div className="alert alert-info alert-dismissable">{children}
    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={onClose} style={{paddingRight: '15px'}}></button>
    </div>
    
  )
}

export default Alert