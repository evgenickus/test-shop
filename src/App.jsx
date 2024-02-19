import { Layout, Input, Checkbox, Flex } from "antd"
import { useState } from "react";
import AppContent from "./components/AppContent";
import AppFooter from "./components/AppFooter";
import { products } from './data';



const layoutStyle = {
  borderRadius: 8,
  overflow: 'hidden',
};

const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: '85px',
  paddingInline: 48,
  lineHeight: '64px',
  backgroundColor: '#0958d9',

};

export default function App() {

  const [text, setText] = useState(products);

  const [checked, setChecked] = useState(false);
  const [checkedFruits, setCheckedFruits] = useState(false);
  const [checkedVegetables, setCheckedVegetables] = useState(false);



  function handleInput(value) {
    if (!checked && !checkedFruits && !checkedVegetables) {
      setText(products.filter((product) => product.name.toLowerCase().includes(value.target.value.toLowerCase())))

    } else if (checked && !checkedFruits && !checkedVegetables) {
      setText(products.filter((product) => product.name.toLowerCase().includes(value.target.value.toLowerCase()) && product.stocked))

    } else if (checked && checkedFruits && !checkedVegetables) {
      setText(products.filter((product) => product.name.toLowerCase().includes(value.target.value.toLowerCase()) && product.stocked && product.category == 'Fruits'))

    } else if (checked && !checkedFruits && checkedVegetables) {
      setText(products.filter((product) => product.name.toLowerCase().includes(value.target.value.toLowerCase()) && product.stocked && product.category == 'Vegetables'))

    } else if (!checked && checkedFruits && !checkedVegetables) {
      setText(products.filter((product) => product.name.toLowerCase().includes(value.target.value.toLowerCase()) && product.category == 'Fruits'))

    } else if (!checked && !checkedFruits && checkedVegetables) {
      setText(products.filter((product) => product.name.toLowerCase().includes(value.target.value.toLowerCase()) && product.category == 'Vegetables'))
    }
  }

  function handleCheckBox(value) {
    if ((value.target.checked && !checkedFruits) && (value.target.checked && !checkedVegetables)) {
      setText(products.filter((product) => product.stocked && product.name))

    } else if (value.target.checked && checkedFruits) {
      setText(products.filter((product) => product.stocked && product.name && product.category == 'Fruits'))

    } else if (value.target.checked && checkedVegetables) {
      setText(products.filter((product) => product.stocked && product.name && product.category == 'Vegetables'))

    } else if (!value.target.checked && checkedVegetables) {
      setText(products.filter((product) => product.category == 'Vegetables' && product.name))

    } else if (!value.target.checked && checkedFruits) {
      setText(products.filter((product) => product.category == 'Fruits' && product.name))

    } else {
      setText(products)
    }
    setChecked(prev => !prev)
  };

  function handleCheckBoxFruits(value) {
    if (value.target.checked && !checked) {
      setText(products.filter((product) => product.category == 'Fruits'))

    } else if (value.target.checked && checked) {
      setText(products.filter((product) => product.stocked && product.name && product.category == 'Fruits'))

    } else if (!value.target.checked && checked) {
      setText(products.filter((product) => product.stocked && product.name))

    } else {
      setText(products)
    }
    setCheckedFruits(prev => !prev)
    checkedVegetables && setCheckedVegetables(false)
  };

  function handleCheckBoxVegetables(value) {
    if (value.target.checked && !checked) {
      setText(products.filter((product) => product.category == 'Vegetables'))

    } else if (value.target.checked && checked) {
      setText(products.filter((product) => product.stocked && product.name && product.category == 'Vegetables'))

    } else if (!value.target.checked && checked) {
      setText(products.filter((product) => product.stocked && product.name))

    } else {
      setText(products)
    }

    setCheckedVegetables(prev => !prev)
    checkedFruits && setCheckedFruits(false)
  };

  return <>
    <Layout style={layoutStyle}>
      <Layout.Header style={headerStyle}>
        <div style={{ height: 35 }}>
          <Input
            placeholder={"Search Products"}
            allowClear={true}
            style={{ width: '40%' }}
            onChange={handleInput}
          />
        </div>
        <Checkbox onChange={handleCheckBox} checked={checked} style={{ marginLeft: '1rem', color: '#fff' }}>Products in stock</ Checkbox>
        <Checkbox onChange={handleCheckBoxFruits} checked={checkedFruits} style={{ marginLeft: '1rem', color: '#fff' }}>Category: Fruits</ Checkbox>
        <Checkbox onChange={handleCheckBoxVegetables} checked={checkedVegetables} style={{ marginLeft: '1rem', color: '#fff' }}>Category: Vegetables</ Checkbox>

      </Layout.Header >
      <AppContent text={text} />
      <AppFooter />
    </Layout>
  </>
}

