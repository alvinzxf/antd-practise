import { Card } from 'antd'
import React from 'React';
import ShoppingList from './shoppinglist.js';
 
export default () => {
    const Picture = (props) => {
        return (
          <div>
            <img src={props.src} />
            {props.children}
          </div>
        )
      }
    const style = {
        width: '400px',
        margin: '30px',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
        border: '1px solid #e8e8e8',
    };

    return (
        <Card style={style} actions={[<a>操作一</a>, <a>操作二</a>]}>
        </Card>
    );
}