import React from "react";
import { Dialog, List, ListItem, ListItemText } from "@material-ui/core";

const LastSearch = ({ searchList, open, close }) => {
    const _list =
        searchList &&
        searchList.map((search, $i) => (
            <ListItem key={search._id}>
                <ListItemText primary={`${$i + 1}. ${search.query}`} />
            </ListItem>
        ));

    return (
        <Dialog open={Boolean(open)} onClose={close}>
            <List>{_list}</List>
        </Dialog>
    );
};

export default LastSearch;
