import React from 'React';

const Picture = (props) => {
  return (
    <div>
      <img src={props.src} />
      {props.children}
    </div>
  )
}
class ShoppingList extends React.Component {

  // render() {
  //   return (
  //     <div className="shopping-list">
  //       <h1>Shopping List for {this.props.name}</h1>
  //       <ul>
  //         <li>Instagram</li>
  //         <li>WhatsApp</li>
  //         <li>Oculus</li>
  //       </ul>
  //     </div>
  //   );
  // }
  render() {
    const picture = {
      src: 'https://cdn.nlark.com/yuque/0/2018/jpeg/84141/1536207007004-59352a41-4ad8-409b-a416-a4f324eb6d0b.jpeg',
    };
    return (
      <div className='container'>
        <Picture src={picture.src}>
        // 这里放置的内容就是 props.children
        </Picture>
      </div>
    )
  }
}

export default ShoppingList;