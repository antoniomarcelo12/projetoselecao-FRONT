import { useContext, useEffect, useState } from "react";
import { ViewRequestListContainer } from "./styles";
import { useApi } from "../../http/api";
import { AuthContext } from "../../contexts/AuthContext";

interface RequestType {
    request_close_date: string
    request_created_at: string
    request_id: string
    request_situation: string
    request_target_department: string
    request_type: string
    user_id: string

}

export function ViewRequestList() {

    const [allRequests, setAllRequests] = useState<RequestType[]>([])
    const api = useApi()
    const auth = useContext(AuthContext)

    useEffect(() => {
        const getAllRequests = async () => {
            if(auth.sessionToken){
                const requestResponse = await api.getRequestsByUserId(auth.sessionToken)
                setAllRequests(requestResponse.data.requests)
            }
        }

        getAllRequests()
    }, [auth.sessionToken, auth.reload])

    return(
        <ViewRequestListContainer>
            <thead>
            <tr>
                <th>RequestId</th>
                <th>requestType</th>
                <th>createdAt</th>
                <th>Situation</th>
                <th>targetDepartment</th>
            </tr>
            </thead>
            {   allRequests?.length === 0 ? (
                <tbody>
                    <tr>
                        <td className="nothingToShow">Nada para mostrar aqui.</td>
                    </tr>
                </tbody>
            ) : (
                allRequests?.map((item) => {
                    return(
                        <tbody key={item.request_id}>
                            <tr>
                                <td>{ item.request_id }</td>
                                <td>{item.request_type}</td>
                                <td>{item.request_created_at}</td>
                                <td>{item.request_situation}</td>
                                <td>{item.request_target_department}</td>
                            </tr>
                            
                        </tbody>
                    );
                })
            )
            }
        </ViewRequestListContainer>
    );
}