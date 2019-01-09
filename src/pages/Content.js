import React from 'React';
import ShoppingList from './shoppinglist.js';

class Content extends React.Component {
    render() {
        return (
            <ShoppingList name="张三">
                {/* 插入的其他内容 */}
            </ShoppingList>
        );
    }
}

export default Content;