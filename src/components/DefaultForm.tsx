interface Props {
    children: React.ReactNode;
    title: string;
    submitText: string;
    formAction: (payload: FormData) => void;
    isPending: boolean; 
}

export default function DefaultForm({children, title, submitText, formAction, isPending}: Props) {
    return (
    <form className="my-4 mx-2 border-2" action={formAction}>
      <span>{title}</span>
      {children}
      <input className="border-1" type="submit" value={submitText} disabled={isPending}/>
    </form>
    )
}