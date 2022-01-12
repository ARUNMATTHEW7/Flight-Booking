import React from 'react';
import 'antd/dist/antd.css';
import { Select } from 'antd';
import './TopHeaderStyle.css';
const { Option } = Select;

const provinceData =
 ['Select City',
'Delhi',
'Banglore',
'Patna',
'Gujrat',
'Shimla',
'Hydrabaad',
'Chennai',
'Kolkata',
]
const NewDropDowns = ({props}) => {

  return (
    <>
      <div className="drop-class">
          {/* <h3>{title}</h3> */}
         <Select defaultValue={provinceData[0]}  onSelect={props.selected} className="drop-control">
         {provinceData.map(province => (
            <Option key={province}  className="menu-item">{province}</Option>
          ))}
        </Select>
      </div>
    </>
  );
};

export default NewDropDowns