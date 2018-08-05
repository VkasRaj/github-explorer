import React, { Component, Fragment } from "react";
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
                classes: { infoButton }
            }
        } = this;

        return (
            <Fragment>
                <Button
                    variant="fab"
                    className={infoButton}
                    color="primary"
                    onClick={openDailog}
                >
                    <InfoIcon />
                </Button>
                <Dialog open={infoDialog} onClose={closeDialog}>
                    <List>
                        <ListItem button>
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

export default withStyles(styles)(Info);
