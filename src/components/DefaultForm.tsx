interface Props {
    children: React.ReactNode;
    title: string;
    submitText: string;
}

export default function DefaultForm({children, title, submitText}: Props) {
    return (
    <form className="my-4 mx-2 border-2">
      <span>{title}</span>
      {children}
      <input className="border-1" type="submit" value={submitText} />
    </form>
    )
}