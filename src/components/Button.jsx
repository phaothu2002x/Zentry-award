const Button = ({ title, id, leftIcon, rightIcon, containerClass }) => {
    return (
        <button
            id={id}
            className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full text-black py-3 px-7 bg-violet-50 ${containerClass}`}
        >
            {leftIcon}
            <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
                <div>{title}</div>
            </span>
            {rightIcon}
        </button>
    );
};

export default Button;
