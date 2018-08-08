import React, { Component } from "react";

/**
 * Async Component return the lazy loaded component
 *
 * Usage ===========
 *
 * const __COMP__ = AsyncComponent({
 *    resolve: () => import("__PATH__"),
 *    LoadingComponent: () => <div>Loading...</div>
 * });
 *
 * @param {Object}
 *
 */

const AsyncComponent = ({ resolve, LoadingComponent = null }) => {
    return class extends Component {
        state = {
            Component: null
        };

        componentDidMount() {
            resolve().then(_component =>
                this.setState({ component: _component.default })
            );
        }

        render() {
            const { Component } = this.state;

            return Component ? (
                <Component {...this.props} />
            ) : (
                <LoadingComponent />
            );
        }
    };
};

export default AsyncComponent;
