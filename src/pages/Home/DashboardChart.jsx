import {useQueryClient} from "@tanstack/react-query";


const DashboardChart = ()=>{
    const queryClient = useQueryClient()

    const handleChangeLanguage= ()=>{
        // queryClient.invalidateQueries(['todos'])
        queryClient.removeQueries(['todos'])
    }

    return <div>
        <button onClick={handleChangeLanguage}>remove data</button>
        this is dashboard Chart
    </div>
}


export default DashboardChart