import { observer } from "mobx-react-lite";
import React from "react";
import { useContext } from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import { Context } from "..";

const TypeBar = observer(() => {
  const { device } = useContext(Context);
  return (
    <ListGroup>
      {device.types.map((type) => 
        <ListGroup.Item
          style={{cursor: "pointer"}}
          onClick={() => device.setSelectedType(type)}
          active={type.id === device.selectedType.id}
          key={type.id}
        >
          {type.name}
        </ListGroup.Item>
      )}
    </ListGroup>
  );
});

export default TypeBar;