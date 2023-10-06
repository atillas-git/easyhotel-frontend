import { Box, Grid, Typography, Button, Divider } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
const Dashboard = () => {
  return (
    <Box
      sx={(theme) => ({
        flexGrow: 1,
        p: 3,
        backgroundColor: theme.palette.primary.light,
        height: "100%",
        color: theme.palette.primary.dark,
      })}
    >
      <Box sx={{ width: "100%" }}>
        <Typography variant="h5" fontWeight={"bold"}>
          Welcome to EasyHotel
        </Typography>
      </Box>
      <Grid container spacing={7} sx={{ padding: 5 }}>
        <Grid item md={4}>
          <Card sx={{ boxShadow: "none" }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.primary"
                gutterBottom
              >
                Docs
              </Typography>
              <Typography variant="body2">
                Learn EasyHotel by reading the docs and looking to different
                examples.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item md={4}>
          <Card sx={{ boxShadow: "none" }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.primary"
                gutterBottom
              >
                Development Plan
              </Typography>
              <Typography variant="body2">
                You can check out our latest development plans about our
                software
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item md={4}>
          <Card sx={{ boxShadow: "none" }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.primary"
                gutterBottom
              >
                Blog
              </Typography>
              <Typography variant="body2">
                Learn EasyHotel by reading the docs and looking to different
                examples.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      <Divider />
    </Box>
  );
};

export default Dashboard;
