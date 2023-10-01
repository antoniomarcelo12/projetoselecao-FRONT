import { useContext, useEffect, useState } from "react";
import { SeachField, ViewRequestListContainer } from "./styles";
import { useApi } from "../../http/api";
import { AuthContext } from "../../contexts/AuthContext";

interface RequestType {
    request_close_date: null | Date
    request_created_at: string
    request_id: string
    request_situation: string
    request_target_department: string
    request_type: string
    user_id: string
}

export function ViewRequestList() {

    const [allRequests, setAllRequests] = useState<RequestType[]>([])
    const [allRequestsFiltered, setAllRequestsFiltered] = useState<RequestType[]>([])
    const [searchFilter, setSearchFilter] = useState('')

    const api = useApi()
    const auth = useContext(AuthContext)

    useEffect(() => {
        getAllRequests()
    }, [auth.sessionToken, auth.reload])

    useEffect(() => {
        if(searchFilter.length > 0){
            const filteredSearchList = allRequests.filter((item) => item.request_type.includes(searchFilter.toLowerCase()))
            setAllRequestsFiltered(filteredSearchList)
        }

        if(searchFilter === ''){
            setAllRequestsFiltered([])
        }

    }, [searchFilter])
    
    const getAllRequests = async () => {
        if(auth.sessionToken){
            if(auth.user.user_type === 'aluno') {
                const requestResponse = await api.getRequestsByUserId(auth.sessionToken)
                setAllRequests(requestResponse.data.requests)
            } else {
                const requestResponse = await api.getAllRequests(auth.sessionToken)
                const allRequests: RequestType[] = requestResponse.data.requests
                
                if(auth.user.user_type === 'gerencia'){
                    const filteredRequests = allRequests.filter((item) => item.request_target_department === "gerencia de sistemas")
                    setAllRequests(filteredRequests)
                }
                if(auth.user.user_type === 'secretaria'){
                    const filteredRequests = allRequests.filter((item) => item.request_target_department === "secretaria da graduacao")
                    setAllRequests(filteredRequests)
                }
            }
        }
    }

    const handleToggleRequestDone = (requestId: string) => {
        api.toggleRequestDone(auth.sessionToken, requestId)
        const updatedRequests = [...allRequests];

        const requestToUpdate = updatedRequests.find((item) => item.request_id === requestId);

        if (requestToUpdate) {
            requestToUpdate.request_situation = requestToUpdate.request_situation === 'closed' ? 'waiting' : 'closed';

            setAllRequests(updatedRequests);
        }
    }

    return(
        <>
            <SeachField className="searchField"   type="text" placeholder="Filtrar" onChange={(e) => setSearchFilter(e.target.value)} />

            <ViewRequestListContainer>
                <thead>
                <tr>
                    <th>RequestId</th>
                    <th>
                        {
                            auth.user.user_type !== 'aluno' && <p>userId</p> 
                        }
                    </th>
                    <th>requestType</th>
                    <th>createdAt</th>
                    <th>Situation</th>
                    <th>targetDepartment</th>
                    <th>
                        {
                            auth.user.user_type !== 'aluno' && <p>done</p>
                        }
                        </th>
                </tr>
                </thead>
                            {   
                                (allRequests?.length === 0 || (searchFilter.length > 0 && allRequestsFiltered.length == 0)) && (

                                                    <tbody>
                                                        <tr>
                                                            <td className="nothingToShow">Nada para mostrar aqui.</td>
                                                        </tr>
                                                    </tbody>
                                                    ) 
                                }
                
                {
                    allRequestsFiltered.length > 0 && 

                        (

                        allRequestsFiltered?.map((item) => {
                            return (
                                <tbody key={item.request_id}>
                                    <tr>
                                        <td className="requestIdColumn">DOIS{ item.request_id }</td>
                                        <td className="userIdColumn">
                                        {
                                            auth.user.user_type !== 'aluno' && <p>{ item.user_id }</p> 
                                        }
                                        </td>
    
                                        <td>{item.request_type}</td>
                                        <td>{item.request_created_at}</td>
                                        <td>{item.request_situation}</td>
                                        <td>{item.request_target_department}</td>
                                        <td>
                                            {
                                                auth.user.user_type !== 'aluno' && <input type="checkbox" checked={item.request_situation === 'closed'} onChange={() => handleToggleRequestDone(item.request_id)} />
                                            }
                                        </td>
                                    </tr>
                                    
                                </tbody>
                                );
                            })
                        ) 
                    }


                    {        
                                searchFilter.length === 0 && allRequests?.map((item) => {
                                    return(
                                        <tbody key={item.request_id}>
                                            <tr>
                                                <td className="requestIdColumn">UM{ item.request_id }</td>
                                                <td className="userIdColumn">
                                                {
                                                    auth.user.user_type !== 'aluno' && <p>{ item.user_id }</p> 
                                                }
                                                </td>
            
                                                <td>{item.request_type}</td>
                                                <td>{item.request_created_at}</td>
                                                <td>{item.request_situation}</td>
                                                <td>{item.request_target_department}</td>
                                                <td>
                                                    {
                                                        auth.user.user_type !== 'aluno' && <input type="checkbox" checked={item.request_situation === 'closed'} onChange={() => handleToggleRequestDone(item.request_id)} />
                                                    }
                                                </td>
                                            </tr>
                                            
                                        </tbody>
                                    );
                                })
                            
                               
                    }



            </ViewRequestListContainer>
        </>
    );
}