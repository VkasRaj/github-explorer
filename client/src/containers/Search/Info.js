import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import {
    Button,
    withStyles,
    Dialog,
    List,
    ListItem,
    ListItemText,
    ListItemIcon
} from "@material-ui/core";
import {
    MoreVertTwoTone as InfoIcon,
    ArrowBack as ExitIcon,
    HistoryTwoTone as LastSearchIcon
} from "@material-ui/icons";
import { asyncComponent } from "react-async-component";

import { onSearchList, logout } from "../../store/actions";
const LastSearchList = asyncComponent({
    resolve: () => import("../../components/LastSearch")
});

const styles = theme => ({
    infoButton: {
        position: "fixed",
        right: "1rem",
        bottom: "1rem"
    }
});

class Info extends Component {
    state = {
        infoDialog: false,
        lastSearchDialog: false
    };

    openDailog = () => this.setState({ infoDialog: true });

    closeDialog = () => this.setState({ infoDialog: false });

    closeLastSearch = () => this.setState({ lastSearchDialog: false });

    onQuery = () => {
        const { querySearchList } = this.props;
        this.setState({ lastSearchDialog: true, infoDialog: false });
        querySearchList();
    };

    render() {
        const {
            openDailog,
            closeDialog,
            closeLastSearch,
            onQuery,
            state: { infoDialog, lastSearchDialog },
            props: {
                lastSearch,
                onLogout,
                classes: { infoButton }
            }
        } = this;

        return (
            <Fragment>
                <Button
                    mini
                    variant="fab"
                    className={infoButton}
                    color="secondary"
                    onClick={openDailog}
                >
                    <InfoIcon />
                </Button>
                <Dialog open={infoDialog} onClose={closeDialog}>
                    <List>
                        <ListItem button onClick={onQuery}>
                            <ListItemIcon>
                                <LastSearchIcon />
                            </ListItemIcon>
                            <ListItemText primary="Last 5 Search(s)" />
                        </ListItem>
                        <ListItem button onClick={onLogout}>
                            <ListItemIcon>
                                <ExitIcon />
                            </ListItemIcon>
                            <ListItemText primary="Exit" />
                        </ListItem>
                    </List>
                </Dialog>
                {lastSearchDialog && (
                    <LastSearchList
                        open={lastSearchDialog}
                        close={closeLastSearch}
                        searchList={lastSearch}
                    />
                )}
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    lastSearch: state.github.lastSearch
});

const mapDispatchToProps = dispatch => ({
    onLogout: () => dispatch(logout()),
    querySearchList: () => dispatch(onSearchList())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(Info));
