const Button = ({type, className, onClick, innerText}) => 
(
    <button type={type} className={className} onClick={onClick}>{innerText}</button>
);
export default Button;