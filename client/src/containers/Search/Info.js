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
    InfoTwoTone as InfoIcon,
    ArrowBack as ExitIcon,
    HistoryTwoTone as LastSearchIcon
} from "@material-ui/icons";

import { onSearchList } from "../../store/actions";

const styles = theme => ({
    infoButton: {
        position: "fixed",
        right: "1rem",
        bottom: "1rem"
    }
});

class Info extends Component {
    state = {
        infoDialog: false
    };

    openDailog = () => this.setState({ infoDialog: true });

    closeDialog = () => this.setState({ infoDialog: false });

    render() {
        const {
            openDailog,
            closeDialog,
            state: { infoDialog },
            props: {
                searchList,
                classes: { infoButton }
            }
        } = this;

        return (
            <Fragment>
                <Button
                    mini
                    variant="fab"
                    className={infoButton}
                    color="primary"
                    onClick={openDailog}
                >
                    <InfoIcon />
                </Button>
                <Dialog open={infoDialog} onClose={closeDialog}>
                    <List>
                        <ListItem button onClick={searchList}>
                            <ListItemIcon>
                                <LastSearchIcon />
                            </ListItemIcon>
                            <ListItemText primary="Last 5 Search(s)" />
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>
                                <ExitIcon />
                            </ListItemIcon>
                            <ListItemText primary="Exit" />
                        </ListItem>
                    </List>
                </Dialog>
            </Fragment>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    searchList: () => dispatch(onSearchList())
});

export default connect(
    null,
    mapDispatchToProps
)(withStyles(styles)(Info));
