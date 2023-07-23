import {Button} from "antd";


const AppButton = ({children,...props})=>{
    return <Button {...props} className="m-2" >{children}</Button>
}

export default AppButton