import {Switch, Route} from "react-router-dom"
import Inicial from "../Pages/Inicial"

function Routes(){
    return (
        <Switch>
            <Route exact path="/">
                <Inicial>

                </Inicial>
            </Route>
        </Switch>
    )
}
export default Routes;