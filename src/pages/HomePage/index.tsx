import { HomePageContainer } from "./styles";
import { ViewUsersList } from "../../components/ViewUsersList";
import { CreateUserInput } from "../../components/CreateUserInput";

export function HomePage() {
   
    return (
            <HomePageContainer>
                <CreateUserInput />
                <ViewUsersList />
            </HomePageContainer>
    );
}
