import React from 'React';
import { Tabs, Tree } from 'antd'
const { TabPane } = Tabs;
const { TreeNode } = Tree;
const Picture = (props) => {
    return (
        <div>
            <img src={props.src} />
            {props.children}
        </div>
    )
}
class TestFrame extends React.Component {

    getTab1Content = () => {
        return (
            <Tree>
                <TreeNode title="parent 1" key="0-0">
                    <TreeNode title="leaf" key="0-0-0" />
                    <TreeNode title="leaf" key="0-0-1" />
                </TreeNode>
            </Tree>
        );
    }
    render() {
        const picture = {
            src: 'https://cdn.nlark.com/yuque/0/2018/jpeg/84141/1536207007004-59352a41-4ad8-409b-a416-a4f324eb6d0b.jpeg',
        };
        return (
            <div className='container'>
                <Tabs>
                    <TabPane tab="Tab 1" key="1">
                        {this.getTab1Content()}
                    </TabPane>
                    <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
                </Tabs>

            </div>
        )
    }

}
export default TestFrame