import React, { useContext } from "react";
import Store from "../../lib/redux/store";


function connect(mapStateToProps, mapDispatchToProps) {
    return function (Component) {
        return function () {
            const { state, dispatch } = useContext(Store)
            const stateToProps = mapStateToProps(state)
            const dispatchToProps = mapDispatchToProps(dispatch)
            const props = {...stateToProps, ...dispatchToProps }

            return (
                <Component {...props} />
            )
        }
    }
}

export default connect;