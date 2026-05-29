const Button = ({ children, variant = 'primary', className = '', type = 'button', onClick }) => {
    const cls =
        variant === 'primary'
            ? 'btn-primary'
            : variant === 'secondary'
                ? 'btn-secondary'
                : 'btn-ghost';

    return (
        <button type={type} onClick={onClick} className={`${cls} ${className}`}>
            {children}
        </button>
    );
};

export default Button;
