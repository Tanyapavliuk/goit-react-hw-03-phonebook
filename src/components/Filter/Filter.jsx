import { Input } from "components/Filter/Filter.styled";

const Filter = ({ value, handleInputChange }) => {
    return(
    <>
    <p> Find contact by name</p>
    <Input type="text" name="filter" value={value} onChange={handleInputChange} />
    </>
    ) 
}
export default Filter;