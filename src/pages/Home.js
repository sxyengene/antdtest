import React, { useEffect, useState } from "react";
import { Button, Cascader } from "antd";
const optionLists = [
  {
    value: "zhejiang",
    label: "Zhejiang",
    isLeaf: false,
    children:[
      {
        label: `杭州`,
        value: "hz",
      },
      {
        label: `Dynamic 2`,
        value: "dynamic2",
      },
    ]
  },
  {
    value: "jiangsu",
    label: "Jiangsu",
    isLeaf: false,
  },
];

const App = () => {
  const [options, setOptions] = useState(optionLists);
  const [value,setValue]= useState([])
  const onChange = (value, selectedOptions) => {
    console.log("%c onchange value", "color: green;", value);
    console.log(
      "%c onchange selectedOptions",
      "color: green;",
      selectedOptions
    );
    // console.log('%c value', 'color: green;',value);
    // setValue(['jiangsu'])
  };
  const loadData = async (selectedOptions) => {
    // const res = await fetch(
    //   "https://ccp-dev.oasqa.com/api/customfield/base/cascade/get"
    // );
    // if (res.ok) {
    //   const json = await res.json();
    //   console.log("%c json", "color: green;", json);
    // }
    const targetOption = selectedOptions[selectedOptions.length - 1];
    console.log("%c loadData targetOption", "color: green;", targetOption);

    // load options lazily
    setTimeout(() => {
      targetOption.children = [
        {
          label: ` Dynamic 1`,
          value: "dynamic1",
        },
        {
          label: `${targetOption.label} Dynamic 2`,
          value: "dynamic2",
        },
      ];
      setOptions([...options]);
    }, 300);
  };

  const [casOpen,setCasOpen] = useState(false)
  function btnClick(){
    setCasOpen(!casOpen)
  }



  return (
    <>
    <Button onClick={btnClick}></Button>
      <Cascader
        open={casOpen}
        options={options}
        showSearch={false}
        placeholder={'123'}
        // defaultValue={["zhejiang", "zhejiang  Dynamic 1"]}
        loadData={loadData}
        onChange={onChange}
      />
    </>
  );
};
export default App;
