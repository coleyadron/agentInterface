import { useState } from "react";

interface ListGroupProps {
    items: string[];
    heading: string;
    onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
    const [selectedItem, setSelectedItem] = useState(-1);

    const message =  (items.length === 0 && <p>No items found</p>);
   
    return (
        <>
            <h1>{heading}</h1>
            { message }
            <ul className="list-group">
                {items.map((item, index) => 
                    <li 
                        className={selectedItem === index ? "list-group-item active" : "list-group-item list-group-item-action"} 
                        key={item} 
                        onClick={() => {setSelectedItem(index); onSelectItem(item) }}
                    >
                    {item}
                    </li>)}
            </ul>
        </>
    );
}

export default ListGroup;