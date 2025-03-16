import Sinfo from "./Sinfo";

export default function Student(){
    return(
        <div>
            <table border={1} >
                <thead>
                <tr>
                    <td>Name</td>
                    <td>Course</td>
                  
                </tr>
                </thead>
                <tbody>
                    <Sinfo sname={"Rahul"} course={"B.Tech"}/>
                    <Sinfo sname={"Anurag"} course={"B.A"}/>
                </tbody>
            </table>
        </div>
    )
}