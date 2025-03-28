function InputField({type, name, title, onChange}) {
    return (
        <label htmlFor={name}>
            {title}
            <input
                type={type}
                name={name}
                placeholder={title}
                onChange={onChange}
            />
        </label>
    );
}

export default InputField;


