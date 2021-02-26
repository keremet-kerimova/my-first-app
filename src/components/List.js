const List = (props) => {
     let list = []; 
        for(let i = 0; i < props.items.lenght; i++){
            list.push(<li>{props.items[i]}</li>);
        }
      return <ul>
        {list}
      </ul>;
}
export default List