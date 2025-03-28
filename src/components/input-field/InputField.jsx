function InputField({type, name, title}) {
    return (
        <label htmlFor={name}>
            {title}
            <input
                type={type}
                name={name}
                placeholder={title}
            />
        </label>
    );
}

export default InputField;


