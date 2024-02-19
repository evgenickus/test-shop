import { Layout, Typography, List, Button } from "antd";
import { products } from "../data";

const contentStyle = {
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#4096ff',
  minHeight: 'calc(81vh)',
};


export default function AppContent({ text }) {
  function handelButton(parent) {
    console.log(parent.parent);
  }
  return (
    <Layout.Content style={contentStyle}>
      <List
        style={{ width: 500, margin: 'auto', marginTop: '3rem', marginBottom: '3rem' }}
        header={<h1 style={{ color: '#fff', textAlign: 'center' }}>Products List</h1>}
        bordered
        dataSource={text}
        renderItem={text =>
          <List.Item
            actions={[<Button onClick={handelButton} style={{ color: '#0958d9' }}>details</Button>]}
          >
            <Typography.Text style={{ color: '#fff' }}> {text.name}</Typography.Text>
          </List.Item>
        }
      />
    </Layout.Content>
  )
}