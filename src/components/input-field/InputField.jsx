function InputField({ type, name, title, register }) {
    return (
        <label htmlFor={name}>
            {title}
            <input
                type={type}
                {...register(name)}
                placeholder={title}
                id={name}
            />
        </label>
    );
}

export default InputField;


