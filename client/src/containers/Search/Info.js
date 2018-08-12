import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { asyncComponent } from "react-async-component";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import withStyles from "@material-ui/core/styles/withStyles";

import InfoIcon from "@material-ui/icons/MoreVertTwoTone";
import ExitIcon from "@material-ui/icons/ArrowBack";
import LastSearchIcon from "@material-ui/icons/HistoryTwoTone";

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
                <LastSearchList
                    open={lastSearchDialog}
                    close={closeLastSearch}
                    searchList={lastSearch}
                />
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
