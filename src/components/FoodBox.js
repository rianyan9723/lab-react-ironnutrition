import React from 'react';
import { Card, Col, Button } from 'antd';

function FoodBox(props) {
  const { food } = props;
  const { deleteFood } = props;

  return (
    <Col>
      <Card title={food.name} style={{ width: 230, margin: 10 }}>
        <img src={food.image} height={60} alt="food" />
        <p>{food.calories}</p>
        <p>{food.servings}</p>
        <p>
          <b>Total Calories: {food.calories * food.servings} </b> kcal
        </p>
        <Button onClick={() => deleteFood(food.name)} type="primary"> Delete </Button>
      </Card>
    </Col>
  );
}

export default FoodBox;