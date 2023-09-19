import { observer } from "mobx-react-lite";
import React from "react";
import { useContext } from "react";
import { Row, Card } from 'react-bootstrap';
import { Context } from "..";

const BrandBar = observer(() => {
  const { device } = useContext(Context);
  return (
    <Row className="d-flex justify-content-between">
      {device.brands.map((brand) =>
        <Card
          style={{cursor: "pointer", width: '120px', alignItems: "center", margin: '0 0 10px 0'}}
          key={brand.id}
          className="p-3"
          onClick={() => device.setSelectedBrand(brand)}
          border={(brand.id === device.selectedBrand.id) ? 'primary' : 'light'}
        >
          {brand.name}
        </Card>
      )}
    </Row>
  );
});

export default BrandBar;