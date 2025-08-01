interface Props {
    label: string;
    name: string;
    type?: "text" | "radio" | "number" | "date"
    value?: any;
}

export default function DefaultInput({label, name, type, value }: Props) {
    return (
        <div className="flex">
            <div className="w-20">
            <label htmlFor={name}>{label}</label>
            </div>
            <input className="border-1" type={type || 'text'} name={name} id={name} value={value} />
        </div>
    )
}