import Info from "./info";

export default function Employee(){
    return(
        <div>
            <table border={1} align="center">
                <thead>
                <tr>
                    <td>Employee Name</td>
                    <td>Department</td>
                    <td>Employment type</td>
                </tr>
                </thead>
                <tr>
                    <Info ename={"Rahul"} department={"IT Support"} type={"Full-Time"}/>
                    <Info ename={"Aman"} department={"Marketing"} type={"part-Time"}/>
                    <Info ename={"Ankush"} department={"HR"} type={"Full-Time"}/>
                </tr>
            </table>
        </div>
    )
}