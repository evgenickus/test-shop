import { Layout } from 'antd'


const footerStyle = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#0958d9',
};
export default function AppFooter() {
    return <Layout.Footer style={footerStyle}></Layout.Footer>
}