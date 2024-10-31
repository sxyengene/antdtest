import React, { useState,useEffect } from 'react';
import { Button, Select } from 'antd';
import jsonp from 'fetch-jsonp';
import qs from 'qs';
let timeout;
let currentValue;
const fetch = (value, callback) => {
  if (timeout) {
    clearTimeout(timeout);
    timeout = null;
  }
  currentValue = value;
  const fake = () => {
    const str = qs.stringify({
      code: 'utf-8',
      q: value,
    });
    jsonp(`https://suggest.taobao.com/sug?${str}`)
      .then((response) => response.json())
      .then((d) => {
        if (currentValue === value) {
          const { result } = d;
          const data = result.map((item) => ({
            value: item[0],
            text: item[0],
          }));
          callback(data);
        }
      });
  };
  if (value) {
    timeout = setTimeout(fake, 300);
  } else {
    callback([]);
  }
};
const SearchInput = (props) => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState();

  const handleSearch = (newValue) => {
    if(newValue.trim().length>1){
        fetch(newValue, setData);

    }
  };
  const handleChange = (newValue) => {
    setValue(newValue);
  };


  useEffect(()=>{
    setValue(undefined)
  },[])

  return (
    <Select
      labelInValue
      showSearch
      value={value}
      placeholder={'placeholder'}
      style={props.style}
      defaultActiveFirstOption={false}
      suffixIcon={null}
      filterOption={false}
      onSearch={handleSearch}
      onChange={handleChange}
      notFoundContent={null}
      options={(data || []).map((d) => ({
        value: d.value,
        label: d.text,
      }))}
    />
  );
};
const App = () => (
  <>
    <SearchInput
      placeholder="input search text"
      style={{
        width: 200,
      }}
    />
  </>
);
export default App;