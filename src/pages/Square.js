import React from 'React'


const MyInput = ({ onChange }) => (
    <input onChange={onChange} />
  );

class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
        };
    }

    onTextChange = (event) => {
        console.log(event.target.value);
        alert(event.target.value);
    }

    render() {
        return (
            <MyInput onChange={this.onTextChange} />
        );
    }
}
export default Square