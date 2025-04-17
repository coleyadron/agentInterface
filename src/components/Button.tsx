
interface ButtonProps {
    children: string;
    color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
    onClick: () => void;
}
const Button = ({children, color = 'info', onClick} : ButtonProps) => {
  return (
    <div>
        <button className={"btn btn-outline-" + color} onClick={onClick}>{children}</button>
    </div>
  )
}

export default Button