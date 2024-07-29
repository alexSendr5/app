import { title } from "process"

type Props = {
    type?: string,
    title: string,
    state: string,
    placeholder: string,
    isTextValue?: boolean,
    setState: (value: string) => void
}

const Formfield = ({type, title, state, placeholder, isTextValue, setState}: Props) => {
    return(
        <div className="flexStart flex-col w-full gap-4">
            <label className="w-full text-gray-100">{title}</label>
            {isTextValue ? (
                <textarea placeholder={placeholder}
                 value={state}
                 required
                 className="form_field-input"
                 onChange={(e) => setState(e.target.value)}></textarea>
            ): <input placeholder={placeholder}
            value={state}
            required
            className="form_field-input"
            onChange={(e) => setState(e.target.value)}/>}
        </div>
    )
}

export default Formfield