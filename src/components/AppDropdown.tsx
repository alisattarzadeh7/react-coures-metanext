import React, {PropsWithChildren} from "react";
import {Dropdown, MenuProps} from "antd";



type AppDropdownProps = {
    items:MenuProps['items']
} & PropsWithChildren

const AppDropdown:React.FC<AppDropdownProps> = ({items,children})=>{
    return ( <>
        <Dropdown menu={{ items }} trigger={['click']}>
            {children}
        </Dropdown>
    </>)
}

export default AppDropdown