import React from "react";
import {
    Grid,
    Typography,
    Card,
    CardMedia,
    CardContent,
    withStyles,
    Tooltip,
    Hidden
} from "@material-ui/core";

import {
    WarningTwoTone as IssueIcon,
    LinkTwoTone as LinkIcon,
    LanguageTwoTone as WebIcon,
    StarTwoTone as StarIcon,
    CallSplitTwoTone as ForkIcon
} from "@material-ui/icons";

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

const Repo = ({ repo, classes: { icon, linkMargin, cardMargin } }) => {
    let homepageLink = repo.homepage && (
        <Grid container alignItems="center" className={linkMargin}>
            <WebIcon className={icon} />
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
                                <Typography>{repo.full_name}</Typography>
                                <Typography variant="caption" gutterBottom>
                                    {repo.description}
                                </Typography>
                                <Grid container justify="space-between">
                                    <Grid item>
                                        <Typography variant="caption" paragraph>
                                            Created: {repo.created_at}
                                        </Typography>
                                    </Grid>
                                    <Grid>
                                        <Typography variant="caption" paragraph>
                                            Size: {Math.floor(repo.size / 1024)}MB
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid
                                    container
                                    alignItems="center"
                                    className={!repo.homepage ? linkMargin : ""}
                                >
                                    <LinkIcon className={icon} />
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
                                            <Grid container alignItems="center">
                                                <StarIcon className={icon} />
                                                <Typography variant="caption">
                                                    {repo.stargazers_count}
                                                </Typography>
                                            </Grid>
                                        </Tooltip>
                                    </Grid>
                                    <Grid item>
                                        <Tooltip title="Forks">
                                            <Grid container alignItems="center">
                                                <ForkIcon className={icon} />
                                                <Typography variant="caption">
                                                    {repo.forks_count}
                                                </Typography>
                                            </Grid>
                                        </Tooltip>
                                    </Grid>
                                    <Grid item>
                                        <Tooltip title="Open Issues">
                                            <Grid container alignItems="center">
                                                <IssueIcon className={icon} />
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
};

export default withStyles(styles)(Repo);
