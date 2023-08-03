import { Btn } from "./DeliteBtn.styled"

const DeliteBtn = ({delite}) => {
    return (
        <Btn onClick={delite}>Delite all contacts</Btn>
    )
}

export default DeliteBtn;