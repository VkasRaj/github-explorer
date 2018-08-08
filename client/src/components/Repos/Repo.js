import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import withStyles from "@material-ui/core/styles/withStyles";
import Tooltip from "@material-ui/core/Tooltip";
import Hidden from "@material-ui/core/Hidden";

import IssueIcon from "@material-ui/icons/WarningTwoTone";
import LinkIcon from "@material-ui/icons/LinkTwoTone";
import WebIcon from "@material-ui/icons/PublicTwoTone";
import StarIcon from "@material-ui/icons/StarTwoTone";
import ForkIcon from "@material-ui/icons/CallSplitTwoTone";

const styles = theme => ({
    icon: {
        fontSize: 18,
        marginRight: 8
    },
    linkMargin: {
        marginBottom: 20
    },
    cardMargin: {
        marginBottom: 22
    }
});

class Repo extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        const {
            repo: { full_name }
        } = this.props;
        if (full_name === nextProps.repo.full_name) {
            return false;
        }
    }

    render() {
        const {
            repo,
            classes: { icon, linkMargin, cardMargin }
        } = this.props;

        let homepageLink = repo.homepage && (
            <Grid container alignItems="center" className={linkMargin}>
                <WebIcon className={icon} color="action" />
                <Typography variant="caption">
                    <a
                        href={repo.homepage}
                        target="_blank"
                        style={{ color: "inherit" }}
                    >
                        {repo.homepage}
                    </a>
                </Typography>
            </Grid>
        );

        return (
            <Grid container justify="center" className={cardMargin}>
                <Grid item xs={11} sm={8} md={6}>
                    <Card>
                        <Grid container>
                            <Hidden smDown>
                                <Grid item xs={12} md={3}>
                                    <CardMedia
                                        style={{ height: "100%" }}
                                        alt="github repo owner avatar"
                                        title={repo.owner.login}
                                        image={repo.owner.avatar_url}
                                    />
                                </Grid>
                            </Hidden>
                            <Grid item xs={12} md={9}>
                                <CardContent>
                                    <Typography variant="body2">
                                        {repo.full_name}
                                    </Typography>
                                    <Typography variant="caption" gutterBottom>
                                        {repo.description}
                                    </Typography>
                                    <Grid container justify="space-between">
                                        <Grid item>
                                            <Typography
                                                variant="caption"
                                                paragraph
                                            >
                                                Created: {repo.created_at}
                                            </Typography>
                                        </Grid>
                                        <Grid>
                                            <Typography
                                                variant="caption"
                                                paragraph
                                            >
                                                Size:{" "}
                                                {Math.floor(repo.size / 1024)}MB
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid
                                        container
                                        alignItems="center"
                                        className={
                                            !repo.homepage ? linkMargin : ""
                                        }
                                    >
                                        <LinkIcon
                                            className={icon}
                                            color="action"
                                        />
                                        <Typography variant="caption">
                                            <a
                                                href={repo.html_url}
                                                target="_blank"
                                                style={{ color: "inherit" }}
                                            >
                                                {repo.html_url}
                                            </a>
                                        </Typography>
                                    </Grid>
                                    {homepageLink}
                                    <Grid container justify="space-around">
                                        <Grid item>
                                            <Tooltip title="Stars">
                                                <Grid
                                                    container
                                                    alignItems="center"
                                                >
                                                    <StarIcon
                                                        className={icon}
                                                    />
                                                    <Typography variant="caption">
                                                        {repo.stargazers_count}
                                                    </Typography>
                                                </Grid>
                                            </Tooltip>
                                        </Grid>
                                        <Grid item>
                                            <Tooltip title="Forks">
                                                <Grid
                                                    container
                                                    alignItems="center"
                                                >
                                                    <ForkIcon
                                                        className={icon}
                                                    />
                                                    <Typography variant="caption">
                                                        {repo.forks_count}
                                                    </Typography>
                                                </Grid>
                                            </Tooltip>
                                        </Grid>
                                        <Grid item>
                                            <Tooltip title="Open Issues">
                                                <Grid
                                                    container
                                                    alignItems="center"
                                                >
                                                    <IssueIcon
                                                        className={icon}
                                                    />
                                                    <Typography variant="caption">
                                                        {repo.open_issues_count}
                                                    </Typography>
                                                </Grid>
                                            </Tooltip>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(Repo);
