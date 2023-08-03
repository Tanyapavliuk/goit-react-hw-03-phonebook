import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Button, Item } from './ListContact.styled'


const ListItem = ({ data, filter, handleDeleteContact }) => {
    return <TransitionGroup className="list">{
                filter !== " " ? data.filter((el, index) =>
            el.name.toLowerCase().includes(filter.toLowerCase())).map(({ id, name, number}) =><CSSTransition
              key={id}
              timeout={500}
              classNames="item"
            ><Item>{name}: {number}
            <Button type="button" onClick={() => { handleDeleteContact(id) }}>Видалити</Button>
                </Item></CSSTransition>) : data.map(({ id, name, number}) =>
            <CSSTransition
              key={id}
              timeout={500}
              classNames="item"
        > <Item>{name}: {number} <Button type="button">Видалити</Button></Item></CSSTransition>)  
    }
 
        </TransitionGroup>
}
export default ListItem;

/* <TransitionGroup className="list">{
                filter !== " " ? data.filter((el, index) =>
            el.name.toLowerCase().includes(filter.toLowerCase())).map(({ id, name, number}) =><CSSTransition
              key={id}
              timeout={500}
              classNames="item"
            ><Item>{name}: {number}
            <Button type="button" onClick={() => { handleDeleteContact(id) }}>Видалити</Button>
                </Item></CSSTransition>) : data.map(({ id, name, number}) =>
            <CSSTransition
              key={id}
              timeout={500}
              classNames="item"
        > <Item>{name}: {number} <Button type="button">Видалити</Button></Item></CSSTransition>)  
    }
 
        </TransitionGroup>
    )  */

    //  filter !== " " ? data.filter((el) =>
    //         el.name.toLowerCase().includes(filter.toLowerCase())).map(({ id, name, number}) =><Item key={id}>{name}: {number}
    //         <Button type="button" onClick={() => { handleDeleteContact(id) }}>Видалити</Button></Item>) : data.map(({ id, name, number}) =>
    //         <Item key={id}>{name}: {number} <Button type="button">Видалити</Button></Item>)