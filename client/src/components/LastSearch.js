import React from "react";
import Dialog from "@material-ui/core/Dialog";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const LastSearch = ({ searchList, open, close }) => {
    let _list = (
        <ListItem>
            <ListItemText primary="No search entry found" />
        </ListItem>
    );

    if (searchList && searchList.length) {
        _list = searchList.map((search, $i) => (
            <ListItem key={search._id}>
                <ListItemText primary={`${$i + 1}. ${search.query}`} />
            </ListItem>
        ));
    }

    return (
        <Dialog open={Boolean(open)} onClose={close}>
            <List>{_list}</List>
        </Dialog>
    );
};

export default LastSearch;
